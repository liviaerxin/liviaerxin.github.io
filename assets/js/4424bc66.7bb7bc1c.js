"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,k=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={authors:["frank"],tags:["Cheatsheet Traefik"],description:"Cheatsheet Traefik",keywords:["Cheatsheet Traefik"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-01-17T00:00:00.000Z"),draft:!1,enableComments:!0},o="Traefik Docker Cheat Sheet",l={permalink:"/blog/cheatsheet-traefik-docker",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/cheatsheet-traefik-docker.mdx",source:"@site/../../blog/cheatsheet-traefik-docker.mdx",title:"Traefik Docker Cheat Sheet",description:"Cheatsheet Traefik",date:"2024-01-17T00:00:00.000Z",formattedDate:"January 17, 2024",tags:[{label:"Cheatsheet Traefik",permalink:"/blog/tags/cheatsheet-traefik"}],readingTime:1.895,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["Cheatsheet Traefik"],description:"Cheatsheet Traefik",keywords:["Cheatsheet Traefik"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-01-17T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki VPN",permalink:"/blog/wiki-vpn"},nextItem:{title:"Network Cheat Sheet",permalink:"/blog/cheatsheet-network"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here are quick references for using ",(0,a.kt)("inlineCode",{parentName:"p"},"Traefik")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker")," containers."),(0,a.kt)("p",null,"I use ",(0,a.kt)("inlineCode",{parentName:"p"},"Traefik")," in my docker compose project more frequently than using ",(0,a.kt)("inlineCode",{parentName:"p"},"Nginx"),", as it has such advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simply to use and fast to spin up",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configuration relies on platform syntax(like ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker labels")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Kubernetes annotations"),"), while ",(0,a.kt)("inlineCode",{parentName:"li"},"Nginx")," uses its own syntax and directives."),(0,a.kt)("li",{parentName:"ul"},"Configuration can just sit in ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),", but ",(0,a.kt)("inlineCode",{parentName:"li"},"Nginx")," always uses a dedicate configuration file(",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/nginx.conf"),")."))),(0,a.kt)("li",{parentName:"ul"},"Dynamic configuration:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Changes to the configuration require a restart of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Nginx")," process"),(0,a.kt)("li",{parentName:"ul"},"Changes to the configuration require a restart of its corresponding service, not the ",(0,a.kt)("inlineCode",{parentName:"li"},"Traefik")," process")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://doc.traefik.io/traefik/assets/img/middleware/overview.png",alt:"How a Request is processed in Traefik"})),(0,a.kt)("p",null,"Entrypoint -> Router -> Middleware 1 -> Middleware 2 -> ... -> Service"))}m.isMDXComponent=!0}}]);