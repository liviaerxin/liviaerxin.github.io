"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9111],{3905:(e,n,l)=>{l.d(n,{Zo:()=>p,kt:()=>b});var a=l(67294);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function t(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function o(e,n){if(null==e)return{};var l,a,r=function(e,n){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):t(t({},n),e)),l},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var l=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(l),m=r,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return l?a.createElement(b,t(t({ref:n},p),{},{components:l})):a.createElement(b,t({ref:n},p))}));function b(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=l.length,t=new Array(i);t[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,t[1]=o;for(var d=2;d<i;d++)t[d]=l[d];return a.createElement.apply(null,t)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},38574:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=l(87462),r=(l(67294),l(3905));const i={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/test-dynamic-library.md"},authors:["frank"],description:"Test Dynamic Library",keywords:["debug","dynamic library","shared library"],image:"https://i.imgur.com/mErPwqL.png",tags:["debug","shared library","osx","windows","linux"],date:new Date("2023-06-02T00:00:00.000Z"),draft:!1,enableComments:!0},t="Inspect Shared Library",o={permalink:"/blog/inspect-shared-library",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/inspect-shared-library.md",source:"@site/../../blog/inspect-shared-library.md",title:"Inspect Shared Library",description:"Test Dynamic Library",date:"2023-06-02T00:00:00.000Z",formattedDate:"June 2, 2023",tags:[{label:"debug",permalink:"/blog/tags/debug"},{label:"shared library",permalink:"/blog/tags/shared-library"},{label:"osx",permalink:"/blog/tags/osx"},{label:"windows",permalink:"/blog/tags/windows"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:1.955,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/test-dynamic-library.md"},authors:["frank"],description:"Test Dynamic Library",keywords:["debug","dynamic library","shared library"],image:"https://i.imgur.com/mErPwqL.png",tags:["debug","shared library","osx","windows","linux"],date:"2023-06-02T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Communication Between Docker Containers",permalink:"/blog/docker-containers-communication"},nextItem:{title:"WiFi AutoSwitch Windows",permalink:"/blog/wifi-autoswitch-windows"}},s={authorsImageUrls:[void 0]},d=[{value:"Using <code>ldd</code> Command",id:"using-ldd-command",level:2},{value:"Using <code>objdump</code> Command",id:"using-objdump-command",level:2},{value:"Using <code>readelf</code> Command",id:"using-readelf-command",level:2},{value:"Using <code>otool</code> Command",id:"using-otool-command",level:2},{value:"Reading the <code>/proc/&lt;pid&gt;/maps</code> File",id:"reading-the-procpidmaps-file",level:2},{value:"Using <code>vmmap</code> Command",id:"using-vmmap-command",level:2},{value:"Using <code>ctypes</code> in Python",id:"using-ctypes-in-python",level:2},{value:"Using <code>nm</code>",id:"using-nm",level:3},{value:"Using <code>dumpbin</code>",id:"using-dumpbin",level:3},{value:"Using <code>Microsoft.PowerShell</code>",id:"using-microsoftpowershell",level:3},{value:"Useful Environment Variables",id:"useful-environment-variables",level:2},{value:"References",id:"references",level:2}],p={toc:d},u="wrapper";function c(e){let{components:n,...l}=e;return(0,r.kt)(u,(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Show shared libraries dependencies(detect what shared libraries an executable or a another shared libraries depend on)"),(0,r.kt)("li",{parentName:"ul"},"Check/Test dependent shared libraries loaded successfully")),(0,r.kt)("h2",{id:"using-ldd-command"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"ldd")," Command"),(0,r.kt)("p",null,"Available in Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ldd /usr/bin/vim\n    linux-vdso.so.1 (0x00007ffc75fb1000)\n    libgtk-3.so.0 => /usr/lib/libgtk-3.so.0 (0x00007fa4dcb5e000)\n    libgdk-3.so.0 => /usr/lib/libgdk-3.so.0 (0x00007fa4dca64000)    \n    libXau.so.6 => /usr/lib/libXau.so.6 (0x00007fa4db7a9000)\n        ....\n    liblzma.so.5 => /usr/lib/liblzma.so.5 (0x00007fa4db63f000)\n    liblz4.so.1 => /usr/lib/liblz4.so.1 (0x00007fa4db61d000)\n    libgcrypt.so.20 => /usr/lib/libgcrypt.so.20 (0x00007fa4db4ff000)\n    libgpg-error.so.0 => /usr/lib/libgpg-error.so.0 (0x00007fa4db4d8000)\n")),(0,r.kt)("h2",{id:"using-objdump-command"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"objdump")," Command"),(0,r.kt)("p",null,"Available in Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"objdump -p /usr/bin/vim | grep 'NEEDED'\n  NEEDED               libpython3.7m.so.1.0\n  NEEDED               libcrypt.so.2\n  NEEDED               libpthread.so.0\n  NEEDED               libdl.so.2\n  NEEDED               libutil.so.1\n  NEEDED               libm.so.6\n  NEEDED               libselinux.so.1\n  NEEDED               libtinfo.so.6\n  NEEDED               libacl.so.1\n  NEEDED               libgpm.so.2\n  NEEDED               libc.so.6\n")),(0,r.kt)("h2",{id:"using-readelf-command"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"readelf")," Command"),(0,r.kt)("p",null,"Available in Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"readelf --dynamic /usr/bin/vim | grep NEEDED\n 0x0000000000000001 (NEEDED)             Shared library: [libpython3.7m.so.1.0]\n 0x0000000000000001 (NEEDED)             Shared library: [libcrypt.so.2]\n 0x0000000000000001 (NEEDED)             Shared library: [libpthread.so.0]\n 0x0000000000000001 (NEEDED)             Shared library: [libdl.so.2]\n 0x0000000000000001 (NEEDED)             Shared library: [libutil.so.1]\n 0x0000000000000001 (NEEDED)             Shared library: [libm.so.6]\n 0x0000000000000001 (NEEDED)             Shared library: [libselinux.so.1]\n 0x0000000000000001 (NEEDED)             Shared library: [libtinfo.so.6]\n 0x0000000000000001 (NEEDED)             Shared library: [libacl.so.1]\n 0x0000000000000001 (NEEDED)             Shared library: [libgpm.so.2]\n 0x0000000000000001 (NEEDED)             Shared library: [libc.so.6]\n")),(0,r.kt)("h2",{id:"using-otool-command"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"otool")," Command"),(0,r.kt)("p",null,"Available in OSX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"otool -L libOpenCvSharpExtern.dylib\n")),(0,r.kt)("h2",{id:"reading-the-procpidmaps-file"},"Reading the ",(0,r.kt)("inlineCode",{parentName:"h2"},"/proc/<pid>/maps")," File"),(0,r.kt)("p",null,"Available in Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cat /proc/179015/maps \n...\n7f2cb67c3000-7f2cb67c6000 r--p 00000000 08:13 3810274                    /usr/lib/libnss_files-2.31.so\n7f2cb67c6000-7f2cb67cd000 r-xp 00003000 08:13 3810274                    /usr/lib/libnss_files-2.31.so\n..\n7f2cb6a89000-7f2cb6a8a000 r--p 00002000 08:13 3810903                    /usr/lib/libutil-2.31.so\n7f2cb6a8a000-7f2cb6a8b000 r--p 00002000 08:13 3810903                    /usr/lib/libutil-2.31.so\n...\n7f2cb9802000-7f2cb9803000 rw-p 00000000 00:00 0 \n7ffe77658000-7ffe7767a000 rw-p 00000000 00:00 0                          [stack]\n7ffe776c8000-7ffe776cc000 r--p 00000000 00:00 0                          [vvar]\n7ffe776cc000-7ffe776ce000 r-xp 00000000 00:00 0                          [vdso]\nffffffffff600000-ffffffffff601000 --xp 00000000 00:00 0                  [vsyscall]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"awk '$NF!~/\\.so/{next} {$0=$NF} !a[$0]++' /proc/179015/maps\n...\n/usr/lib/libpython3.8.so.1.0\n/usr/lib/libgpg-error.so.0.29.0\n/usr/lib/libgcrypt.so.20.2.5\n/usr/lib/liblz4.so.1.9.2\n/usr/lib/liblzma.so.5.2.5\n/usr/lib/libsystemd.so.0.28.0\n/usr/lib/libogg.so.0.8.4\n/usr/lib/libvorbis.so.0.4.8\n/usr/lib/libblkid.so.1.1.0\n/usr/lib/libXdmcp.so.6.0.0\n/usr/lib/libXau.so.6.0.0\n/usr/lib/libdatrie.so.1.3.5\n...\n")),(0,r.kt)("h2",{id:"using-vmmap-command"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"vmmap")," Command"),(0,r.kt)("h2",{id:"using-ctypes-in-python"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"ctypes")," in Python"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import ctypes\nctypes.cdll.LoadLibrary("libOpenCvSharpExtern.so")\nctypes.CDLL("libOpenCvSharpExtern.so")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"dlopen()\nDYLD_PRINT_LIBRARIES=1 dlopen_test.out /opt/vcpkg/installed/arm64-osx-dynamic/lib/libpng16.dylib\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"objdump -p /usr/local/lib/libOpenCvSharpExtern.so\n")),(0,r.kt)("h3",{id:"using-nm"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"nm")),(0,r.kt)("p",null,"Show list of symbols:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f nm -g /opt/vcpkg/installed/arm64-osx-dynamic/lib/libintl.8.dylib\n                 U _CFArrayGetCount\n                 U _CFArrayGetValueAtIndex\n                 U _CFGetTypeID\n                 U _CFLocaleCopyPreferredLanguages\n                 U _CFPreferencesCopyAppValue\n                 U _CFRelease\n                 U _CFStringGetCString\n                 U _CFStringGetTypeID\n                 U __DefaultRuneLocale\n                 U ___CFConstantStringClassReference\n")),(0,r.kt)("h3",{id:"using-dumpbin"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"dumpbin")),(0,r.kt)("p",null,"Available in Windows"),(0,r.kt)("p",null,"Show dependent dynamic libraries(",(0,r.kt)("inlineCode",{parentName:"p"},"DLL"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"dumpbin /dependents your_dll_file.dll\n")),(0,r.kt)("h3",{id:"using-microsoftpowershell"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"Microsoft.PowerShell")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'(Get-Command "C:\\Path\\To\\Thing.dll").FileVersionInfo\n(Get-Item "C:\\Windows\\System32\\nvcuda.dll").VersionInfo\n')),(0,r.kt)("h2",{id:"useful-environment-variables"},"Useful Environment Variables"),(0,r.kt)("p",null,"OSX:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DYLD_LIBRARY_PATH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DYLD_PRINT_LIBRARIES")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DYLD_PRINT_STATISTICS"))),(0,r.kt)("p",null,"Linux:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LD_LIBRARY_PATH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LD_DEBUG=libs"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cpp/build/reference/c-cpp-build-tools"},"Additional MSVC Build Tools")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/linux/show-shared-libraries-executables"},"How to Show All Shared Libraries Used by Executables in Linux")))}c.isMDXComponent=!0}}]);