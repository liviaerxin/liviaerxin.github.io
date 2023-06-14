"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||o;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i=".NET Performance",c={unversionedId:"dotnet/performance/dotnet-performance",id:"dotnet/performance/dotnet-performance",title:".NET Performance",description:"PerfView",source:"@site/../../docs/dotnet/performance/dotnet-performance.md",sourceDirName:"dotnet/performance",slug:"/dotnet/performance/dotnet-performance",permalink:"/docs/dotnet/performance/dotnet-performance",draft:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/dotnet/performance/dotnet-performance.md",tags:[],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:1686730828,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:".NET Finalizer",permalink:"/docs/dotnet/finalizer"},next:{title:"Frequently Asked Questions",permalink:"/docs/frequently-asked-questions"}},l={},p=[{value:"PerfView",id:"perfview",level:2},{value:"Quick Manual",id:"quick-manual",level:3}],s={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"net-performance"},".NET Performance"),(0,a.kt)("h2",{id:"perfview"},"PerfView"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Maoni0/mem-doc"},"comprehensive document to help with .NET memory analysis and diagnostics")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/perfview"},"PerfView is a CPU and memory performance-analysis tool")),(0,a.kt)("h3",{id:"quick-manual"},"Quick Manual"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"open PerfView\n",(0,a.kt)("img",{alt:"open PerfView",src:r(8194).Z,width:"2560",height:"1600"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"view event trace data from log file\n",(0,a.kt)("img",{alt:"view event trace data from log file",src:r(2143).Z,width:"2560",height:"1600"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"view GC data from log file\n",(0,a.kt)("img",{alt:"view GC data from log file",src:r(8172).Z,width:"2560",height:"1600"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"view EGCD process data from log file(CPU and memory metrics)\n",(0,a.kt)("img",{alt:"view EGCD process data from log file",src:r(6600).Z,width:"2560",height:"1600"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"collect event trace data\n",(0,a.kt)("img",{alt:"collect event trace data",src:r(1863).Z,width:"2560",height:"1600"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"start/stop collection\n",(0,a.kt)("img",{alt:"start/stop collection",src:r(381).Z,width:"2560",height:"1600"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"refresh to view collected data from log file\n",(0,a.kt)("img",{alt:"refresh to view collected data from log file",src:r(692).Z,width:"2560",height:"1600"})))))}d.isMDXComponent=!0},692:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/10-41619f4aaa887bf2351aed4c41aeebde.png"},8194:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-7bbfbebb65401e73966337947e6e3bec.png"},2143:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/3-d9283ba76b06819a415296a361009df6.png"},8172:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4-e536fd115e422fbda715c18678ca6432.png"},6600:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/5-90b66cc44b9c55557d577c6ca693096f.png"},1863:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/8-902ed805842e34bba26555f291fa507f.png"},381:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/9-43d78a55b9806d79eeb25b8e6c807118.png"}}]);