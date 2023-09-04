# pull official base image, NOTE to use `devel`
FROM nvidia/cuda:12.2.0-devel-ubuntu20.04

# Set environment variables to prevent interactive prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && \
    apt-get install -y wget git make build-essential pkg-config yasm cmake libtool libc6 libc6-dev unzip libnuma1 libnuma-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Build and Install `ffnvcodec`
RUN git clone https://git.videolan.org/git/ffmpeg/nv-codec-headers.git
RUN cd nv-codec-headers && \
    make install && \
    cd -

# Build and Install `ffmpeg` with latest version
RUN git clone https://git.ffmpeg.org/ffmpeg.git ffmpeg/
RUN cd ffmpeg && \
    ./configure --enable-cuda --enable-cuvid --enable-nvdec --enable-nvenc --enable-nonfree --enable-libnpp --extra-cflags=-I/usr/local/cuda/include --extra-ldflags=-L/usr/local/cuda/lib64 --disable-static --enable-shared && \
    make -j 8 && \
    make install

CMD ["ffmpeg", "-version"]