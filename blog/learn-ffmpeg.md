---
foam_template:
  name: Docs Docusaurus Template
  description: Creates Docusaurus docs/slip
  filepath: docs/learn-ffmpeg.md
authors:
  - frank
description: Learn FFmpeg
keywords:
  - learn
  - ffmpeg
image: https://i.imgur.com/mErPwqL.png
tags:
  - learn
  - ffmpeg
date: 2023-07-06
last_update: 2023-07-06
---

# Learn FFmpeg

Examples of Container and Codec lists in Chrome[^chrome]:

Video Container Format:

- MP4 [`.mp4` file extension]
- Ogg
- WebM
- WAV
- HLS [`.m3u8` file extension]

<!--truncate-->

Video Codec Format:

- VP8
- VP9
- H.264 [Chrome only]
- H.265 [Chrome only and also only with the underlying OS support]
- MPEG-4 [Chrome OS only, aka **Xvid**, **DivX**]


## FFmpeg Command Samples

It's note worthing to look over FFmpeg Wiki [^ffmpeg]

List all available `container` formats:

```sh
ffmpeg -formats
```

List all available `codec` formats:

```sh
ffmpeg -codecs
```

List private options of the `codec`:

```sh
# Show available `presets`
ffmpeg -h encoder=h264_nvenc
```

List all frames timestamp:

```sh
ffprobe -select_streams v -show_entries frame=pict_type,pts_time -of csv=p=0 -i input.mp4
```

List all keyframe(I-frame) timestamp:

```sh
ffprobe -select_streams v -show_entries frame=pict_type,pts_time -of csv=p=0 -skip_frame nokey -i input.mp4
```

Convert video:

you can convert either the `container formats` or the `codecs formats`, such as:

```sh
# To `mp4` container and `h.264` codecs(the lower crf, the higher quality)
ffmpeg -i input.avi -c:v libx264 -preset fast -crf 23 output.mp4

# To `mp4` container and `mpeg4` codecs
ffmpeg -i input.avi -c:v libxvid -preset fast output.mp4

# To be friendly for streaming, adding necessary metadata to begin playback faster! 
ffmpeg -i input.avi -c:v libx264 -preset fast -crf 23 -movflags +faststart output.mp4

# Remove audio
ffmpeg -i input.avi -c:v libx264 -preset fast -crf 23 -an output.mp4

# Use NVIDIA GPU
ffmpeg -i input.avi -c:v h264_nvenc -preset fast output.avi

# keep quality
ffmpeg -i input.avi -c:v h264_nvenc -preset fast -rc constqp -cq 19 output.avi
```

Set keyframe interval:

```sh
# mpeg4
ffmpeg -i input.avi -vcodec libxvid -preset fast -g 10 -keyint_min 10 -sc_threshold 0 output.avi 

# NVIDIA GPU
# This sets the I-frame interval at 10 and ensures that no I-frames will be inserted in scene changes
ffmpeg -i input.avi -vcodec h264_nvenc -preset fast -g 10 -keyint_min 10 -sc_threshold 0 output.avi
```

Trim video:

```sh
# Fast clip with stream copy and faster seeking(700x)
ffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:50 -c:v copy output.mp4

# Fast clip with stream copy and slower seeking(600x)
ffmpeg -i video.mp4 -ss 00:00:10 -to 00:00:50 -c:v copy output.mp4

# Slow clip with re-encoding and faster seeking(1x)
ffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:50 -c:v libx264 output.mp4
```

>NOTE: Cutting video with stream copy will lead the start frame is not precise!

Slow down/Speed up video:

```sh
# Slow down to 1/2x in fast way
ffmpeg -y -itsscale 2 -i video.mp4 -c:v copy output.mp4

# Speed up to 2x in fast way
ffmpeg -y -itsscale 0.5 -i video.mp4 -c:v copy output.mp4

# Speed up to 2x with re-encoding in slow way
ffmpeg -y -itsscale 0.5 -i video.mp4 -c:v libx264 output.mp4

# Speed up to 2x with `setpts filter`(which requires re-encoding) in slow way
ffmpeg -i video.mp4 -filter:v "setpts=0.5*PTS" output.mp4

# Change fps to slow down/speed up but keeping duration
ffmpeg -i video.mp4 -filter:v "fps=30" output.mp4
```

## References

[^ffmpeg]: [FFmpeg Wiki](https://trac.ffmpeg.org/wiki)
[^chrome]: [Chrome Audio/Video Support](https://www.chromium.org/audio-video/)