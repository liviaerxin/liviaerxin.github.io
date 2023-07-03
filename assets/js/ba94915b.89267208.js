"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3486],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,b=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return t?n.createElement(b,o(o({ref:r},c),{},{components:t})):n.createElement(b,o({ref:r},c))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7235:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const l={foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/learn-powershell.md"},sidebar_label:"Learn PowerShell",description:"Learn PowerShell",keywords:["learn powershell"],image:"https://i.imgur.com/mErPwqL.png",tags:["powershell","learn"],last_update:{date:new Date("2023-06-26T00:00:00.000Z"),author:"frank"}},o="Learn PowerShell",i={permalink:"/blog/learn-powershell",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/learn-powershell.md",source:"@site/../../blog/learn-powershell.md",title:"Learn PowerShell",description:"Learn PowerShell",date:"2023-07-03T09:50:43.000Z",formattedDate:"July 3, 2023",tags:[{label:"powershell",permalink:"/blog/tags/powershell"},{label:"learn",permalink:"/blog/tags/learn"}],readingTime:.145,hasTruncateMarker:!1,authors:[],frontMatter:{foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/learn-powershell.md"},sidebar_label:"Learn PowerShell",description:"Learn PowerShell",keywords:["learn powershell"],image:"https://i.imgur.com/mErPwqL.png",tags:["powershell","learn"],last_update:{date:"2023-06-26T00:00:00.000Z",author:"frank"}},prevItem:{title:"Learn FFmpeg",permalink:"/blog/learn-ffmpeg"},nextItem:{title:"Learn Vcpkg",permalink:"/blog/learn-vcpkg"}},p={authorsImageUrls:[]},s=[],c={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Set environment variables permanently"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'[Environment]::SetEnvironmentVariable("VCPKG_ROOT", "Whatever you need it to be", "Machine")\n')),(0,a.kt)("p",null,"Get environment variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# Get all variables\n[Environment]::GetEnvironmentVariable()\n\n# Get specific variable\n[Environment]::GetEnvironmentVariable("VCPKG_ROOT")\n')))}m.isMDXComponent=!0}}]);