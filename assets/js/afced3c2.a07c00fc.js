"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["wiki","vcpkg"],date:new Date("2023-06-23T00:00:00.000Z"),author:"frank"},l="Wiki Vcpkg",s={permalink:"/blog/wiki-vcpkg",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-vcpkg.mdx",source:"@site/../../blog/wiki-vcpkg.mdx",title:"Wiki Vcpkg",description:"learn vcpkg",date:"2023-06-23T00:00:00.000Z",formattedDate:"June 23, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"vcpkg",permalink:"/blog/tags/vcpkg"}],readingTime:1.055,hasTruncateMarker:!0,authors:[{name:"frank"}],frontMatter:{sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["wiki","vcpkg"],date:"2023-06-23T00:00:00.000Z",author:"frank"},prevItem:{title:"Learn CMake",permalink:"/blog/wiki-cmake"},nextItem:{title:"FastAPI Best Practices",permalink:"/blog/fastapi-best-practices"}},c={authorsImageUrls:[void 0]},o=[{value:"Manifest Mode",id:"manifest-mode",level:2},{value:"Classic Mode",id:"classic-mode",level:2},{value:"Useful Environment variables",id:"useful-environment-variables",level:2},{value:"Tips and Tricks",id:"tips-and-tricks",level:2},{value:"Reinstall packages without caching",id:"reinstall-packages-without-caching",level:3},{value:"Clean up all packages",id:"clean-up-all-packages",level:3},{value:"Clean up all caching packages",id:"clean-up-all-caching-packages",level:3},{value:"<code>INSTALL_RPATH_USE_LINK_PATH</code> different behaviours in <code>manifest</code> and <code>classic</code> mode",id:"install_rpath_use_link_path-different-behaviours-in-manifest-and-classic-mode",level:3}],p={toc:o},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Fix qtbase tools/config in release/debug osx  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg/tree/master/ports/qtbase"},"https://github.com/microsoft/vcpkg/tree/master/ports/qtbase")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/vcpkg/maintainers/functions/vcpkg_cmake_config_fixup"},"https://learn.microsoft.com/en-us/vcpkg/maintainers/functions/vcpkg_cmake_config_fixup")),(0,r.kt)("h2",{id:"manifest-mode"},"Manifest Mode"),(0,r.kt)("h2",{id:"classic-mode"},"Classic Mode"),(0,r.kt)("h2",{id:"useful-environment-variables"},"Useful Environment variables"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CURRENT_INSTALLED_DIR"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"CURRENT_PACKAGES_DIR")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'set(VCPKG_RELEASE_LIBDIR "${CURRENT_INSTALLED_DIR}/lib")\nset(VCPKG_DEBUG_LIBDIR "${CURRENT_INSTALLED_DIR}/debug/lib")\nset(VCPKG_TOOLS_DIR "${CURRENT_INSTALLED_DIR}/tools")\nset(VCPKG_SHARE_DIR "${CURRENT_INSTALLED_DIR}/share")\nset(VCPKG_INCLUDE_DIR "${CURRENT_INSTALLED_DIR}/include")\n')),(0,r.kt)("h2",{id:"tips-and-tricks"},"Tips and Tricks"),(0,r.kt)("h3",{id:"reinstall-packages-without-caching"},"Reinstall packages without caching"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'vcpkg remove icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\nvcpkg remove libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\n\nvcpkg remove "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\n')),(0,r.kt)("h3",{id:"clean-up-all-packages"},"Clean up all packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf /opt/vcpkg/installed/\nrm -rf /opt/vcpkg/packages/\nrm -rf /opt/vcpkg/buildtrees/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"")),(0,r.kt)("h3",{id:"clean-up-all-caching-packages"},"Clean up all caching packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.cache/vcpkg/archives/\n")),(0,r.kt)("h3",{id:"install_rpath_use_link_path-different-behaviours-in-manifest-and-classic-mode"},(0,r.kt)("inlineCode",{parentName:"h3"},"INSTALL_RPATH_USE_LINK_PATH")," different behaviours in ",(0,r.kt)("inlineCode",{parentName:"h3"},"manifest")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"classic")," mode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL_RPATH_USE_LINK_PATH")," will not work properly when being used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest")," mode, because ",(0,r.kt)("inlineCode",{parentName:"p"},"CMake")," will don't handle libraries located in ",(0,r.kt)("inlineCode",{parentName:"p"},"buildtree"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'set_target_properties(${PROJECT_NAME} PROPERTIES\n    INSTALL_RPATH "@executable_path/../Frameworks"\n    INSTALL_RPATH_USE_LINK_PATH ON\n)\n')),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"${PROJECT_NAME}")," installed, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest")," mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld\n          cmd LC_RPATH\n      cmdsize 48\n         path @executable_path/../Frameworks (offset 12)\n")),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"${PROJECT_NAME}")," installed, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"classic")," mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld\n          cmd LC_RPATH\n      cmdsize 56\n         path /opt/vcpkg/installed/arm64-osx-dynamic/lib (offset 12)\nLoad command 27\n      cmd LC_FUNCTION_STARTS\n--\n          cmd LC_RPATH\n      cmdsize 48\n         path @executable_path/../Frameworks (offset 12)\n")),(0,r.kt)("p",null,"[wiki-cmake.mdx#RPATH in CMake]","(/blog/wiki-cmake#RPATH in CMake)"))}d.isMDXComponent=!0}}]);