"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),g=n,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=r(87462),n=(r(67294),r(3905));const a={authors:["frank"],tags:["algorithm","maths"],description:"algorithm",keywords:["algorithm"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-02-27T00:00:00.000Z"),draft:!1,enableComments:!0},i="Algorithms",l={permalink:"/blog/algorithms",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/algorithms.mdx",source:"@site/../../blog/algorithms.mdx",title:"Algorithms",description:"algorithm",date:"2024-02-27T00:00:00.000Z",formattedDate:"February 27, 2024",tags:[{label:"algorithm",permalink:"/blog/tags/algorithm"},{label:"maths",permalink:"/blog/tags/maths"}],readingTime:.695,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["algorithm","maths"],description:"algorithm",keywords:["algorithm"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-02-27T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Python Wiki",permalink:"/blog/wiki-python"},nextItem:{title:"Wiki Compiler",permalink:"/blog/wiki-compiler"}},s={authorsImageUrls:[void 0]},m=[{value:"Boyer\u2013Moore majority vote algorithm",id:"boyermoore-majority-vote-algorithm",level:2},{value:"Resources",id:"resources",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As it is known that algorithms and data structures are the prime of computer programming. With algorithms and data structures, the better high-level features in applications we can develop and implement. Outstanding algorithms means faster time and less space. ",(0,n.kt)("inlineCode",{parentName:"p"},"O(1)")," on both of time complexity and space must be the best as taking the constant time and the constant space, but it's rarely to achieve in practice. Next, ",(0,n.kt)("inlineCode",{parentName:"p"},"O(log n)")," is mostly desirable for most applications on real occasion."),(0,n.kt)("p",null,"Of course, you'll go through algorithms questions in a lot of interviews for programming-related positions."),(0,n.kt)("p",null,"Here are proofs for the correctness of some common algorithms, that I'd like to understand and prove them in mathematics."),(0,n.kt)("h2",{id:"boyermoore-majority-vote-algorithm"},"Boyer\u2013Moore majority vote algorithm"),(0,n.kt)("p",null,"Just run one loop to find the majority in an array."),(0,n.kt)("p",null,"Time complexity: ",(0,n.kt)("inlineCode",{parentName:"p"},"O(n)"),"\nSpace complexity: ",(0,n.kt)("inlineCode",{parentName:"p"},"O(1)")),(0,n.kt)("h2",{id:"resources"},"Resources"))}u.isMDXComponent=!0}}]);