---
foam_template:
  name: Blog Docusaurus Template
  description: Creates Docusaurus blog/slip
  filepath: blog/setup-nfs-sever.md
authors:
  - frank
tags:
  - docker
  - nfs
description: Setup NFS Sever
keywords:
  - Setup NFS Sever
image: https://i.imgur.com/mErPwqL.png
date: 2023-08-01
draft: false
enableComments: true # for Gisqus
---

# Setup NFS Sever In Docker

## Setup a NFS server

```sh
docker run -it --rm \
  --name nfs \ 
  --privileged \
  -v /data/volume/test:/nfs-share \
  -e SHARED_DIRECTORY=/nfs-share \
  -p 2049:2049 \
  itsthenetwork/nfs-server-alpine:latest
```

Get the ip address of the nfs server,

```sh
docker inspect \
  -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
  nfs
```

Here the output is

```sh
172.17.0.2
```

## Test NFS server by manual **mount** in the container

> NOTE: run container as root by option `--privileged` or `--cap-add SYS_ADMIN` when permissions denied inside the container:

```sh
docker run -it --rm --privileged busybox sh
```

Inside the container:

> NOTE: Due to the fsid=0 parameter set in the /etc/exports file, there's no need to specify the folder name when mounting from a client. For example, this works fine even though the folder being mounted and shared is /nfs-share:
 
```sh
mkdir /mnt
mount -v -o vers=4,loud 172.17.0.2:/ /mnt

echo "some text here" > /mnt/file1.txt
```

Then go to the Host to list directory `/data/volume/test`, where you will find the `file1.txt` is sitting. 

```sh
cat /data/volume/test/file1.txt
```

## Test NFS server in a Docker container with creating a NFS volume

Create a NFS volume in Docker

```sh
docker volume create --driver local \
  --opt type=nfs \
  --opt o=addr=172.17.0.2,nfsvers=4 \
  --opt device=:/ \
  nfs-volume
```

```sh
docker inspect nfs-volume
```

Then run a container with the created volume `nfs-volume`.

```sh
docker run -it --rm \
  --name nfs-test \
  -v nfs-volume:/mnt \
  busybox \
  sh
```

Or use the combined one command which will create a volume `nfsvolume`, 

```sh
docker run -it --rm \
  --name nfs-test \
  --mount 'type=volume,source=nfsvolume,volume-driver=local,volume-opt=type=nfs,volume-opt=device=:/,"volume-opt=o=addr=172.17.0.2,rw,nfsvers=4,async",target=/mnt' \
  busybox \
  sh
```

## Setup a NFS Server and Mount NFS Volume int Docker Compose

```yaml
version: '3'
services:
  nfs-client:
    image: busybox
    ports:
      - 8001:8000
    environment:
      - ROOT_PATH=/upload
    working_dir: /app
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload --log-config=log_conf.yaml
    volumes:
      - type: volume
        source: nfs-volume
        target: /data
        volume:
          nocopy: true
    depends_on:
      - nfs-server
    networks:
      backend:

  nfs-server:
    image: itsthenetwork/nfs-server-alpine:latest
    privileged: true
    # ports:
      # - 2049:2049
    environment:
      SHARED_DIRECTORY: /nfs-share
    working_dir: /usr/src/app/docusaurus
    volumes:
      - /data/volume/mtr:/nfs-share
    networks:
      backend:
        ipv4_address: 172.28.0.2

networks:
  backend:
    driver: bridge
    ipam:
      config:
        - subnet: 172.28.0.0/16
          gateway: 172.28.0.1

volumes:
  nfs-volume:
    driver: local
    driver_opts:
      type: nfs
      o: "addr=172.28.0.2,nfsvers=4,async"
      device: ":/"
```