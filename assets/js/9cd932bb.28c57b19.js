"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="Your markdown including PlantUML code block",i={permalink:"/blog/markdown-plantuml",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/markdown-plantuml.md",source:"@site/../../blog/markdown-plantuml.md",title:"Your markdown including PlantUML code block",description:"",date:"2024-01-11T07:25:14.000Z",formattedDate:"January 11, 2024",tags:[],readingTime:.665,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"LevelDB",permalink:"/blog/leveldb"},nextItem:{title:"Network Diagnosis",permalink:"/blog/network-diagnosis"}},c={authorsImageUrls:[]},p=[],u={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plantumlcode"},'@startuml\n:User: --\x3e (Use)\n"Main Admin" as Admin\n"Use the application" as (Use)\nAdmin --\x3e (Admin the application)\n@enduml\n')),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/XSpH2O0W403GVwUu1Mw124b7Q0Ep0mMzgppt3wgl2Ff_lAbfEBJNObp9aG0jU5a6S5qJiUOOD0l3J7kdfiRB0eWMBloXsYRSoBmp5arqGFXERpmY_kWdduZNNii9",alt:null}),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ROtBIWD144Nt_HKtGo0A0-8-X4IJh1m796Gb36LtZMbItJNq8-ZVYt6JXRiBvt3kEXTAfGOnCn-jLCTO1YgSFCc3rH0qhim21uKFawQ2ScBaAVd26BqmlhLYsxyk3eZC3aKn2La6OKey-g_PV-5HnN4QWbvuPKot6VRzotRtDdJzSNVt96JFBHvRE9zQ9BQ5ugTmYsO3eG-MvjwOwtcJjIRBiEhuFIxdWORRT0FAL_PdFtTqvj-LpPgZgq5-0000",alt:null}),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VT5DYy8m40RW-_oAiNXOeIZUHMohHn7Qqx986PDnjpHf9H_W8lxtfRf-b5rpo-IT9vcGXNLadDSA1bKZb9UCCqsEJKLg8bgjssR-VoIvt1aIR5_dP0nzXtdDBd30WGmtxejjw1P7dtOEi4xARBDSbMcUPAlYBLKawXYdCThM6y4nxYl5CKR5fSIibHoDxYh9y-Jz2GbDzSDaQwgvMzknExe0wwaR2lNRdQ-KV90YxUfeX2Su0tIxU1tu0vu6XzbGKzdxW-rlT-zzU094n6lmnqHmXWKtqclr0m00",alt:null}))}s.isMDXComponent=!0}}]);