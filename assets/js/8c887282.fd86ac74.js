"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={type:"data-structure",keywords:["MessagePack","msgpack","json","serialization","Protocol Buffers","Protobuf"],tag:["msgpack","data structure"]},i="Serialization",s={permalink:"/blog/serialization",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/serialization.md",source:"@site/../../blog/serialization.md",title:"Serialization",description:"Serialization",date:"2023-08-01T09:31:11.000Z",formattedDate:"August 1, 2023",tags:[],readingTime:.49,hasTruncateMarker:!1,authors:[],frontMatter:{type:"data-structure",keywords:["MessagePack","msgpack","json","serialization","Protocol Buffers","Protobuf"],tag:["msgpack","data structure"]},prevItem:{title:"RPC vs MQ",permalink:"/blog/rpc_vs_mq"},nextItem:{title:"Skia",permalink:"/blog/skia"}},l={authorsImageUrls:[]},p=[{value:"Json",id:"json",level:2},{value:"MessagePack",id:"messagepack",level:2},{value:"Protocol Buffers",id:"protocol-buffers",level:2},{value:"Supported Features",id:"supported-features",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Serialization"},"Serialization")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@hugovs/the-need-for-speed-experimenting-with-message-serialization-93d7562b16e4"},"The need for speed \u2014 Experimenting with message serialization")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/neuecc/MessagePack-CSharp/issues/819#issuecomment-586125191"},"MessagePack, Json, Protobuf")),(0,n.kt)("p",null,"In computing, ",(0,n.kt)("inlineCode",{parentName:"p"},"serialization")," is the process of translating a data structure or object into a format that can be stored(for example, in a file or memory buffer) or transmitted(for example, over a computer network) and reconstructed later (possibly in a different computer environment)."),(0,n.kt)("h2",{id:"json"},"Json"),(0,n.kt)("h2",{id:"messagepack"},"MessagePack"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/msgpack/msgpack"},"msgpack GitHub")),(0,n.kt)("h2",{id:"protocol-buffers"},"Protocol Buffers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers")),(0,n.kt)("h2",{id:"supported-features"},"Supported Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Discriminator Property & Polymorphism"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Json"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MessagePack"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protobuf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")))))}m.isMDXComponent=!0}}]);