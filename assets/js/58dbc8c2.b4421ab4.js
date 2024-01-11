"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),k=o,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},53333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-proxy.mdx"},authors:["frank"],tags:["wiki","network","proxy"],description:"Wiki Proxy",keywords:["Wiki Proxy"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-11-29T00:00:00.000Z"),draft:!1,enableComments:!0},i="Wiki Network",s={permalink:"/blog/wiki-network",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-network.mdx",source:"@site/../../blog/wiki-network.mdx",title:"Wiki Network",description:"Wiki Proxy",date:"2023-11-29T00:00:00.000Z",formattedDate:"November 29, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"network",permalink:"/blog/tags/network"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:.3,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-proxy.mdx"},authors:["frank"],tags:["wiki","network","proxy"],description:"Wiki Proxy",keywords:["Wiki Proxy"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-11-29T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki Development Environment",permalink:"/blog/wiki-dev-environment"},nextItem:{title:"Wiki Assembly",permalink:"/blog/wiki-assembly"}},l={authorsImageUrls:[void 0]},p=[{value:"TCP handshake",id:"tcp-handshake",level:2},{value:"TLS handshake",id:"tls-handshake",level:2},{value:"Man-in-the-middle(MitM) or Proxy",id:"man-in-the-middlemitm-or-proxy",level:2},{value:"HTTPS proxy",id:"https-proxy",level:2},{value:"HTTP proxy",id:"http-proxy",level:2},{value:"SOCKS proxy",id:"socks-proxy",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How does ",(0,o.kt)("strong",{parentName:"p"},"Wireshark")," sniff the network traffic on OSX?"),(0,o.kt)("p",null,"On OSX, ",(0,o.kt)("strong",{parentName:"p"},"Wireshark")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/bpf*")," which is the OSX system's packet capture devices.\nOn Linux, ",(0,o.kt)("strong",{parentName:"p"},"Wireshark")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"socket")," to capture the network interface such as ",(0,o.kt)("inlineCode",{parentName:"p"},"eth0"),"."),(0,o.kt)("h2",{id:"tcp-handshake"},"TCP handshake"),(0,o.kt)("h2",{id:"tls-handshake"},"TLS handshake"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/"},"https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/")),(0,o.kt)("h2",{id:"man-in-the-middlemitm-or-proxy"},"Man-in-the-middle(MitM) or Proxy"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://httptoolkit.com/docs/guides/android/"},"https://httptoolkit.com/docs/guides/android/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.mitmproxy.org/stable/concepts-howmitmproxyworks/"},"https://docs.mitmproxy.org/stable/concepts-howmitmproxyworks/")),(0,o.kt)("h2",{id:"https-proxy"},"HTTPS proxy"),(0,o.kt)("h2",{id:"http-proxy"},"HTTP proxy"),(0,o.kt)("h2",{id:"socks-proxy"},"SOCKS proxy"),(0,o.kt)("h2",{id:"resources"},"Resources"))}u.isMDXComponent=!0}}]);