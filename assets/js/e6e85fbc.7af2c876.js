"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,d=m["".concat(o,".").concat(u)]||m[u]||k[u]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1112:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Learn CMake",description:"Learn CMake",keywords:["cmake","project structure"],image:"https://i.imgur.com/mErPwqL.png",tags:["cmake","template"],last_update:{date:new Date("2023-06-25T00:00:00.000Z"),author:"frank"}},i="Learn CMake",p={permalink:"/blog/learn-cmake",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/learn-cmake.md",source:"@site/../../blog/learn-cmake.md",title:"Learn CMake",description:"Learn CMake",date:"2023-07-12T03:14:42.000Z",formattedDate:"July 12, 2023",tags:[{label:"cmake",permalink:"/blog/tags/cmake"},{label:"template",permalink:"/blog/tags/template"}],readingTime:1.785,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_label:"Learn CMake",description:"Learn CMake",keywords:["cmake","project structure"],image:"https://i.imgur.com/mErPwqL.png",tags:["cmake","template"],last_update:{date:"2023-06-25T00:00:00.000Z",author:"frank"}},prevItem:{title:"IoC",permalink:"/blog/ioc"},nextItem:{title:"Learn CUDA",permalink:"/blog/learn-cuda"}},o={authorsImageUrls:[]},s=[{value:"CMake Project Structure",id:"cmake-project-structure",level:2},{value:"How CMake Works",id:"how-cmake-works",level:2},{value:"How to make your package be found by others by <code>find_package()</code>",id:"how-to-make-your-package-be-found-by-others-by-find_package",level:2},{value:"RPATH in CMake",id:"rpath-in-cmake",level:2},{value:"CMake Variables",id:"cmake-variables",level:2},{value:"References",id:"references",level:2}],c={toc:s},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It\u2019s all about targets and properties"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/learn-vcpkg"},"[learn-vcpkg]")),(0,r.kt)("h2",{id:"cmake-project-structure"},"CMake Project Structure"),(0,r.kt)("p",null,"A typical ",(0,r.kt)("strong",{parentName:"p"},"CMake")," project can be regarded to has three ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source Tree"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"project_root\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 simple_example.cpp\n\u251c\u2500\u2500 simple_lib.cpp\n\u2514\u2500\u2500 simple_lib.hpp\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build Tree"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"project_root\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 simple_example.cpp\n\u251c\u2500\u2500 simple_lib.cpp\n\u251c\u2500\u2500 simple_lib.hpp\n\u2514\u2500\u2500 build\n    \u2514\u2500\u2500 CMakeCache.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Tree"),":"),(0,r.kt)("p",null,"This tree is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_INSTALL_PREFIX"),", of which default value is platform-dependent. By default, it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local")," on Unix-like systems (Linux, macOS) and ",(0,r.kt)("inlineCode",{parentName:"p"},"C:/Program Files/<Project Name>")," on Windows.."),(0,r.kt)("p",null,"To change it, you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"-DCMAKE_INSTALL_PREFIX")," argument during CMake ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," step, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cmake -B build -S . -DCMAKE_INSTALL_PREFIX=/my/custom/installation/path\n")),(0,r.kt)("p",null,"Alternatively, you can change it by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--prefix"),"(it can be relative path) argument during CMake ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," step, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'cmake --install build --prefix "/my/custom/installation/path"\n')),(0,r.kt)("p",null,"It's recommended to use a default install layout as ",(0,r.kt)("inlineCode",{parentName:"p"},"GNUInstallDirs"),"."),(0,r.kt)("p",null,"When setting ",(0,r.kt)("inlineCode",{parentName:"p"},'cmake --install build --prefix "./install'),", the ",(0,r.kt)("strong",{parentName:"p"},"install")," tree will be like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"project_root\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 simple_example.cpp\n\u251c\u2500\u2500 simple_lib.cpp\n\u251c\u2500\u2500 simple_lib.hpp\n\u251c\u2500\u2500 build\n\u2502   \u2514\u2500\u2500 CMakeCache.txt\n\u2514\u2500\u2500 install\n    \u251c\u2500\u2500 bin\n    \u2502   \u2514\u2500\u2500 executables\n    \u251c\u2500\u2500 sbin\n    \u2502   \u2514\u2500\u2500 sysadmin executables\n    \u251c\u2500\u2500 lib\n    \u2502   \u251c\u2500\u2500 compiled libraries (*.so (unix) or *.dll (windows))\n    \u2502   \u2514\u2500\u2500 library archive files (*.lib (windows))\n    \u251c\u2500\u2500 libexec\n    \u2502   \u2514\u2500\u2500 executables not directly invoked by user\n    \u251c\u2500\u2500 include\n    \u2502   \u2514\u2500\u2500 header files\n    \u2514\u2500\u2500 doc\n       \u2514\u2500\u2500 documentation\n")),(0,r.kt)("h2",{id:"how-cmake-works"},"How CMake Works"),(0,r.kt)("p",null,"A typical workflow of CMake includes ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Install")," steps, combined with the above mentioned ",(0,r.kt)("inlineCode",{parentName:"p"},"Trees")," concepts."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," step will generate a sort of configuration files, the most important ones among them are ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeCache.txt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cmake_install.cmake")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," if using ",(0,r.kt)("inlineCode",{parentName:"p"},"Make")," as building system. With these generated configuration files, the later steps ",(0,r.kt)("inlineCode",{parentName:"p"},"Build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Install")," will run according to them.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Build")," step will generate the build binary directory.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Install")," step will generate the install binary directory."),(0,r.kt)("h2",{id:"how-to-make-your-package-be-found-by-others-by-find_package"},"How to make your package be found by others by ",(0,r.kt)("inlineCode",{parentName:"h2"},"find_package()")),(0,r.kt)("p",null,"package configuration files: ",(0,r.kt)("inlineCode",{parentName:"p"},"find_package")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/guide/importing-exporting/index.html#importing-targets"},"Title")),(0,r.kt)("h2",{id:"rpath-in-cmake"},"RPATH in CMake"),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-rpath-ef23e2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-rpath-ef23e2",className:"footnote-ref"},"rpath"))),(0,r.kt)("h2",{id:"cmake-variables"},"CMake Variables"),(0,r.kt)("p",null,"There are some useful and important CMake variables that will be introduced here:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_PREFIX_PATH")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_IGNORE_PATH")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://enccs.github.io/cmake-workshop/"},"CMake hands-on workshop \u2014 CMake Workshop"),"\n",(0,r.kt)("sup",{parentName:"p",id:"fnref-rpath-ef23e2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-rpath-ef23e2",className:"footnote-ref"},"rpath")),": ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.kitware.com/cmake/community/-/wikis/doc/cmake/RPATH-handling"},"RPATH handling from official cmake")))}k.isMDXComponent=!0}}]);