# https://stackoverflow.com/questions/12503368/making-a-video-with-opencv-and-ffmpeg-how-to-find-the-right-color-format
# https://stackoverflow.com/questions/34167691/pipe-opencv-images-to-ffmpeg-using-python
# pipe from python output to ffmpeg input
"""Usage
# video_size must be same with the output from python
python ffmpeg_pipe_python.py | ffmpeg -y -f rawvideo -pix_fmt bgr24 -s 1920x1080 -r 60 -an -i pipe: -r 60 -c:v h264_videotoolbox foo.mp4
python ffmpeg_pipe_python.py | ffmpeg -y -f rawvideo -pix_fmt bgr24 -s 1920x1080 -r 60 -i pipe: foo.mp4
"""
import cv2, sys
import numpy as np

cap = cv2.VideoCapture("/Users/frankchen/media/out.mp4")

if not cap.isOpened():
    print("failed to read from file!")
    exit(1)
    
width  = cap.get(cv2.CAP_PROP_FRAME_WIDTH)   # float `width`
height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)  # float `height`
# DONT print any other logs which will go into the pipe
# print(f"width x height: [{width} x {height}]")

while True:
    ret, frame = cap.read()
    if not ret:
        # DONT print any other logs which will go into the pipe
        # print("EOF!")
        break
    # NOTE: `frame` has `bgr24` pixel format in default in OpenCV
    sys.stdout.buffer.write(frame.tobytes())
    # sys.stdout.flush()
    
cap.release()