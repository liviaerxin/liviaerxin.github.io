"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/self-signed-certificate.mdx"},authors:["frank"],tags:["openssl","certificate","best-practice"],description:"Self Signed Certificate",keywords:["Self Signed Certificate"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-10-04T00:00:00.000Z"),draft:!1,enableComments:!0},o="Generate self-signed SSL/TLS certificate for local IP address or local domain",l={permalink:"/blog/certificate",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/certificate.mdx",source:"@site/../../blog/certificate.mdx",title:"Generate self-signed SSL/TLS certificate for local IP address or local domain",description:"Self Signed Certificate",date:"2023-10-04T00:00:00.000Z",formattedDate:"October 4, 2023",tags:[{label:"openssl",permalink:"/blog/tags/openssl"},{label:"certificate",permalink:"/blog/tags/certificate"},{label:"best-practice",permalink:"/blog/tags/best-practice"}],readingTime:3.625,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/self-signed-certificate.mdx"},authors:["frank"],tags:["openssl","certificate","best-practice"],description:"Self Signed Certificate",keywords:["Self Signed Certificate"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-10-04T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki Vcpkg",permalink:"/blog/wiki-vcpkg"},nextItem:{title:"QEMU Direct Linux Kernel Boot",permalink:"/blog/qemu-linux-kernel-boot"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In real life, when we build our website and make it public, some paid or free CA(Certificate Authority) will help us sign a certificate for our website domain and enable SSL/TLS connections from user browser to our server."),(0,n.kt)("p",null,"For secure reasons, the browser will only admit those servers's certificates signed from authorized CA, of which certificate is kept in your host system trust store."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"One of the most popular Certificate Authorities is ",(0,n.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),", which is a free and non-profit CA.")),(0,n.kt)("p",null,"Here is an example, we will generate a local server certificate that is signed by a local CA. Finally, let Chrome can visit our local website without security warning."),(0,n.kt)("p",null,"In brief, these steps we need to sign local sever certificate actually simulate how those CA sign certificates for public servers, as following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a local ",(0,n.kt)("strong",{parentName:"li"},"Root CA"),"."),(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("strong",{parentName:"li"},"CSR"),"(Certificate Signing Request) file for local server ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ol"},"The local ",(0,n.kt)("strong",{parentName:"li"},"Root CA")," use the ",(0,n.kt)("strong",{parentName:"li"},"CSR")," to generate a ",(0,n.kt)("strong",{parentName:"li"},"certificate")," for local server ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ol"},"Install the local ",(0,n.kt)("strong",{parentName:"li"},"Root CA")," into our system(Windows, Ubuntu or macOS) trust store."),(0,n.kt)("li",{parentName:"ol"},"Run a simple ",(0,n.kt)("strong",{parentName:"li"},"https")," server to test local server ",(0,n.kt)("strong",{parentName:"li"},"certificate"),".")),(0,n.kt)("p",null,"For those official CA, they have to validate the domain is owned by the server before the ",(0,n.kt)("inlineCode",{parentName:"p"},"step 3"),", and we can ignore ",(0,n.kt)("inlineCode",{parentName:"p"},"step 4")," as they are already installed into the system or the browser trust store."),(0,n.kt)("p",null,"And there is nice picture from ",(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/pulse/how-create-your-own-self-signed-root-certificate-shankar-gomare/"},"How to create your own self-signed root Certificate Authority(CA)")," to show the relationship between ",(0,n.kt)("inlineCode",{parentName:"p"},"CA"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"browser"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://media.licdn.com/dms/image/C4E12AQGJ5hl3wTAyFg/article-inline_image-shrink_400_744/0/1589170084171?e=1701907200&v=beta&t=FaVSM-fIy4dc-SIftGYEuUc7GONcMLphssfteUKoWuA",alt:null})))}u.isMDXComponent=!0}}]);