"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="Your markdown including PlantUML code block",c={permalink:"/blog/markdown-plantuml",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/markdown-plantuml.md",source:"@site/../../blog/markdown-plantuml.md",title:"Your markdown including PlantUML code block",description:"",date:"2023-07-03T09:50:43.000Z",formattedDate:"July 3, 2023",tags:[],readingTime:.665,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"LevelDB",permalink:"/blog/leveldb"},nextItem:{title:"MDX Features of Docusaurus",permalink:"/blog/mdx-features"}},i={authorsImageUrls:[]},p=[],u={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plantumlcode"},'@startuml\n:User: --\x3e (Use)\n"Main Admin" as Admin\n"Use the application" as (Use)\nAdmin --\x3e (Admin the application)\n@enduml\n')),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuNBCoKnELT2rKt3AJx9IS2mjoKZDAybCJYp9pCzJ24ejB4qjBk42oYde0jM05MDHLLoGdrUSoeLkM5u-K5sHGY9sGo6ARNHr2QY66kwGcfS2T300",alt:null}),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ROz1ImCn58Jl-HNJfL251V5UIgjjJwuBKdeIbcVoreQ-v2r9jkY_Tril7hmDpCmtp3eNIcKCOcO-MXaTOnceSF8a3rP3qBWo2nmKFWoQ2ig9aOVa2wFtmlZM4TlsTN50P7OeYa78CWX3ujv_pVu3zogEKnVqmYjZcastRr-skxUkQO-xkwUfVwxnMCFvL2EnBHG_XMjK6mXzi5Jtnjp6gwnZciQiEdwFotcWxY-w0kMRzvj-RkZCLvNDcgERJly0",alt:null}),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VP5D2y8m38Rl_HLrU50OYdSHj-bHXEqa8YDsKOVj9cq7YlZVpVmUQdieVVFcIL8oDXQqhPHahRmGiigG3nLOr3d8lYYLAelHRol3TAr1eFdlWzPmSkDxj8u21z1Os1qQLnSBMtBPB4YZ-MIQXd4GJPDEAAcupmS-DsMb1VfyaqkwlUGcUKIertrHGHm7Ymz8ADY_cMX6gdwRdZrQ1zQWdf0htwohN6Pl90bhxNNvcLqOgwFyFl2IVGpEXcq5QMC7gqTsutzKXTEv6r-CHot6M6Iq_Ii0",alt:null}))}s.isMDXComponent=!0}}]);