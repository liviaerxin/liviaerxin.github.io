"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7194],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>k});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?t.createElement(k,i(i({ref:a},p),{},{components:n})):t.createElement(k,i({ref:a},p))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13208:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"Learn CMake",description:"Learn CMake",keywords:["cmake","project structure"],image:"https://i.imgur.com/mErPwqL.png",tags:["cmake","wiki"],date:new Date("2023-06-25T00:00:00.000Z"),author:"frank"},i="Learn CMake",o={permalink:"/blog/wiki-cmake",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-cmake.mdx",source:"@site/../../blog/wiki-cmake.mdx",title:"Learn CMake",description:"Learn CMake",date:"2023-06-25T00:00:00.000Z",formattedDate:"June 25, 2023",tags:[{label:"cmake",permalink:"/blog/tags/cmake"},{label:"wiki",permalink:"/blog/tags/wiki"}],readingTime:3.41,hasTruncateMarker:!0,authors:[{name:"frank"}],frontMatter:{sidebar_label:"Learn CMake",description:"Learn CMake",keywords:["cmake","project structure"],image:"https://i.imgur.com/mErPwqL.png",tags:["cmake","wiki"],date:"2023-06-25T00:00:00.000Z",author:"frank"},prevItem:{title:"Wiki PowerShell",permalink:"/blog/wiki-powershell"},nextItem:{title:"Wiki vcpkg",permalink:"/blog/wiki-vcpkg"}},s={authorsImageUrls:[void 0]},c=[{value:"CMake Project Structure",id:"cmake-project-structure",level:2},{value:"How CMake Works",id:"how-cmake-works",level:2},{value:"How to make your package be found by others by <code>find_package()</code>",id:"how-to-make-your-package-be-found-by-others-by-find_package",level:2},{value:"RPATH in CMake",id:"rpath-in-cmake",level:2},{value:"CMake Variables",id:"cmake-variables",level:2},{value:"<code>clang</code> FAQ",id:"clang-faq",level:2},{value:"Find out <code>clang</code> include search path",id:"find-out-clang-include-search-path",level:3},{value:"Add include search path to <code>clang</code>",id:"add-include-search-path-to-clang",level:3},{value:"Find out <code>clang</code> library search paths",id:"find-out-clang-library-search-paths",level:3},{value:"Add library search path to <code>clang</code>",id:"add-library-search-path-to-clang",level:3},{value:"What is the difference? clang++ | clang -std=c++11",id:"what-is-the-difference-clang--clang--stdc11",level:2},{value:"CMake FAQ",id:"cmake-faq",level:2},{value:"Add library search path to <code>CMake</code> globally in project",id:"add-library-search-path-to-cmake-globally-in-project",level:3},{value:"Resources",id:"resources",level:2}],p={toc:c},d="wrapper";function m(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In brief, ",(0,r.kt)("strong",{parentName:"p"},"CMake")," is all about ",(0,r.kt)("strong",{parentName:"p"},"targets")," and ",(0,r.kt)("strong",{parentName:"p"},"properties")),(0,r.kt)("h2",{id:"cmake-project-structure"},"CMake Project Structure"),(0,r.kt)("p",null,"A typical ",(0,r.kt)("strong",{parentName:"p"},"CMake")," project can be regarded to has three ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source Tree"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"project_root\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 simple_example.cpp\n\u251c\u2500\u2500 simple_lib.cpp\n\u2514\u2500\u2500 simple_lib.hpp\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build Tree"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"project_root\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 simple_example.cpp\n\u251c\u2500\u2500 simple_lib.cpp\n\u251c\u2500\u2500 simple_lib.hpp\n\u2514\u2500\u2500 build\n    \u2514\u2500\u2500 CMakeCache.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Tree"),":"),(0,r.kt)("p",null,"This tree is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_INSTALL_PREFIX"),", of which default value is platform-dependent. By default, it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local")," on Unix-like systems (Linux, macOS) and ",(0,r.kt)("inlineCode",{parentName:"p"},"C:/Program Files/<Project Name>")," on Windows.."),(0,r.kt)("p",null,"To change it, you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"-DCMAKE_INSTALL_PREFIX")," argument during CMake ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," step, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cmake -B build -S . -DCMAKE_INSTALL_PREFIX=/my/custom/installation/path\n")),(0,r.kt)("p",null,"Alternatively, you can change it by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--prefix"),"(it can be relative path) argument during CMake ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," step, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'cmake --install build --prefix "/my/custom/installation/path"\n')),(0,r.kt)("p",null,"It's recommended to use a default install layout as ",(0,r.kt)("inlineCode",{parentName:"p"},"GNUInstallDirs"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"install tree")," will look like as below if you'd like all things to be installed inside the project via ",(0,r.kt)("inlineCode",{parentName:"p"},'cmake --install build --prefix "./install'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"project_root\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 simple_example.cpp\n\u251c\u2500\u2500 simple_lib.cpp\n\u251c\u2500\u2500 simple_lib.hpp\n\u251c\u2500\u2500 build\n\u2502   \u2514\u2500\u2500 CMakeCache.txt\n\u2514\u2500\u2500 install\n    \u251c\u2500\u2500 bin\n    \u2502   \u2514\u2500\u2500 executables\n    \u251c\u2500\u2500 sbin\n    \u2502   \u2514\u2500\u2500 sysadmin executables\n    \u251c\u2500\u2500 lib\n    \u2502   \u251c\u2500\u2500 compiled libraries (*.so (unix) or *.dll (windows))\n    \u2502   \u2514\u2500\u2500 library archive files (*.lib (windows))\n    \u251c\u2500\u2500 libexec\n    \u2502   \u2514\u2500\u2500 executables not directly invoked by user\n    \u251c\u2500\u2500 include\n    \u2502   \u2514\u2500\u2500 header files\n    \u2514\u2500\u2500 doc\n       \u2514\u2500\u2500 documentation\n")),(0,r.kt)("h2",{id:"how-cmake-works"},"How CMake Works"),(0,r.kt)("p",null,"A typical workflow of CMake includes ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Install")," steps, combined with the above mentioned ",(0,r.kt)("inlineCode",{parentName:"p"},"Trees")," concepts."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Configure")," step will generate a sort of configuration files, the most important ones among them are ",(0,r.kt)("inlineCode",{parentName:"li"},"CMakeCache.txt"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cmake_install.cmake")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile")," if using ",(0,r.kt)("inlineCode",{parentName:"li"},"Make")," as building system. With these generated configuration files, the later steps ",(0,r.kt)("inlineCode",{parentName:"li"},"Build")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Install")," will run according to them."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Build")," step will generate the build binary directory."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Install")," step will generate the install binary directory.")),(0,r.kt)("h2",{id:"how-to-make-your-package-be-found-by-others-by-find_package"},"How to make your package be found by others by ",(0,r.kt)("inlineCode",{parentName:"h2"},"find_package()")),(0,r.kt)("p",null,"package configuration files: ",(0,r.kt)("inlineCode",{parentName:"p"},"find_package")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/guide/importing-exporting/index.html#importing-targets"},"Title")),(0,r.kt)("h2",{id:"rpath-in-cmake"},"RPATH in CMake"),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-rpath-5b4334"},(0,r.kt)("a",{parentName:"sup",href:"#fn-rpath-5b4334",className:"footnote-ref"},"rpath"))),(0,r.kt)("h2",{id:"cmake-variables"},"CMake Variables"),(0,r.kt)("p",null,"There are some useful and important CMake variables that will be introduced here:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_PREFIX_PATH")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CMAKE_IGNORE_PATH")),(0,r.kt)("h2",{id:"clang-faq"},(0,r.kt)("inlineCode",{parentName:"h2"},"clang")," FAQ"),(0,r.kt)("h3",{id:"find-out-clang-include-search-path"},"Find out ",(0,r.kt)("inlineCode",{parentName:"h3"},"clang")," include search path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'\u276f clang -x c -v -E /dev/null\n...\n#include "..." search starts here:\n#include <...> search starts here:\n /opt/homebrew/Cellar/llvm/17.0.1/lib/clang/17/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX14.sdk/usr/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX14.sdk/System/Library/Frameworks (framework directory)\nEnd of search list.\n# 1 "/dev/null"\n# 1 "<built-in>" 1\n# 1 "<built-in>" 3\n# 420 "<built-in>" 3\n# 1 "<command line>" 1\n# 1 "<built-in>" 2\n# 1 "/dev/null" 2\n')),(0,r.kt)("h3",{id:"add-include-search-path-to-clang"},"Add include search path to ",(0,r.kt)("inlineCode",{parentName:"h3"},"clang")),(0,r.kt)("p",null,"Use environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"C_INCLUDE_PATH")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CPLUS_INCLUDE_PATH")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"c++"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'\u276f C_INCLUDE_PATH=/opt/homebrew/include clang -x c -v -E /dev/null\n...\n#include "..." search starts here:\n#include <...> search starts here:\n /usr/local/include\n /opt/homebrew/include\n /Library/Developer/CommandLineTools/usr/lib/clang/15.0.0/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include\n /Library/Developer/CommandLineTools/usr/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/System/Library/Frameworks (framework directory)\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clang++"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'\u276f CPLUS_INCLUDE_PATH=/opt/homebrew/include clang -x c++ -v -E /dev/null\n...\n#include "..." search starts here:\n#include <...> search starts here:\n /usr/local/include\n /opt/homebrew/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1\n /Library/Developer/CommandLineTools/usr/lib/clang/15.0.0/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include\n /Library/Developer/CommandLineTools/usr/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/System/Library/Frameworks (framework directory)\n')),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-I")," flag,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'\u276f clang -x c -I/opt/homebrew/include -v -E /dev/null\n...\n#include "..." search starts here:\n#include <...> search starts here:\n /opt/homebrew/include\n /usr/local/include\n /Library/Developer/CommandLineTools/usr/lib/clang/15.0.0/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include\n /Library/Developer/CommandLineTools/usr/include\n /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/System/Library/Frameworks (framework directory)\n')),(0,r.kt)("h3",{id:"find-out-clang-library-search-paths"},"Find out ",(0,r.kt)("inlineCode",{parentName:"h3"},"clang")," library search paths"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f clang -Xlinker -v\n...\nLibrary search paths:\n    /usr/local/lib\nFramework search paths:\nld: Undefined symbols:\n  _main, referenced from:\n      <initial-undefines>\nclang: error: linker command failed with exit code 1 (use -v to see invocation)\n")),(0,r.kt)("h3",{id:"add-library-search-path-to-clang"},"Add library search path to ",(0,r.kt)("inlineCode",{parentName:"h3"},"clang")),(0,r.kt)("p",null,"Use environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"LIBRARY_PATH"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f LIBRARY_PATH=$LIBRARY_PATH:/usr/lib clang -Xlinker -v\n...\nLibrary search paths:\n    .\n    /usr/lib\n    /usr/local/lib\nFramework search paths:\nld: Undefined symbols:\n  _main, referenced from:\n      <initial-undefines>\nclang: error: linker command failed with exit code 1 (use -v to see invocation)\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-L")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f clang -L/opt/homebrew/lib -Xlinker -v\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://langui.sh/2015/07/24/osx-clang-include-lib-search-paths/"},"https://langui.sh/2015/07/24/osx-clang-include-lib-search-paths/")),(0,r.kt)("h2",{id:"what-is-the-difference-clang--clang--stdc11"},"What is the difference? clang++ | clang -std=c++11"),(0,r.kt)("h2",{id:"cmake-faq"},"CMake FAQ"),(0,r.kt)("h3",{id:"add-library-search-path-to-cmake-globally-in-project"},"Add library search path to ",(0,r.kt)("inlineCode",{parentName:"h3"},"CMake")," globally in project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"set(CMAKE_LIBRARY_PATH ${CMAKE_LIBRARY_PATH} /opt/local/lib)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"LINK_DIRECTORIES(/opt/local/lib)"))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://enccs.github.io/cmake-workshop/"},"CMake hands-on workshop \u2014 CMake Workshop"),"\n",(0,r.kt)("sup",{parentName:"p",id:"fnref-rpath-5b4334"},(0,r.kt)("a",{parentName:"sup",href:"#fn-rpath-5b4334",className:"footnote-ref"},"rpath")),": ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.kitware.com/cmake/community/-/wikis/doc/cmake/RPATH-handling"},"RPATH handling from official cmake")))}m.isMDXComponent=!0}}]);