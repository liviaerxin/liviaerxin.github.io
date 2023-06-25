"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||c;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const c={sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["blog","docusaurus"],last_update:{date:new Date("2023-06-23T00:00:00.000Z"),author:"frank"}},o="Learn vcpkg",l={unversionedId:"learn-vcpkg",id:"learn-vcpkg",title:"Learn vcpkg",description:"learn vcpkg",source:"@site/../../docs/learn-vcpkg.md",sourceDirName:".",slug:"/learn-vcpkg",permalink:"/docs/learn-vcpkg",draft:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/learn-vcpkg.md",tags:[{label:"blog",permalink:"/docs/tags/blog"},{label:"docusaurus",permalink:"/docs/tags/docusaurus"}],version:"current",lastUpdatedBy:"frank",lastUpdatedAt:1687478400,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{sidebar_label:"learn vcpkg",description:"learn vcpkg",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["blog","docusaurus"],last_update:{date:"2023-06-23T00:00:00.000Z",author:"frank"}},sidebar:"tutorialSidebar",previous:{title:"Learn CMake",permalink:"/docs/learn-cmake"},next:{title:"Your markdown including PlantUML code block",permalink:"/docs/markdown-plantuml"}},i={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"learn-vcpkg"},"Learn vcpkg"),(0,n.kt)("p",null,"Reinstall packages without caching:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'vcpkg remove icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\nvcpkg remove libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\n\nvcpkg remove "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching\nvcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear\n')),(0,n.kt)("p",null,"Clean up all packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf /opt/vcpkg/installed/\nrm -rf /opt/vcpkg/packages/\nrm -rf /opt/vcpkg/buildtrees/\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"")),(0,n.kt)("p",null,"Clean up all caching packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.cache/vcpkg/archives/\n")))}m.isMDXComponent=!0}}]);