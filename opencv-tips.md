# OpenCV tips

Q: Whether the image/frame from VideoCapture is in `BGR` or `YUV` pixels format?
A:
VideoCapture will convert the image automatically to BGR colorspace.
you can disable this conversion (and receive YUV) by setting the CAP_PROP_CONVERT_RGB property to false.
