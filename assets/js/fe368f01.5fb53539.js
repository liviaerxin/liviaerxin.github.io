"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9017],{3905:(A,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>d});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},i=Object.keys(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var l=n.createContext({}),u=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},m=function(A){var e=u(A.components);return n.createElement(l.Provider,{value:e},A.children)},s="mdxType",p={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,i=A.originalType,l=A.parentName,m=o(A,["components","mdxType","originalType","parentName"]),s=u(t),c=a,d=s["".concat(l,".").concat(c)]||s[c]||p[c]||i;return t?n.createElement(d,r(r({ref:e},m),{},{components:t})):n.createElement(d,r({ref:e},m))}));function d(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=A,o[s]="string"==typeof A?A:a,r[1]=o;for(var u=2;u<i;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},33892:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={authors:["frank"],tags:["wiki","qemu"],description:"Wiki QEMU",keywords:["Wiki QEMU"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-19T00:00:00.000Z"),draft:!1,enableComments:!0},r="Wiki QEMU",o={permalink:"/blog/wiki-qemu",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-qemu.mdx",source:"@site/../../blog/wiki-qemu.mdx",title:"Wiki QEMU",description:"Wiki QEMU",date:"2023-09-19T00:00:00.000Z",formattedDate:"September 19, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"qemu",permalink:"/blog/tags/qemu"}],readingTime:3.67,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["wiki","qemu"],description:"Wiki QEMU",keywords:["Wiki QEMU"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-19T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki Emulator",permalink:"/blog/wiki-emulator"},nextItem:{title:"Wiki Coral",permalink:"/blog/wiki-coral"}},l={authorsImageUrls:[void 0]},u=[{value:"OS image Resources",id:"os-image-resources",level:2},{value:"QEMU Keyboard shortcuts",id:"qemu-keyboard-shortcuts",level:3},{value:"Discover the VM device tree",id:"discover-the-vm-device-tree",level:3},{value:"List supported devices",id:"list-supported-devices",level:3},{value:"Create disk image",id:"create-disk-image",level:2},{value:"BIOS boot",id:"bios-boot",level:2},{value:"Kernel boot",id:"kernel-boot",level:2},{value:"UEFI boot",id:"uefi-boot",level:2},{value:"Test UEFI boot",id:"test-uefi-boot",level:3},{value:"Boot x86_64 ISO image",id:"boot-x86_64-iso-image",level:3},{value:"Boot aarch64 ISO image",id:"boot-aarch64-iso-image",level:3},{value:"Boot a preinstalled image",id:"boot-a-preinstalled-image",level:3},{value:"Boot linux kernel",id:"boot-linux-kernel",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Resources",id:"resources",level:2}],m={toc:u},s="wrapper";function p(A){let{components:e,...i}=A;return(0,a.kt)(s,(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Learning and using the QEMU help me understand how the linux operating system works including fields:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Linux boot process."),(0,a.kt)("li",{parentName:"ol"},"Cross compile for target system(such as arm64) on host system(such as x86_64), and test the binary.")),(0,a.kt)("h2",{id:"os-image-resources"},"OS image Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cdimage.ubuntu.com/"},"Ubuntu OS Images")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cdimage.debian.org/"},"Debian OS Images")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://downloads.raspberrypi.org/"},"Raspberry PI OS Images"))),(0,a.kt)("h3",{id:"qemu-keyboard-shortcuts"},"QEMU Keyboard shortcuts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Switch between QEMU monitor console and the guest non-graphic OS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CTRL+a c")))),(0,a.kt)("li",{parentName:"ul"},"Exit the guest non-graphic OS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CTRL+a x")))),(0,a.kt)("li",{parentName:"ul"},"Switch between QEMU monitor console and the guest graphic OS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CTRL+ALT+1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CTRL+ALT+2"))))),(0,a.kt)("h3",{id:"discover-the-vm-device-tree"},"Discover the VM device tree"),(0,a.kt)("p",null,"Enter the QEMU monitor console, using ",(0,a.kt)("inlineCode",{parentName:"p"},"info qtree")," command,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ info qtree\n\n dev: gpex-pcihost, id ""\n    ...\n    bus: pcie.0\n      type PCIE\n      dev: virtio-scsi-pci, id ""\n        ...\n        bus: virtio-bus\n          type virtio-pci-bus\n          dev: virtio-scsi-device, id ""\n            ...\n            bus: scsi.0\n              type SCSI\n              dev: scsi-hd, id ""\n                drive = "hd"\n                ...\n      dev: nvme, id ""\n        drive = "drive0"\n        ...\n        bus: nvme-bus.0\n          type nvme-bus\n      dev: virtio-net-pci, id ""\n        ...\n        bus: virtio-bus\n          type virtio-pci-bus\n          dev: virtio-net-device, id ""\n            ...\n\n')),(0,a.kt)("h3",{id:"list-supported-devices"},"List supported devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ qemu-system-aarch64 -device help\n$ qemu-system-aarch64 -device scsi-hd,help\n")),(0,a.kt)("h2",{id:"create-disk-image"},"Create disk image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-img create -f raw ubuntu.raw 20G\nqemu-img create -f qcow2 ubuntu.qcow2 20G\n")),(0,a.kt)("p",null,"QEMU can boot from 3 ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BIOS in default"),(0,a.kt)("li",{parentName:"ul"},"Linux kernel and initrad"),(0,a.kt)("li",{parentName:"ul"},"UEFI")),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"UEFI")," boot, the ",(0,a.kt)("inlineCode",{parentName:"p"},"-bios")," option should be used alongside ",(0,a.kt)("inlineCode",{parentName:"p"},"UEFI")," firmware(",(0,a.kt)("inlineCode",{parentName:"p"},"OVMF.fd")," file) being provided to help QEMU do ",(0,a.kt)("inlineCode",{parentName:"p"},"UEFI")," boot. For instance it is like: ",(0,a.kt)("inlineCode",{parentName:"p"},"-bios OVMF.fd"),"."),(0,a.kt)("p",null,"Get a prebuilt ",(0,a.kt)("inlineCode",{parentName:"p"},"OVMF")," file from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.kraxel.org/repos/jenkins/edk2/"},"OVMF"),"."),(0,a.kt)("h2",{id:"bios-boot"},"BIOS boot"),(0,a.kt)("p",null,"Test entering BIOS,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-system-x86_64 -monitor stdio -m 1G\n")),(0,a.kt)("p",null,"Then QEMU will show like this,"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(73184).Z,width:"720",height:"400"})),(0,a.kt)("h2",{id:"kernel-boot"},"Kernel boot"),(0,a.kt)("h2",{id:"uefi-boot"},"UEFI boot"),(0,a.kt)("h3",{id:"test-uefi-boot"},"Test UEFI boot"),(0,a.kt)("p",null,"aarch64,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'efi="$PWD/UEFI/aarch64/QEMU_EFI.fd"\n\nqemu-system-aarch64 -monitor stdio -M virt -cpu cortex-a57 -m 1G -net none -bios $efi\n\nqemu-system-aarch64 -nographic -M virt -cpu cortex-a57 -m 1G -net none -bios $efi\n')),(0,a.kt)("p",null,"x86_64,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'efi="$PWD/UEFI/ovmf-x64/OVMF-pure-efi.fd"\n\nqemu-system-x86_64 -monitor stdio -m 1G -net none -bios $efi\n')),(0,a.kt)("p",null,"Then QEMU will drop into the ",(0,a.kt)("strong",{parentName:"p"},"UEFI")," shell, like this following image show,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"efi",src:t(65679).Z,width:"1280",height:"800"})),(0,a.kt)("p",null,"Options in detail:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-nographic"),": Don't create a video for the VM, just use the terminal."),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"quit QEMU: ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+A X"),".",(0,a.kt)("br",{parentName:"p"}),"\n","enter QEMU monitor console: ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+A C"),".",(0,a.kt)("br",{parentName:"p"}),"\n","see at ",(0,a.kt)("a",{parentName:"p",href:"https://superuser.com/questions/1087859/how-to-quit-the-qemu-monitor-when-not-using-a-gui"},"How to quit the QEMU monitor when not using a GUI?")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-monitor stdio"),": Put QEMU monitor console in the terminal, while guest OS kept in created video device."),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"switch between monitor console and guest OS: ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+Alt+1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+Alt+2"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-net none"),": Disable iPXE."))),(0,a.kt)("h3",{id:"boot-x86_64-iso-image"},"Boot x86_64 ISO image"),(0,a.kt)("p",null,"Boot x86_64 image in Windows,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'efi="$PWD/UEFI/ovmf-x64/OVMF-pure-efi.fd"\niso=ubuntu-22.04-live-server-amd64.iso\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu-**-amd64.iso")," support both ",(0,a.kt)("strong",{parentName:"p"},"UEFI")," and Legacy ",(0,a.kt)("strong",{parentName:"p"},"BIOS")," boot, QEMU use ",(0,a.kt)("strong",{parentName:"p"},"BIOS")," when the option ",(0,a.kt)("inlineCode",{parentName:"p"},"-bios")," is not specified!")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a disk image to install the ubuntu OS,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-img create -f qcow2 ubuntu-image.qcow2 20G\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Boot to run the Ubuntu OS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-system-x86_64 \\\n    -monitor stdio \\\n    -accel whpx \\\n    -m 8G \\\n    -smp 4 \\\n    -drive file=ubuntu-image.qcow2 \\\n    -bios $efi \\\n    -cdrom $iso\n")),(0,a.kt)("p",null,"Options in details,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-accel whpx"),": use hardware acceleration")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"[?]","Boot the installed Ubuntu OS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Install OS into a disk image\nqemu-system-x86_64 \\\n    -accel whpx \\\n    -m 8G \\\n    -smp 4 \\\n    -bios $efi \\\n    -drive file=ubuntu.qcow2,format=qcow2,if=virtio \\\n")),(0,a.kt)("h3",{id:"boot-aarch64-iso-image"},"Boot aarch64 ISO image"),(0,a.kt)("p",null,"Emulate aarch64 ISO image in Windows,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'efi="$PWD/UEFI/aarch64/QEMU_EFI.fd"\niso="ubuntu-22.04-live-server-arm64.iso"\n\nqemu-system-aarch64 \\\n    -monitor stdio \\\n    -machine virt \\\n    -cpu cortex-a57 \\\n    -m 4G \\\n    -smp 4 \\\n    -drive file=ubuntu.qcow2,format=raw,if=virtio \\\n    -bios $efi \\\n    -cdrom $iso\n')),(0,a.kt)("p",null,"Emulate aarch64 ISO image in mac M1,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-system-aarch64 \\\n    -monitor stdio \\\n    -machine virt \\\n    -accel hvf \\\n    -cpu host \\\n    -m 4G \\\n    -smp 4 \\\n    -drive file=ubuntu.qcow2,format=raw,if=virtio \\\n    -bios $efi \\\n    -cdrom $iso\n")),(0,a.kt)("p",null,"Options in details,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-accel hvf"),": use hardware acceleration in mac M1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-cpu host"),": use mac M1 arm CPU.")),(0,a.kt)("h3",{id:"boot-a-preinstalled-image"},"Boot a preinstalled image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# linux\nfdisk -l ubuntu-core-22-arm64+raspi.img\n\n# osx\nhdiutil imageinfo ubuntu-core-22-arm64+raspi.img\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'kernel="$PWD/TinyCore/boot/vmlinuz64"\ninitrd=$"$PWD/TinyCore/boot/corepure64.gz"\nimg=$"$PWD/TinyCorePure64-14.0.iso"\nefi="$PWD/UEFI/ovmf-x64/OVMF-pure-efi.fd"\n\nkernel="$PWD/linux_qemu/x86_64/bzImage"\nvmlinuz="$PWD/linux_qemu/x86_64/vmlinux"\ninitrd="$PWD/linux_qemu/x86_64/rootfs.ext2"\nimg="$PWD/linux_qemu/x86_64/rootfs.ext2"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'qemu-system-x86_64 \\\n    -nographic \\\n    -m 4G \\\n    -kernel $kernel \\\n    -initrd $img \\\n    -append "console=ttyS0" \\\n    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \\\n    -device virtio-net-pci,netdev=mynet\n')),(0,a.kt)("h3",{id:"boot-linux-kernel"},"Boot linux kernel"),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://joonas.fi/2021/02/uefi-pc-boot-process-and-uefi-with-qemu/"},"UEFI, PC boot process and UEFI with QEMU | joonas.fi")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@ThyCrow/compiling-the-linux-kernel-and-creating-a-bootable-iso-from-it-6afb8d23ba22"},"https://medium.com/@ThyCrow/compiling-the-linux-kernel-and-creating-a-bootable-iso-from-it-6afb8d23ba22")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://levelup.gitconnected.com/probably-the-simplest-way-to-install-debian-ubuntu-in-qemu-2db6afde27ef"},"https://levelup.gitconnected.com/probably-the-simplest-way-to-install-debian-ubuntu-in-qemu-2db6afde27ef")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://krinkinmu.github.io/2020/11/21/EFI-aarch64.html"},"UEFI on AARCH64 | Welcome to the Mike\u2019s homepage!")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tianocore/tianocore.github.io/wiki/OVMF"},"OVMF \xb7 tianocore/tianocore.github.io Wiki \xb7 GitHub")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wiki.debian.org/Arm64Qemu"},"https://wiki.debian.org/Arm64Qemu")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://cdn.kernel.org/pub/linux/kernel/people/will/docs/qemu/qemu-arm64-howto.html"},"http://cdn.kernel.org/pub/linux/kernel/people/will/docs/qemu/qemu-arm64-howto.html")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://futurewei-cloud.github.io/ARM-Datacenter/qemu/how-to-launch-aarch64-vm/"},"https://futurewei-cloud.github.io/ARM-Datacenter/qemu/how-to-launch-aarch64-vm/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://xryan.net/p/212"},"https://xryan.net/p/212")))}p.isMDXComponent=!0},73184:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},65679:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgDfwLoHXaw4O8OOYAAAAASUVORK5CYII="}}]);