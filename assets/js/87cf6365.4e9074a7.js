"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1277],{4865:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=i(74848),t=i(28453),s=i(72170),d=i.n(s);const r='# pull official base image, NOTE to use `devel`\nFROM nvidia/cuda:12.2.0-devel-ubuntu20.04\n\n# Set environment variables to prevent interactive prompts during installation\nENV DEBIAN_FRONTEND=noninteractive\n\n# Install dependencies\nRUN apt-get update && \\\n    apt-get install -y wget git make build-essential pkg-config yasm cmake libtool libc6 libc6-dev unzip libnuma1 libnuma-dev && \\\n    apt-get clean && \\\n    rm -rf /var/lib/apt/lists/*\n\n# Install FFmpeg 6.1\nRUN mkdir -p /opt\n\nRUN cd /opt/ && wget https://github.com/FFmpeg/nv-codec-headers/releases/download/n12.1.14.0/nv-codec-headers-12.1.14.0.tar.gz -O nv-codec-headers-12.1.14.0.tar.gz && tar -xf nv-codec-headers-12.1.14.0.tar.gz\nRUN cd /opt/nv-codec-headers-12.1.14.0 && \\\n    make install PREFIX=/usr\n\nRUN cd /opt && wget https://ffmpeg.org/releases/ffmpeg-6.1.tar.xz -O ffmpeg-6.1.tar.xz && tar -xf ffmpeg-6.1.tar.xz\nRUN cd /opt/ffmpeg-6.1 && \\\n    ./configure --enable-cuda --enable-cuvid --enable-nvdec --enable-nvenc --enable-nonfree --enable-libnpp --extra-cflags=-I/usr/local/cuda/include --extra-ldflags=-L/usr/local/cuda/lib64 --enable-libfreetype --enable-libharfbuzz --enable-libfontconfig --enable-libfribidi --enable-filter=drawtext && \\\n    make -j 8 && \\\n    make install PREFIX=/usr\n\nCMD ["ffmpeg", "-version"]',l={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/ffmpeg-on-cuda-container.mdx"},authors:["frank"],tags:["ffmpeg","docker","cuda","nvidia"],description:"FFmpeg on CUDA Container",keywords:["FFmpeg on CUDA Container"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-09-06T00:00:00.000Z"),draft:!1,enableComments:!0},o="Install FFmpeg on Nvidia CUDA Container",c={id:"ffmpeg-on-cuda-container",title:"Install FFmpeg on Nvidia CUDA Container",description:"FFmpeg on CUDA Container",source:"@site/../../docs/ffmpeg-on-cuda-container.mdx",sourceDirName:".",slug:"/ffmpeg-on-cuda-container",permalink:"/docs/ffmpeg-on-cuda-container",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/ffmpeg-on-cuda-container.mdx",tags:[{inline:!0,label:"ffmpeg",permalink:"/docs/tags/ffmpeg"},{inline:!0,label:"docker",permalink:"/docs/tags/docker"},{inline:!0,label:"cuda",permalink:"/docs/tags/cuda"},{inline:!0,label:"nvidia",permalink:"/docs/tags/nvidia"}],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:1744599368e3,frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/ffmpeg-on-cuda-container.mdx"},authors:["frank"],tags:["ffmpeg","docker","cuda","nvidia"],description:"FFmpeg on CUDA Container",keywords:["FFmpeg on CUDA Container"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-09-06T00:00:00.000Z",draft:!1,enableComments:!0},sidebar:"docs",previous:{title:"FFmpeg Command Samples",permalink:"/docs/ffmpeg-command-samples"},next:{title:"Frequently Asked Questions",permalink:"/docs/frequently-asked-questions"}},p={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step by Step",id:"step-by-step",level:2},{value:"Complete Dockerfile",id:"complete-dockerfile",level:2},{value:"Known issues",id:"known-issues",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"install-ffmpeg-on-nvidia-cuda-container",children:"Install FFmpeg on Nvidia CUDA Container"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.nvidia.com/video-technologies/video-codec-sdk/12.0/ffmpeg-with-nvidia-gpu/index.html",children:"Using FFmpeg with NVIDIA GPU Hardware Acceleration - NVIDIA Docs"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://developer.nvidia.com/blog/nvidia-ffmpeg-transcoding-guide/",children:"NVIDIA FFmpeg Transcoding Guide | NVIDIA Technical Blog"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/user-guide.html",children:"User Guide \u2014 container-toolkit 1.13.5 documentation"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/wiki-cuda",children:"wiki cuda"})}),"\n",(0,a.jsxs)(n.p,{children:["This documentation describes to install ",(0,a.jsx)(n.code,{children:"FFmpeg"})," on ",(0,a.jsx)(n.code,{children:"nvidia/cuda"})," ",(0,a.jsx)(n.strong,{children:"container"})," to use the ",(0,a.jsx)(n.strong,{children:"Nvidia GPU"})," to accelerate encoding."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to know ",(0,a.jsx)(n.a,{href:"https://www.cyberciti.biz/faq/how-to-install-ffmpeg-with-nvidia-gpu-acceleration-on-linux/",children:"how to install FFmpeg with NVIDIA GPU on Linux"}),", go to see that."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"FFmpeg"})," can support hardware-based decoding and encoding for Nvidia GPU card. With the help of Nvidia GPU, ",(0,a.jsx)(n.code,{children:"h264_nvenc"})," can lead encoding speed with ",(0,a.jsx)(n.strong,{children:"5x"})," faster than ",(0,a.jsx)(n.code,{children:"libx264"})," in ",(0,a.jsx)(n.strong,{children:"GTX1080"})," card."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's see how to install everything one by one on the ",(0,a.jsx)(n.strong,{children:"Nvidia CUDA Docker"})," container ",(0,a.jsx)(n.code,{children:"nvidia/cuda:12.2.0-devel-ubuntu20.04"}),", in which CUDA toolkit and GPU driver are already included."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["It must use ",(0,a.jsx)(n.code,{children:"nvidia/cuda:xxx-devel-xxx"})," image to build ",(0,a.jsx)(n.code,{children:"FFmpeg"}),", because the ",(0,a.jsx)(n.code,{children:"dev"})," image contain all the necessary libraries."]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["Make sure ",(0,a.jsx)(n.strong,{children:"Nvidia GPU Driver"})," is installed in your host machine! As it will be mounted into the ",(0,a.jsx)(n.strong,{children:"container"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"ldconfig"})," to check if the required Nvidia GPU driver libraries are available inside the container. Such as,"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"ldconfig -p | grep libcuda\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["When running in the ",(0,a.jsx)(n.code,{children:"nvidia/cuda"})," Docker container, what Nvidia libraries(from the host machine) should be mounted inside the container are specified by the ",(0,a.jsx)(n.code,{children:"NVIDIA_DRIVER_CAPABILITIES"})," env variable, see ",(0,a.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/docker-specialized.html#driver-capabilities",children:"driver-capabilities"}),". Here for ",(0,a.jsx)(n.code,{children:"FFmpeg"})," to employ GPU, it should be included at least as ",(0,a.jsx)(n.code,{children:"NVIDIA_DRIVER_CAPABILITIES=video,utility"}),"."]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"step-by-step",children:"Step by Step"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker run --rm --runtime=nvidia \\\n    -e NVIDIA_VISIBLE_DEVICES=all \\\n    -e NVIDIA_DRIVER_CAPABILITIES=compute,utility \\\n    nvidia/cuda nvidia-smi\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker run --rm --runtime=nvidia \\\n    -e NVIDIA_VISIBLE_DEVICES=all \\\n    -e NVIDIA_DRIVER_CAPABILITIES=compute,utility \\\n    nvidia/cuda bash\n"})}),"\n",(0,a.jsx)(n.h2,{id:"complete-dockerfile",children:"Complete Dockerfile"}),"\n",(0,a.jsxs)(n.p,{children:["The source code is available at ",(0,a.jsx)(n.a,{href:"../code-snippets/dockerfile/nvidia-cuda-ffmpeg/Dockerfile",children:"Dockerfile"})]}),"\n","\n",(0,a.jsx)(d(),{language:"yaml",title:"nvidia-cuda-ffmpeg/Dockerfile",children:r}),"\n",(0,a.jsx)(n.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,a.jsxs)(n.p,{children:["Nvidia Docker encoding stops after long running time with such error message: ",(0,a.jsx)(n.code,{children:"CUDA_ERROR_NO_DEVICE: no CUDA-capable device is detected"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/jellyfin/jellyfin/issues/9287",children:"[Issue]: NVidia Docker transcoding randomly stops working after 5 minutes to 4 hours later. \xb7 Issue #9287 \xb7 jellyfin/jellyfin \xb7 GitHub"})}),"\n",(0,a.jsx)(n.p,{children:"Possible solution:"}),"\n",(0,a.jsxs)(n.p,{children:["Edit ",(0,a.jsx)(n.code,{children:"/etc/defautls/grub"}),","]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'GRUB_CMDLINE_LINUX_DEFAULT="quiet splash systemd.unified_cgroup_hierarchy=0"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then run ",(0,a.jsx)(n.code,{children:"update-grub"})," and reboot."]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);