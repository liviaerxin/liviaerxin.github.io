"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=m(a),d=o,u=f["".concat(l,".").concat(d)]||f[d]||c[d]||r;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:o,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));const r={foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/wiki-ffmpeg.md"},authors:["frank"],description:"Learn FFmpeg",keywords:["learn","ffmpeg"],image:"https://i.imgur.com/mErPwqL.png",tags:["cheat-sheet","ffmpeg"],date:new Date("2023-07-06T00:00:00.000Z")},p="FFmpeg Command Samples",i={permalink:"/blog/ffmpeg-command-samples",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/ffmpeg-command-samples.md",source:"@site/../../blog/ffmpeg-command-samples.md",title:"FFmpeg Command Samples",description:"Learn FFmpeg",date:"2023-07-06T00:00:00.000Z",formattedDate:"July 6, 2023",tags:[{label:"cheat-sheet",permalink:"/blog/tags/cheat-sheet"},{label:"ffmpeg",permalink:"/blog/tags/ffmpeg"}],readingTime:5.76,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/wiki-ffmpeg.md"},authors:["frank"],description:"Learn FFmpeg",keywords:["learn","ffmpeg"],image:"https://i.imgur.com/mErPwqL.png",tags:["cheat-sheet","ffmpeg"],date:"2023-07-06T00:00:00.000Z"},prevItem:{title:"MDX Features of Docusaurus",permalink:"/blog/docusaurus-mdx-features"},nextItem:{title:"Wiki CUDA",permalink:"/blog/wiki-cuda"}},l={authorsImageUrls:[void 0]},m=[{value:"Overview",id:"overview",level:2},{value:"About FFmpeg Command",id:"about-ffmpeg-command",level:2},{value:"FFmpeg Command Examples",id:"ffmpeg-command-examples",level:2},{value:"List all available <code>container</code> formats",id:"list-all-available-container-formats",level:3},{value:"List all available <code>codec</code> formats",id:"list-all-available-codec-formats",level:3},{value:"List all available <code>encoder</code> or <code>decoder</code>",id:"list-all-available-encoder-or-decoder",level:3},{value:"List all frames timestamp",id:"list-all-frames-timestamp",level:3},{value:"List all keyframe(I-frame) timestamp",id:"list-all-keyframei-frame-timestamp",level:3},{value:"Read video information json output",id:"read-video-information-json-output",level:3},{value:"Transcode video",id:"transcode-video",level:3},{value:"Set keyframe interval",id:"set-keyframe-interval",level:3},{value:"Clip video",id:"clip-video",level:3},{value:"Slow down/Speed up video",id:"slow-downspeed-up-video",level:3},{value:"Draw region of interest(ROI) on a video",id:"draw-region-of-interestroi-on-a-video",level:3},{value:"Pipe ffmpeg",id:"pipe-ffmpeg",level:3},{value:"Use testsrc",id:"use-testsrc",level:3},{value:"Split and Concatenate",id:"split-and-concatenate",level:3},{value:"References",id:"references",level:2}],s={toc:m},f="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A list of FFmpeg command samples for quick lookup!"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Examples of Container and Codec lists in Chrome",(0,o.kt)("sup",{parentName:"p",id:"fnref-chrome-52b4f7"},(0,o.kt)("a",{parentName:"sup",href:"#fn-chrome-52b4f7",className:"footnote-ref"},"chrome")),":"),(0,o.kt)("p",null,"Video Container Format:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MP4 ","[",(0,o.kt)("inlineCode",{parentName:"li"},".mp4")," file extension]"),(0,o.kt)("li",{parentName:"ul"},"Ogg"),(0,o.kt)("li",{parentName:"ul"},"WebM"),(0,o.kt)("li",{parentName:"ul"},"WAV"),(0,o.kt)("li",{parentName:"ul"},"HLS ","[",(0,o.kt)("inlineCode",{parentName:"li"},".m3u8")," file extension]")),(0,o.kt)("p",null,"Video Codec Format:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VP8"),(0,o.kt)("li",{parentName:"ul"},"VP9"),(0,o.kt)("li",{parentName:"ul"},"H.264 ","[Chrome only]"),(0,o.kt)("li",{parentName:"ul"},"H.265 ","[Chrome only and also only with the underlying OS support]"),(0,o.kt)("li",{parentName:"ul"},"MPEG-4 ","[Chrome OS only, aka ",(0,o.kt)("strong",{parentName:"li"},"Xvid"),", ",(0,o.kt)("strong",{parentName:"li"},"DivX"),"]")),(0,o.kt)("h2",{id:"about-ffmpeg-command"},"About FFmpeg Command"),(0,o.kt)("p",null,"The common patter of ",(0,o.kt)("inlineCode",{parentName:"p"},"ffmpeg")," looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg [input_options] -i input.mp4 [output_options] output.mp4\n")),(0,o.kt)("p",null,"In short:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"[input_options]")," before ",(0,o.kt)("inlineCode",{parentName:"li"},"-i input.mp4")," are options used for decoding the video"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"[output_options]")," before ",(0,o.kt)("inlineCode",{parentName:"li"},"output.mp4")," are options used for encoding the video")),(0,o.kt)("h2",{id:"ffmpeg-command-examples"},"FFmpeg Command Examples"),(0,o.kt)("p",null,"It's note worthing to look over FFmpeg Wiki ",(0,o.kt)("sup",{parentName:"p",id:"fnref-ffmpeg-52b4f7"},(0,o.kt)("a",{parentName:"sup",href:"#fn-ffmpeg-52b4f7",className:"footnote-ref"},"ffmpeg"))),(0,o.kt)("h3",{id:"list-all-available-container-formats"},"List all available ",(0,o.kt)("inlineCode",{parentName:"h3"},"container")," formats"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -formats\n")),(0,o.kt)("h3",{id:"list-all-available-codec-formats"},"List all available ",(0,o.kt)("inlineCode",{parentName:"h3"},"codec")," formats"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -codecs\n")),(0,o.kt)("h3",{id:"list-all-available-encoder-or-decoder"},"List all available ",(0,o.kt)("inlineCode",{parentName:"h3"},"encoder")," or ",(0,o.kt)("inlineCode",{parentName:"h3"},"decoder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -encoders\nffmpeg -decoders\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Show available `presets`\nffmpeg -h encoder=h264_nvenc\n")),(0,o.kt)("h3",{id:"list-all-frames-timestamp"},"List all frames timestamp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffprobe -select_streams v -show_entries frame=pict_type,pts_time -of csv=p=0 -i input.mp4\n")),(0,o.kt)("h3",{id:"list-all-keyframei-frame-timestamp"},"List all keyframe(I-frame) timestamp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffprobe -select_streams v -show_entries frame=pict_type,pts_time -of csv=p=0 -skip_frame nokey -i input.mp4\n")),(0,o.kt)("h3",{id:"read-video-information-json-output"},"Read video information json output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffprobe -v quiet -show_streams -select_streams v:0 -print_format json video.mp4\n")),(0,o.kt)("h3",{id:"transcode-video"},"Transcode video"),(0,o.kt)("p",null,"There are three possible and reasonable methods for transcoding:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"software decoding and software encoding"),(0,o.kt)("li",{parentName:"ul"},"software decoding and hardware encoding"),(0,o.kt)("li",{parentName:"ul"},"hardware decoding and hardware encoding")),(0,o.kt)("p",null,"you can convert either the ",(0,o.kt)("inlineCode",{parentName:"p"},"container formats")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"codecs formats"),", such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# To `mp4` container and `h.264` codecs(the lower crf, the higher quality)\nffmpeg -i input.avi -c:v libx264 -preset fast -crf 23 output.mp4\n\n# To `mp4` container and `mpeg4` codecs\nffmpeg -i input.avi -c:v libxvid -preset fast output.mp4\n\n# To be friendly for streaming, adding necessary metadata to begin playback faster! \nffmpeg -i input.avi -c:v libx264 -preset fast -crf 23 -movflags +faststart output.mp4\n\n# Remove audio\nffmpeg -i input.avi -c:v libx264 -preset fast -crf 23 -an output.mp4\n\n# Use NVIDIA GPU\nffmpeg -i input.avi -c:v h264_nvenc -preset fast output.avi\n\n# keep quality\nffmpeg -i input.avi -c:v h264_nvenc -preset fast -rc constqp -cq 19 output.avi\n")),(0,o.kt)("h3",{id:"set-keyframe-interval"},"Set keyframe interval"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# mpeg4\nffmpeg -i input.avi -vcodec libxvid -preset fast -g 10 -keyint_min 10 -sc_threshold 0 output.avi \n\n# NVIDIA GPU\n# This sets the I-frame interval at 10 and ensures that no I-frames will be inserted in scene changes\nffmpeg -i input.avi -vcodec h264_nvenc -preset fast -g 10 -keyint_min 10 -sc_threshold 0 output.avi\n")),(0,o.kt)("h3",{id:"clip-video"},"Clip video"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Fast clip with stream copy and faster seeking(700x)\nffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:50 -c:v copy output.mp4\n\n# Fast clip with stream copy and slower seeking(600x)\nffmpeg -i video.mp4 -ss 00:00:10 -to 00:00:50 -c:v copy output.mp4\n\n# Slow clip with re-encoding and faster seeking(1x)\nffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:50 -c:v libx264 output.mp4\n")),(0,o.kt)("p",null,"Use filter(Slow)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -y -i input.mp4 -an -c:v libx264 -filter:v "trim=start=10:end=30" output.mp4\n# remove the black video\nffmpeg -y -i input.mp4 -an -c:v libx264 -filter:v "trim=start=10:end=30,setpts=PTS-STARTPTS" output.mp4\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Cutting video with stream copy will lead the start frame is not precise!")),(0,o.kt)("h3",{id:"slow-downspeed-up-video"},"Slow down/Speed up video"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Slow down to 1/2x in fast way\nffmpeg -y -itsscale 2 -i video.mp4 -c:v copy output.mp4\n\n# Speed up to 2x in fast way\nffmpeg -y -itsscale 0.5 -i video.mp4 -c:v copy output.mp4\n\n# Speed up to 2x with re-encoding in slow way\nffmpeg -y -itsscale 0.5 -i video.mp4 -c:v libx264 output.mp4\n\n# Speed up to 2x with `setpts filter`(which requires re-encoding) in slow way\nffmpeg -i video.mp4 -filter:v "setpts=0.5*PTS" output.mp4\n\n# Change fps to slow down/speed up but keeping duration\nffmpeg -i video.mp4 -filter:v "fps=30" output.mp4\n')),(0,o.kt)("h3",{id:"draw-region-of-interestroi-on-a-video"},"Draw region of interest(ROI) on a video"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Draw one drawbox\n\nffmpeg -i input.mp4 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5" output.mp4\n\nffmpeg -i input.mp4 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5,drawtext=text=\'Test Text\':x=100:y=100:fontsize=24:fontcolor=yellow:box=1:boxcolor=yellow" output.mp4\n\nffmpeg -y -ss 30 -noaccurate_seek -i input.mp4 -t 10 -c:v libx264 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5,drawtext=text=\'Test Text\':x=100:y=(100-text_h):fontsize=24:fontcolor=black:box=1:boxcolor=red:boxborderw=2" output.mp4\n# Trim video and draw box\nffmpeg -y -i input.mp4 -an -c:v libx264 -filter:v "trim=start=10:end=30,drawbox=x=100:y=100:w=200:h=150:color=red@0.5:enable=\'between(t,10,15)\',setpts=PTS-STARTPTS" output.mp4\n\nffmpeg -y -i input.mp4 -i overlay_video.mp4 -filter_complex "[0:v][1:v]overlay=0:0:enable=\'between(t,0,25)\'" output.mp4\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Draw different `drawbox` at different time on video from a file(using `timeline` feature)\n# See timeline: https://ffmpeg.org/ffmpeg-filters.html#Timeline-editing\n# See expression: https://ffmpeg.org/ffmpeg-utils.html#Expression-Evaluation\nffmpeg -i input.mp4 -filter_complex_script timeline.txt output.mp4\n\n# `timeline.txt` look like:\n[0:v]drawbox=x=100:y=100:w=200:h=150:color=red@0.5:enable='between(t,0,21)'[box1];\n[box1]drawbox=x=300:y=200:w=150:h=100:color=green@0.5:t=:enable='between(t,21,40)'[box2];\n[box2]drawbox=x=50:y=300:w=300:h=200:color=blue@0.5:t=:enable='between(t,41,60)'\n\n\n# or using `n`: sequential number of the input frame, starting from 0\n[0:v]drawbox=x=100:y=100:w=200:h=150:color=red@0.5:n=0:600[box1];\n[box1]drawbox=x=300:y=200:w=150:h=100:color=green@0.5:n=601:1200[box2];\n[box2]drawbox=x=50:y=300:w=300:h=200:color=blue@0.5:n=1201:1800\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Draw different `drawbox` at different time on video\nffmpeg -i input.mp4 -filter_complex \"[0:v]drawbox=x=100:y=100:w=200:h=150:color=red:t=8:enable='between(t,0,21)'[box1];[box1]drawbox=x=300:y=200:w=150:h=100:color=green:t=8:enable='between(t,21,40)'[box2];[box2]drawbox=x=50:y=300:w=300:h=200:color=blue:t=8:enable='between(t,41,60)'\" output.mp4\n")),(0,o.kt)("h3",{id:"pipe-ffmpeg"},"Pipe ffmpeg"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FFmpeg Pipe")," is very useful in ",(0,o.kt)("strong",{parentName:"p"},"IPC")," for communicating ",(0,o.kt)("inlineCode",{parentName:"p"},"FFmpeg")," with another ",(0,o.kt)("inlineCode",{parentName:"p"},"process"),". For instance, an application generates images to ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipe")," stdin which ",(0,o.kt)("inlineCode",{parentName:"p"},"FFmpeg")," reads and encodes into a video."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A real-life scenario that FFmpeg read from Pipe"),":\nAn application applied ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenCV")," to process images for object detection, and it will draw ROI but lacks ability to encode a video as efficiently as ",(0,o.kt)("inlineCode",{parentName:"p"},"FFmpeg")," does. So it's somewhat ideal to pipe these images to ",(0,o.kt)("inlineCode",{parentName:"p"},"FFmpeg")," that can encode the video by leveraging hardware acceleration(GPU) capability."),(0,o.kt)("p",null,"However, FFmpeg can also ",(0,o.kt)("strong",{parentName:"p"},"write to a Pipe"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# It works in Linux and Windows(`cmd`, does not work in `PS`)\nffmpeg -ss 00:00:10 -i video.mp4 -to 00:00:20 -an -c:v copy -f h264 pipe: | ffmpeg -y -i pipe: -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red" output.mp4\n\nffmpeg -i input.mp4 -c:v rawvideo -pix_fmt bgr24 -r 60 -f rawvideo pipe: | ffmpeg -y -f rawvideo -pix_fmt bgr24 -s 1920x1080 -r 60 -i pipe: -pix_fmt yuv420p -c:v h264_nvenc foo.mp4\nffmpeg -i input.mp4 -pix_fmt yuv420p -r 60 -f rawvideo pipe: | ffmpeg -y -f rawvideo -pix_fmt yuv420p -s 1920x1080 -r 60 -i pipe: -c:v h264_nvenc foo.mp4\nffmpeg -i input.mp4 -an -f h264 pipe: | ffmpeg -y -f h264 -i pipe: -c:v h264_nvenc foo.mp4\n')),(0,o.kt)("h3",{id:"use-testsrc"},"Use testsrc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -y -f lavfi -i testsrc=duration=10:size=1920x1080:rate=60 -c:v libx264 -pix_fmt yuv420p testsrc.mp4\n")),(0,o.kt)("h3",{id:"split-and-concatenate"},"Split and Concatenate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -y -i input.mp4 -ss 0 -to 10 -c:v copy part1.mp4\nffmpeg -y -i input.mp4 -ss 10 -to 15 -c:v copy part2.mp4\nffmpeg -y -i input.mp4 -ss 15 -c:v copy part3.mp4\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -y -i part2.mp4 -filter:v "drawbox=x=100:y=100:w=200:h=150:color=red@0.5" part2-draw.mp4\n')),(0,o.kt)("p",null,"Slow,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -y -i part1.mp4 -i part2-draw.mp4 -i part3.mp4 -filter_complex "[0:v][1:v][2:v]concat=n=3:v=1:a=0[outv]" -map "[outv]" output.mp4\n')),(0,o.kt)("p",null,"Fast(Concat protocol),"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -i part1.mp4 -c copy part1.ts\nffmpeg -i part2-draw.mp4 -c copy part2-draw.ts\nffmpeg -i part3.mp4 -c copy part3.ts\n\nffmpeg -y -i "concat:part1.ts|part2-draw.ts|part3.ts" -c:v copy output.mp4\n')),(0,o.kt)("p",null,"Fast(Concat demuxer),"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -y -f concat -i concat.txt -c:v copy output.mp4\n# concat.txt\nfile 'part1.mp4'\nfile 'part2-draw.mp4'\nfile 'part3.mp4'\n\n# Or avoid creating the input file\n# bash\nffmpeg -y -f concat -safe 0 -i <(echo \"file '$PWD/part1.mp4'\";echo \"file '$PWD/part2-draw.mp4'\";echo \"file '$PWD/part3.mp4'\";) -c:v copy output.mp4\n# cmd\nffmpeg -y -f concat -safe 0 -i <(@echo \"file '$PWD/part1.mp4'\";@echo \"file '$PWD/part2-draw.mp4'\";@echo \"file '$PWD/part3.mp4'\";) -c:v copy output.mp4\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://trac.ffmpeg.org/wiki/Concatenate"},"https://trac.ffmpeg.org/wiki/Concatenate")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-chrome-52b4f7"},(0,o.kt)("a",{parentName:"li",href:"https://www.chromium.org/audio-video/"},"Chrome Audio/Video Support"),(0,o.kt)("a",{parentName:"li",href:"#fnref-chrome-52b4f7",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-ffmpeg-52b4f7"},(0,o.kt)("a",{parentName:"li",href:"https://trac.ffmpeg.org/wiki"},"FFmpeg Wiki"),(0,o.kt)("a",{parentName:"li",href:"#fnref-ffmpeg-52b4f7",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);