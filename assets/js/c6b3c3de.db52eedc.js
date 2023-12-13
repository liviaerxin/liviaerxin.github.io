"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||y[m]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={authors:["frank"],tags:["Python","Unicode"],description:"Python Unicode",keywords:["Python Unicode"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-12-13T00:00:00.000Z"),draft:!1,enableComments:!0},a="Python Unicode",c={permalink:"/blog/python-unicode",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/python-unicode.mdx",source:"@site/../../blog/python-unicode.mdx",title:"Python Unicode",description:"Python Unicode",date:"2023-12-13T00:00:00.000Z",formattedDate:"December 13, 2023",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"Unicode",permalink:"/blog/tags/unicode"}],readingTime:1.32,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["Python","Unicode"],description:"Python Unicode",keywords:["Python Unicode"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-12-13T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki VPN",permalink:"/blog/wiki-vpn"},nextItem:{title:"Wiki Cryptography",permalink:"/blog/wiki-cryptography"}},l={authorsImageUrls:[void 0]},p=[{value:"Why Python doesn&#39;t use UTF-8 encoding variable-length bytes in memory?",id:"why-python-doesnt-use-utf-8-encoding-variable-length-bytes-in-memory",level:2}],s={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Python string use ",(0,o.kt)("inlineCode",{parentName:"p"},"unicodeobject")," which is implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," in CPython:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/python/cpython/blob/main/Objects/unicodeobject.c"},"unicodeobject.c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/python/cpython/blob/main/Include/cpython/unicodeobject.h"},"unicodeobject.h"))),(0,o.kt)("p",null,"Python chooses one of these three kinds of data type to internally represent for a Unicode-characters string, so every Unicode character of the string has the same fixed-length: 1, 2 or 4,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UCS-1(1 byte), for ASCII characters"),(0,o.kt)("li",{parentName:"ul"},"UCS-2(2 bytes), for Unicode characters between 0 and xxx"),(0,o.kt)("li",{parentName:"ul"},"UCS-4(4 bytes), for Unicode characters between 0 and xxx")),(0,o.kt)("h2",{id:"why-python-doesnt-use-utf-8-encoding-variable-length-bytes-in-memory"},"Why Python doesn't use UTF-8 encoding variable-length bytes in memory?"))}y.isMDXComponent=!0}}]);