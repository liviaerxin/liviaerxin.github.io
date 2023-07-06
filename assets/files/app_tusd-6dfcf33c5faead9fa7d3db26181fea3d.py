"""_summary_
Usage:
uvicorn app_tusd:app --reload

Description:
A file resumable upload server implemented by FastAPI comply with the `tus` resumable upload protocol

[GitHub - tus/tus-resumable-upload-protocol: Open Protocol for Resumable File Uploads](https://github.com/tus/tus-resumable-upload-protocol)

"""
from fastapi import FastAPI, Header, Request, HTTPException
from starlette.requests import ClientDisconnect
from fastapi.responses import HTMLResponse, JSONResponse, Response
from typing import Annotated, Union, Any, Hashable
import base64
import hashlib
from uuid import uuid4
from datetime import datetime, timedelta
import json json
import io
import os

app = FastAPI()

# fmt: off
html_content = """
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Uppy</title>
    <link href="https://releases.transloadit.com/uppy/v3.3.1/uppy.min.css" rel="stylesheet">
</head>
<body>
<div id="drag-drop-area"></div>

<script type="module">
    import {Uppy, Dashboard, Tus} from "https://releases.transloadit.com/uppy/v3.3.1/uppy.min.mjs"
    var uppy = new Uppy()
        .use(Dashboard, {
            inline: true,
            target: '#drag-drop-area'
        })
        .use(Tus, {endpoint: '/files/'})

    uppy.on('complete', (result) => {
        console.log('Upload complete! We’ve uploaded these files:', result.successful)
    })
</script>
</body>
</html>
"""
# fmt: on

tus_version = '1.0.0'
tus_extension = 'creation,creation-defer-length,creation-with-upload,expiration,termination'
tus_checksum_algorithm = 'md5,sha1,crc32'
max_size=128849018880
location="http://127.0.0.1:8000/files"
files_dir="/tmp/files"

from pydantic import BaseModel
class FileMetadata(BaseModel):
    uid: str
    metadata: dict[Hashable, str]
    size: int
    offset: int = 0
    upload_part: int = 0
    created_at: str
    defer_length: bool
    upload_chunk_size: int = 0
    expires: str | None
    
    @classmethod
    def from_request(
            cls,
            uid: str,
            metadata: dict[Any, str],
            size: int,
            created_at: str,
            defer_length: bool,
            expires: str
    ):
        return FileMetadata(
            uid=uid,
            metadata=metadata,
            size=size,
            created_at=created_at,
            defer_length=defer_length,
            expires=expires
        )
    
metadata_cache = {}

@app.get("/")
async def home():
    return {"message": "Hello World"}

@app.get("/uppy.html")
async def read_uppy():
    return HTMLResponse(html_content)

@app.post("/files")
async def create_upload_resource(request: Request, repsonse: Response, 
    upload_metadata: str = Header(None),
    upload_length: int = Header(None),
    upload_defer_length: int = Header(None),):
    
    if upload_defer_length is not None and upload_defer_length != 1:
        raise HTTPException(status_code=400, detail="Invalid Upload-Defer-Length")

    defer_length = upload_defer_length is not None

    # Create a new upload and store the file and metadata in the mapping
    metadata = {}
    if upload_metadata is not None and upload_metadata != '':
        # Decode the base64-encoded string
        for kv in upload_metadata.split(","):
            key, value = kv.rsplit(" ", 1)
            decoded_value = base64.b64decode(value.strip()).decode("utf-8")
            metadata[key.strip()] = decoded_value

    uuid = str(uuid4().hex)

    date_expiry = datetime.now() + timedelta(days=1)
    saved_meta_data = FileMetadata.from_request(
        uuid,
        metadata,
        upload_length,
        str(datetime.now()),
        defer_length,
        str(date_expiry.isoformat()),
    )
    
    _write_metadata(uuid, saved_meta_data)
    
    open(os.path.join(files_dir, f'{uuid}'), 'a').close()

    chunk: bool | None = await _read_request_stream(request, uuid, True)
    if chunk:
        response = _get_and_save_the_file(
            response,
            uuid,
        )
        response.headers["Location"] = f"{location}/{uuid}"
        return response

    response.headers["Location"] = f"{location}/{uuid}"
    response.headers["Tus-Resumable"] = tus_version
    response.status_code = 201
    
    return response
    
@app.head("/files/{uuid}")
async def read_file_offset(request: Request):
    pass

@app.patch("/files/{uuid}")
async def upload_file(request: Request):
    pass

"""
curl -v -X OPTIONS http://127.0.0.1:8000/files
"""
@app.options("/files", status_code=204)
async def read_tus_config(request: Request, response: Response):
    response.headers["Tus-Resumable"] = tus_version
    response.headers["Tus-Checksum-Algorithm"] = tus_checksum_algorithm
    response.headers["Tus-Version"] = tus_version
    response.headers["Tus-Max-Size"] = str(max_size)
    response.headers["Tus-Extension"] = tus_extension
    
    return

@app.delete("/files/{uuid}")
async def delete_file(request: Request):
    pass


async def _read_request_stream(request: Request, uuid: str, post_request: bool = False) -> bool | None:
    meta = _read_metadata(uuid)
    if not meta or not os.path.exists(os.path.join(files_dir, uuid)):
        return False

    with open(f"{files_dir}/{uuid}", "ab") as f:
        async for chunk in request.stream():
            # EOF
            if post_request and chunk is None or len(chunk) == 0:
                return None

            chunk_size = len(chunk)
            f.write(chunk)
            meta.offset += chunk_size
            meta.upload_chunk_size = chunk_size
            meta.upload_part += 1
            _write_metadata(meta)

    return True

def _read_metadata(uuid) -> FileMetadata | None:
    return metadata_cache.get(uuid)

def _write_metadata(uuid, meta: FileMetadata):
    metadata_cache[uuid] = meta