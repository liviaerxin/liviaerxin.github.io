---
foam_template:
  name: Docs Docusaurus Template
  description: Creates Docusaurus docs/slip
  filepath: docs/wiki-ffmpeg.md
authors:
  - frank
description: Learn FFmpeg
keywords:
  - learn
  - ffmpeg
image: https://i.imgur.com/mErPwqL.png
tags:
  - cheat-sheet
  - ffmpeg
date: 2023-07-06
last_update: 2023-07-06
---

# FFmpeg Command Samples

A list of FFmpeg command samples for quick lookup!

## Overview

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

## About FFmpeg Command

The common patter of `ffmpeg` looks like:

```sh
ffmpeg [input_options] -i input.mp4 [output_options] output.mp4
```

In short:

- The `[input_options]` before `-i input.mp4` are options used for decoding the video
- The `[output_options]` before `output.mp4` are options used for encoding the video

## FFmpeg Command Examples

It's note worthing to look over FFmpeg Wiki [^ffmpeg]

### List all available `container` formats

```sh
ffmpeg -formats
```

### List all available `codec` formats

```sh
ffmpeg -codecs
```

### List all available `encoder` or `decoder`

```sh
ffmpeg -encoders
ffmpeg -decoders
```

```sh
# Show available `presets`
ffmpeg -h encoder=h264_nvenc
```

### List all frames timestamp

```sh
ffprobe -select_streams v -show_entries frame=pict_type,pts_time -of csv=p=0 -i input.mp4
```

### List all keyframe(I-frame) timestamp

```sh
ffprobe -select_streams v -show_entries frame=pict_type,pts_time -of csv=p=0 -skip_frame nokey -i input.mp4
```

### Read video information json output

```sh
ffprobe -v quiet -show_streams -select_streams v:0 -print_format json video.mp4
```

### Transcode video

There are three possible and reasonable methods for transcoding:

- software decoding and software encoding
- software decoding and hardware encoding
- hardware decoding and hardware encoding

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

### Set keyframe interval

```sh
# mpeg4
ffmpeg -i input.avi -vcodec libxvid -preset fast -g 10 -keyint_min 10 -sc_threshold 0 output.avi 

# NVIDIA GPU
# This sets the I-frame interval at 10 and ensures that no I-frames will be inserted in scene changes
ffmpeg -i input.avi -vcodec h264_nvenc -preset fast -g 10 -keyint_min 10 -sc_threshold 0 output.avi
```

### Clip video

```sh
# Fast clip with stream copy and faster seeking(700x)
ffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:50 -c:v copy output.mp4

# Fast clip with stream copy and slower seeking(600x)
ffmpeg -i video.mp4 -ss 00:00:10 -to 00:00:50 -c:v copy output.mp4

# Slow clip with re-encoding and faster seeking(1x)
ffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:50 -c:v libx264 output.mp4
```

Use filter(Slow)

```sh
ffmpeg -y -i input.mp4 -an -c:v libx264 -filter:v "trim=start=10:end=30" output.mp4
# remove the black video
ffmpeg -y -i input.mp4 -an -c:v libx264 -filter:v "trim=start=10:end=30,setpts=PTS-STARTPTS" output.mp4
```

>NOTE: Cutting video with stream copy will lead the start frame is not precise!

### Slow down/Speed up video

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

### Draw region of interest(ROI) on a video

```sh
# Draw one drawbox

ffmpeg -i input.mp4 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5" output.mp4

ffmpeg -i input.mp4 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5,drawtext=text='Test Text':x=100:y=100:fontsize=24:fontcolor=yellow:box=1:boxcolor=yellow" output.mp4

ffmpeg -y -ss 30 -noaccurate_seek -i input.mp4 -t 10 -c:v libx264 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5,drawtext=text='Test Text':x=100:y=(100-text_h):fontsize=24:fontcolor=black:box=1:boxcolor=red:boxborderw=2" output.mp4
# Trim video and draw box
ffmpeg -y -i input.mp4 -an -c:v libx264 -filter:v "trim=start=10:end=30,drawbox=x=100:y=100:w=200:h=150:color=red@0.5:enable='between(t,10,15)',setpts=PTS-STARTPTS" output.mp4

ffmpeg -y -i input.mp4 -i overlay_video.mp4 -filter_complex "[0:v][1:v]overlay=0:0:enable='between(t,0,25)'" output.mp4
```

```sh
# Draw different `drawbox` at different time on video from a file(using `timeline` feature)
# See timeline: https://ffmpeg.org/ffmpeg-filters.html#Timeline-editing
# See expression: https://ffmpeg.org/ffmpeg-utils.html#Expression-Evaluation
ffmpeg -i input.mp4 -filter_complex_script timeline.txt output.mp4

# `timeline.txt` look like:
[0:v]drawbox=x=100:y=100:w=200:h=150:color=red@0.5:enable='between(t,0,21)'[box1];
[box1]drawbox=x=300:y=200:w=150:h=100:color=green@0.5:t=:enable='between(t,21,40)'[box2];
[box2]drawbox=x=50:y=300:w=300:h=200:color=blue@0.5:t=:enable='between(t,41,60)'


# or using `n`: sequential number of the input frame, starting from 0
[0:v]drawbox=x=100:y=100:w=200:h=150:color=red@0.5:n=0:600[box1];
[box1]drawbox=x=300:y=200:w=150:h=100:color=green@0.5:n=601:1200[box2];
[box2]drawbox=x=50:y=300:w=300:h=200:color=blue@0.5:n=1201:1800
```

```sh
# Draw different `drawbox` at different time on video
ffmpeg -i input.mp4 -filter_complex "[0:v]drawbox=x=100:y=100:w=200:h=150:color=red:t=8:enable='between(t,0,21)'[box1];[box1]drawbox=x=300:y=200:w=150:h=100:color=green:t=8:enable='between(t,21,40)'[box2];[box2]drawbox=x=50:y=300:w=300:h=200:color=blue:t=8:enable='between(t,41,60)'" output.mp4
```

### Pipe ffmpeg

The `FFmpeg Pipe` is very useful in **IPC** for communicating `FFmpeg` with another `process`. For instance, an application generates images to `Pipe` stdin which `FFmpeg` reads and encodes into a video.

**A real-life scenario that FFmpeg read from Pipe**:
An application applied `OpenCV` to process images for object detection, and it will draw ROI but lacks ability to encode a video as efficiently as `FFmpeg` does. So it's somewhat ideal to pipe these images to `FFmpeg` that can encode the video by leveraging hardware acceleration(GPU) capability.

However, FFmpeg can also **write to a Pipe**.

```sh
# It works in Linux and Windows(`cmd`, does not work in `PS`)
ffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:20 -an -c:v copy -f h264 pipe: | ffmpeg -y -i pipe: -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red" output.mp4

ffmpeg -i input.mp4 -c:v rawvideo -pix_fmt bgr24 -r 60 -f rawvideo pipe: | ffmpeg -y -f rawvideo -pix_fmt bgr24 -s 1920x1080 -r 60 -i pipe: -pix_fmt yuv420p -c:v h264_nvenc foo.mp4
ffmpeg -i input.mp4 -pix_fmt yuv420p -r 60 -f rawvideo pipe: | ffmpeg -y -f rawvideo -pix_fmt yuv420p -s 1920x1080 -r 60 -i pipe: -c:v h264_nvenc foo.mp4
ffmpeg -i input.mp4 -an -f h264 pipe: | ffmpeg -y -f h264 -i pipe: -c:v h264_nvenc foo.mp4
```

### Use testsrc

```sh
ffmpeg -y -f lavfi -i testsrc=duration=10:size=1920x1080:rate=60 -c:v libx264 -pix_fmt yuv420p testsrc.mp4
```

### Split and Concatenate

```sh
ffmpeg -y -i input.mp4 -ss 0 -to 10 -c:v copy part1.mp4
ffmpeg -y -i input.mp4 -ss 10 -to 15 -c:v copy part2.mp4
ffmpeg -y -i input.mp4 -ss 15 -c:v copy part3.mp4
```

```sh
ffmpeg -y -i part2.mp4 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5" part2-draw.mp4
```

Slow,

```sh
ffmpeg -y -i part1.mp4 -i part2-draw.mp4 -i part3.mp4 -filter_complex "[0:v][1:v][2:v]concat=n=3:v=1:a=0[outv]" -map "[outv]" output.mp4
```

Fast(Concat protocol),

```sh
ffmpeg -i part1.mp4 -c copy part1.ts
ffmpeg -i part2-draw.mp4 -c copy part2-draw.ts
ffmpeg -i part3.mp4 -c copy part3.ts

ffmpeg -y -i "concat:part1.ts|part2-draw.ts|part3.ts" -c:v copy output.mp4
```

Fast(Concat demuxer),

```sh
ffmpeg -y -f concat -i concat.txt -c:v copy output.mp4
# concat.txt
file 'part1.mp4'
file 'part2-draw.mp4'
file 'part3.mp4'

# Or avoid creating the input file
# bash
ffmpeg -y -f concat -safe 0 -i <(echo "file '$PWD/part1.mp4'";echo "file '$PWD/part2-draw.mp4'";echo "file '$PWD/part3.mp4'";) -c:v copy output.mp4
# cmd
ffmpeg -y -f concat -safe 0 -i <(@echo "file '$PWD/part1.mp4'";@echo "file '$PWD/part2-draw.mp4'";@echo "file '$PWD/part3.mp4'";) -c:v copy output.mp4
```

https://trac.ffmpeg.org/wiki/Concatenate

## References

[^ffmpeg]: [FFmpeg Wiki](https://trac.ffmpeg.org/wiki)
[^chrome]: [Chrome Audio/Video Support](https://www.chromium.org/audio-video/)