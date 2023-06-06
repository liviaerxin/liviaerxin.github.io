"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6541],{3905:(e,r,n)=>{n.d(r,{Zo:()=>b,kt:()=>m});var a=n(7294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function t(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,l=function(e,r){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):t(t({},r),e)),n},b=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=l,m=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(m,t(t({ref:r},b),{},{components:n})):a.createElement(m,t({ref:r},b))}));function m(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=n.length,t=new Array(i);t[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:l,t[1]=o;for(var d=2;d<i;d++)t[d]=n[d];return a.createElement.apply(null,t)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3668:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const i={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/test-dynamic-library.md"},authors:["frank"],description:"Test Dynamic Library",keywords:["debug","dynamic library","shared library"],image:"https://i.imgur.com/mErPwqL.png",tags:["debug","shared library","osx","linux"],date:new Date("2023-06-02T00:00:00.000Z"),draft:!1},t="Debug Shared Library",o={permalink:"/blog/shared-library-debug",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../blog/shared-library-debug.md",source:"@site/../../blog/shared-library-debug.md",title:"Debug Shared Library",description:"Test Dynamic Library",date:"2023-06-02T00:00:00.000Z",formattedDate:"June 2, 2023",tags:[{label:"debug",permalink:"/blog/tags/debug"},{label:"shared library",permalink:"/blog/tags/shared-library"},{label:"osx",permalink:"/blog/tags/osx"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:1.49,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/test-dynamic-library.md"},authors:["frank"],description:"Test Dynamic Library",keywords:["debug","dynamic library","shared library"],image:"https://i.imgur.com/mErPwqL.png",tags:["debug","shared library","osx","linux"],date:"2023-06-02T00:00:00.000Z",draft:!1},prevItem:{title:"Todo",permalink:"/blog/todo"},nextItem:{title:"Welcome Docusaurus v2",permalink:"/blog/welcome-docusaurus-v2"}},s={authorsImageUrls:[void 0]},d=[{value:"Using <code>ldd</code> Command",id:"using-ldd-command",level:2},{value:"Using <code>objdump</code> Command",id:"using-objdump-command",level:2},{value:"Using <code>readelf</code> Command",id:"using-readelf-command",level:2},{value:"Using <code>otool</code> Command",id:"using-otool-command",level:2},{value:"Reading the <code>/proc/&lt;pid&gt;/maps</code> File",id:"reading-the-procpidmaps-file",level:2},{value:"Using <code>vmmap</code> Command",id:"using-vmmap-command",level:2},{value:"Using <code>ctypes</code> in Python",id:"using-ctypes-in-python",level:2}],b={toc:d},p="wrapper";function c(e){let{components:r,...n}=e;return(0,l.kt)(p,(0,a.Z)({},b,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Concepts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Show shared libraries dependencies(detect what shared libraries an executable or a another shared libraries depend on)"),(0,l.kt)("li",{parentName:"ul"},"Check/Test dependent shared libraries loaded successfully")),(0,l.kt)("h2",{id:"using-ldd-command"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"ldd")," Command"),(0,l.kt)("p",null,"Available in Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ldd /usr/bin/vim\n    linux-vdso.so.1 (0x00007ffc75fb1000)\n    libgtk-3.so.0 => /usr/lib/libgtk-3.so.0 (0x00007fa4dcb5e000)\n    libgdk-3.so.0 => /usr/lib/libgdk-3.so.0 (0x00007fa4dca64000)    \n    libXau.so.6 => /usr/lib/libXau.so.6 (0x00007fa4db7a9000)\n        ....\n    liblzma.so.5 => /usr/lib/liblzma.so.5 (0x00007fa4db63f000)\n    liblz4.so.1 => /usr/lib/liblz4.so.1 (0x00007fa4db61d000)\n    libgcrypt.so.20 => /usr/lib/libgcrypt.so.20 (0x00007fa4db4ff000)\n    libgpg-error.so.0 => /usr/lib/libgpg-error.so.0 (0x00007fa4db4d8000)\n")),(0,l.kt)("h2",{id:"using-objdump-command"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"objdump")," Command"),(0,l.kt)("p",null,"Available in Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"objdump -p /usr/bin/vim | grep 'NEEDED'\n  NEEDED               libpython3.7m.so.1.0\n  NEEDED               libcrypt.so.2\n  NEEDED               libpthread.so.0\n  NEEDED               libdl.so.2\n  NEEDED               libutil.so.1\n  NEEDED               libm.so.6\n  NEEDED               libselinux.so.1\n  NEEDED               libtinfo.so.6\n  NEEDED               libacl.so.1\n  NEEDED               libgpm.so.2\n  NEEDED               libc.so.6\n")),(0,l.kt)("h2",{id:"using-readelf-command"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"readelf")," Command"),(0,l.kt)("p",null,"Available in Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"readelf --dynamic /usr/bin/vim | grep NEEDED\n 0x0000000000000001 (NEEDED)             Shared library: [libpython3.7m.so.1.0]\n 0x0000000000000001 (NEEDED)             Shared library: [libcrypt.so.2]\n 0x0000000000000001 (NEEDED)             Shared library: [libpthread.so.0]\n 0x0000000000000001 (NEEDED)             Shared library: [libdl.so.2]\n 0x0000000000000001 (NEEDED)             Shared library: [libutil.so.1]\n 0x0000000000000001 (NEEDED)             Shared library: [libm.so.6]\n 0x0000000000000001 (NEEDED)             Shared library: [libselinux.so.1]\n 0x0000000000000001 (NEEDED)             Shared library: [libtinfo.so.6]\n 0x0000000000000001 (NEEDED)             Shared library: [libacl.so.1]\n 0x0000000000000001 (NEEDED)             Shared library: [libgpm.so.2]\n 0x0000000000000001 (NEEDED)             Shared library: [libc.so.6]\n")),(0,l.kt)("h2",{id:"using-otool-command"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"otool")," Command"),(0,l.kt)("p",null,"Available in OSX:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"otool -L libOpenCvSharpExtern.dylib\n")),(0,l.kt)("h2",{id:"reading-the-procpidmaps-file"},"Reading the ",(0,l.kt)("inlineCode",{parentName:"h2"},"/proc/<pid>/maps")," File"),(0,l.kt)("p",null,"Available in Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cat /proc/179015/maps \n...\n7f2cb67c3000-7f2cb67c6000 r--p 00000000 08:13 3810274                    /usr/lib/libnss_files-2.31.so\n7f2cb67c6000-7f2cb67cd000 r-xp 00003000 08:13 3810274                    /usr/lib/libnss_files-2.31.so\n..\n7f2cb6a89000-7f2cb6a8a000 r--p 00002000 08:13 3810903                    /usr/lib/libutil-2.31.so\n7f2cb6a8a000-7f2cb6a8b000 r--p 00002000 08:13 3810903                    /usr/lib/libutil-2.31.so\n...\n7f2cb9802000-7f2cb9803000 rw-p 00000000 00:00 0 \n7ffe77658000-7ffe7767a000 rw-p 00000000 00:00 0                          [stack]\n7ffe776c8000-7ffe776cc000 r--p 00000000 00:00 0                          [vvar]\n7ffe776cc000-7ffe776ce000 r-xp 00000000 00:00 0                          [vdso]\nffffffffff600000-ffffffffff601000 --xp 00000000 00:00 0                  [vsyscall]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"awk '$NF!~/\\.so/{next} {$0=$NF} !a[$0]++' /proc/179015/maps\n...\n/usr/lib/libpython3.8.so.1.0\n/usr/lib/libgpg-error.so.0.29.0\n/usr/lib/libgcrypt.so.20.2.5\n/usr/lib/liblz4.so.1.9.2\n/usr/lib/liblzma.so.5.2.5\n/usr/lib/libsystemd.so.0.28.0\n/usr/lib/libogg.so.0.8.4\n/usr/lib/libvorbis.so.0.4.8\n/usr/lib/libblkid.so.1.1.0\n/usr/lib/libXdmcp.so.6.0.0\n/usr/lib/libXau.so.6.0.0\n/usr/lib/libdatrie.so.1.3.5\n...\n")),(0,l.kt)("h2",{id:"using-vmmap-command"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"vmmap")," Command"),(0,l.kt)("h2",{id:"using-ctypes-in-python"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"ctypes")," in Python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import ctypes\nctypes.cdll.LoadLibrary("libOpenCvSharpExtern.so")\nctypes.CDLL("libOpenCvSharpExtern.so")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"dlopen()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"objdump -p /usr/local/lib/libOpenCvSharpExtern.so\n")))}c.isMDXComponent=!0}}]);