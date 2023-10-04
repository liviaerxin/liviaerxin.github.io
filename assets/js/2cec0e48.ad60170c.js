"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["frank"],tags:["qemu","kernel","initramfs"],description:"QEMU Linux Kernel Boot",keywords:["QEMU Linux Kernel Boot"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-26T00:00:00.000Z"),draft:!1,enableComments:!0},o="QEMU Direct Linux Kernel Boot",i={permalink:"/blog/qemu-linux-kernel-boot",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/qemu-linux-kernel-boot.mdx",source:"@site/../../blog/qemu-linux-kernel-boot.mdx",title:"QEMU Direct Linux Kernel Boot",description:"QEMU Linux Kernel Boot",date:"2023-09-26T00:00:00.000Z",formattedDate:"September 26, 2023",tags:[{label:"qemu",permalink:"/blog/tags/qemu"},{label:"kernel",permalink:"/blog/tags/kernel"},{label:"initramfs",permalink:"/blog/tags/initramfs"}],readingTime:1.625,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["qemu","kernel","initramfs"],description:"QEMU Linux Kernel Boot",keywords:["QEMU Linux Kernel Boot"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-26T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Generating self signed SSL/TLS certificate for private IP address or local domain",permalink:"/blog/self-signed-certificate"},nextItem:{title:"QEMU Emulate Raspberry Pi 3 and 4",permalink:"/blog/qemu-raspberry-pi"}},s={authorsImageUrls:[void 0]},u=[{value:"Build Linux kernel",id:"build-linux-kernel",level:2},{value:"Build root filesystem",id:"build-root-filesystem",level:2},{value:"Resources",id:"resources",level:2},{value:"CLang/LLVM",id:"clangllvm",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use QEMU to launch a Linux kernel directly without having to make a fully bootable disk image. This is very useful for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux kernel testing"),(0,a.kt)("li",{parentName:"ul"},"root filesystem testing"),(0,a.kt)("li",{parentName:"ul"},"arm system emulation")),(0,a.kt)("p",null,"Here, I will employ QEMU to emulate a minimal ",(0,a.kt)("strong",{parentName:"p"},"Linux x86_64")," platform as well as debugging with ",(0,a.kt)("inlineCode",{parentName:"p"},"GDB"),", step by step:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build ",(0,a.kt)("strong",{parentName:"li"},"Linux x86_64")," kernel"),(0,a.kt)("li",{parentName:"ul"},"Build ",(0,a.kt)("strong",{parentName:"li"},"Linux x86_64")," rootfs(root filesystem)"),(0,a.kt)("li",{parentName:"ul"},"Run QEMU"),(0,a.kt)("li",{parentName:"ul"},"Debug with ",(0,a.kt)("inlineCode",{parentName:"li"},"GDB"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install git fakeroot build-essential ncurses-dev xz-utils libssl-dev bc flex libelf-dev bison\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ~/linux-qemu\ncd ~/linux-qemu\nTOP=~/linux-qemu\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'hdiutil create -size 20g -type SPARSE -fs "Case-sensitive HFS+" -volname brosx brosx.sparseimage\nhdiutil attach brosx.sparseimage\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"hdiutil detach /Volumes/brosx -force\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install gpatch gcc flock attr libtool libart\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s /opt/homebrew/bin/gcc-13 /opt/homebrew/bin/gcc\nn -s /opt/homebrew/bin/gcc-13 /opt/homebrew/bin/cc\nln -s /opt/homebrew/bin/g++-13 /opt/homebrew/bin/g++\nln -s /opt/homebrew/bin/g++-13 /opt/homebrew/bin/c++\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm /opt/homebrew/bin/gcc /opt/homebrew/bin/cc /opt/homebrew/bin/g++ /opt/homebrew/bin/c++\n")),(0,a.kt)("h2",{id:"build-linux-kernel"},"Build Linux kernel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.1.55.tar.xz\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tar xvf linux-6.1.55.tar.xz\ncd linux-6.1.55\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Use the default `x86_64` configuration file form `/x86/configs/x86_64_defconfig`\nmake ARCH=x86_64 x86_64_defconfig \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Tweak some options for GDB and initramfs\nmake menuconfig\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make -j8\n")),(0,a.kt)("p",null,"Output kernel ",(0,a.kt)("inlineCode",{parentName:"p"},"arch/x86/boot/bzImage"),"."),(0,a.kt)("p",null,"Extract ",(0,a.kt)("inlineCode",{parentName:"p"},"vmlinux")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"bzImage"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./scripts/extract-vmlinux ./arch/x86_64/boot/bzImage >./arch/x86_64/boot/vmlinux\n")),(0,a.kt)("h2",{id:"build-root-filesystem"},"Build root filesystem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/buildroot/buildroot.git\ncd buildroot\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make menuconfig\n")),(0,a.kt)("p",null,"Choose ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64")," as Target Architecture and ",(0,a.kt)("inlineCode",{parentName:"p"},"ext4")," root file system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make -j8\n")),(0,a.kt)("p",null,"The output rootfs is ",(0,a.kt)("inlineCode",{parentName:"p"},"./output/images/rootfs.ext4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'kernel="$PWD/linux_qemu/x86_64/bzImage"\nvmlinuz="$PWD/linux_qemu/x86_64/vmlinux"\ninitrd="$PWD/linux_qemu/x86_64/rootfs.ext4"\nimg="$PWD/linux_qemu/x86_64/rootfs.ext4"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'qemu-system-x86_64 \\\n    -nographic \\\n    -m 4G \\\n    -kernel $kernel \\\n    -hda $img \\\n    -append "earlyprintk loglevel=8 root=/dev/sda rootfstype=ext4 console=ttyS0" \\\n    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \\\n    -device virtio-net-pci,netdev=mynet\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'qemu-system-x86_64 \\\n    -nographic \\\n    -m 4G \\\n    -s -S \\\n    -kernel $kernel \\\n    -hda $img \\\n    -append "earlyprintk loglevel=8 root=/dev/sda rootfstype=ext4 console=ttyS0" \\\n    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \\\n    -device virtio-net-pci,netdev=mynet\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gdb ./vmlinux\n\ntarget remote localhost:1234\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.berrange.com/posts/2023/03/09/make-tiny-image-py-creating-tiny-initrds-for-testing-qemu-or-linux-kernel-userspace-behaviour/"},"https://www.berrange.com/posts/2023/03/09/make-tiny-image-py-creating-tiny-initrds-for-testing-qemu-or-linux-kernel-userspace-behaviour/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/dhruvvyas90/qemu-rpi-kernel"},"https://github.com/dhruvvyas90/qemu-rpi-kernel")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medicineyeh.wordpress.com/2016/03/29/buildup-your-arm-image-for-qemu/"},"https://medicineyeh.wordpress.com/2016/03/29/buildup-your-arm-image-for-qemu/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@daeseok.youn/prepare-the-environment-for-developing-linux-kernel-with-qemu-c55e37ba8ade"},"https://medium.com/@daeseok.youn/prepare-the-environment-for-developing-linux-kernel-with-qemu-c55e37ba8ade")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bootlin.com/pub/conferences/2013/kernel-recipes/rootfs-kernel-developer/rootfs-kernel-developer.pdf"},"https://bootlin.com/pub/conferences/2013/kernel-recipes/rootfs-kernel-developer/rootfs-kernel-developer.pdf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@daeseok.youn/prepare-the-environment-for-developing-linux-kernel-with-qemu-c55e37ba8ade"},"https://medium.com/@daeseok.youn/prepare-the-environment-for-developing-linux-kernel-with-qemu-c55e37ba8ade")),(0,a.kt)("h2",{id:"clangllvm"},"CLang/LLVM"))}c.isMDXComponent=!0}}]);