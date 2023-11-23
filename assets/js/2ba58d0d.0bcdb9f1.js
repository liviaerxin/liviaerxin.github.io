"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(r),d=o,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={},i="CIL(Common Intermediate Language)",l={permalink:"/blog/common-intermediate-language",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/common-intermediate-language.md",source:"@site/../../blog/common-intermediate-language.md",title:"CIL(Common Intermediate Language)",description:"Verifying your own .NET IL-Code",date:"2023-11-23T08:25:47.000Z",formattedDate:"November 23, 2023",tags:[],readingTime:.585,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Data Center",permalink:"/blog/data-center"}},c={authorsImageUrls:[]},m=[{value:"What is CIl/IL",id:"what-is-cilil",level:2},{value:"What is JIT",id:"what-is-jit",level:2}],p={toc:m},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.dynatrace.com/news/blog/verifying-your-own-dotnet-il-code/"},"Verifying your own .NET IL-Code")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/39979851/net-core-equivalent-of-ildasm-ilasm"},"linux - .net-core: Equivalent of ILDASM / ILASM - Stack Overflow")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/what-is-just-in-time-jit-compiler-in-dot-net/"},"What is Just-In-Time(JIT) Compiler in .NET - GeeksforGeeks")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Konard/ILProj"},"GitHub - Konard/ILProj: The example class library project, with code written in the CIL.")),(0,o.kt)("h2",{id:"what-is-cilil"},"What is CIl/IL"),(0,o.kt)("p",null,"For C# or Java, the program is not directly compiled to machine code, but ",(0,o.kt)("strong",{parentName:"p"},"intermediate language")," code. For C#, the ",(0,o.kt)("inlineCode",{parentName:"p"},"intermediate")," code is called Common Intermediate Language(CIL, or IL). So whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.dll")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"*.exe")," compiled from C#, is composed of IL code and its corresponding meta data. At runtime, the JIT(Just-In-Compiler) compile the IL code to the native machine code."),(0,o.kt)("h2",{id:"what-is-jit"},"What is JIT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./ilasm ~/Documents/peggy-foam-wiki/docs/IL/test/test.il -dll\n./ildasm ~/Documents/peggy-foam-wiki/docs/IL/test/test.dll -t\ndotnet myapp.dll\n")))}u.isMDXComponent=!0}}]);