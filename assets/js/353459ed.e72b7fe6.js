"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/learn-cuda.md"},sidebar_label:"Learn CUDA",description:"Learn CUDA",keywords:["gpu","cuda"],image:"https://i.imgur.com/mErPwqL.png",tags:["learn","gpu","cuda"],last_update:{date:new Date("2023-06-29T00:00:00.000Z"),author:"frank"}},o="Learn CUDA",i={permalink:"/blog/learn-cuda",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/learn-cuda.md",source:"@site/../../blog/learn-cuda.md",title:"Learn CUDA",description:"Learn CUDA",date:"2023-07-03T09:50:43.000Z",formattedDate:"July 3, 2023",tags:[{label:"learn",permalink:"/blog/tags/learn"},{label:"gpu",permalink:"/blog/tags/gpu"},{label:"cuda",permalink:"/blog/tags/cuda"}],readingTime:.22,hasTruncateMarker:!1,authors:[],frontMatter:{foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/learn-cuda.md"},sidebar_label:"Learn CUDA",description:"Learn CUDA",keywords:["gpu","cuda"],image:"https://i.imgur.com/mErPwqL.png",tags:["learn","gpu","cuda"],last_update:{date:"2023-06-29T00:00:00.000Z",author:"frank"}},prevItem:{title:"Learn CMake",permalink:"/blog/learn-cmake"},nextItem:{title:"Learn FFmpeg",permalink:"/blog/learn-ffmpeg"}},c={authorsImageUrls:[]},p=[{value:"CUDA on WSL",id:"cuda-on-wsl",level:2},{value:"References",id:"references",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ecosystem:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GPU(Hardware)"),(0,n.kt)("li",{parentName:"ul"},"Nvidia Graphics Driver"),(0,n.kt)("li",{parentName:"ul"},"CUDA Toolkit"),(0,n.kt)("li",{parentName:"ul"},"cuDNN")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.nvidia.com/deploy/cuda-compatibility/graphics/CUDA-components.png",alt:"CUDA Components"})),(0,n.kt)("h2",{id:"cuda-on-wsl"},"CUDA on WSL"),(0,n.kt)("p",null,"NVIDIA CUDA software stack on WSL 2:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.nvidia.com/cuda/wsl-user-guide/_images/wsl-launch-upt-0625-rz.png",alt:"NVIDIA CUDA software stack on WSL 2"})),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/deploy/cuda-compatibility/index.html"},"CUDA And Nvidia Graphics Driver")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/wsl-user-guide/index.html"},"CUDA on WSL User Guide")))}m.isMDXComponent=!0}}]);