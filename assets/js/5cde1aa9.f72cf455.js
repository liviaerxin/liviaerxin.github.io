"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={authors:["frank"],tags:["docker","best practice"],description:"Docker Useful Commands",keywords:["Docker Useful Commands"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-08-11T00:00:00.000Z"),draft:!1,enableComments:!0},l="Docker Useful Commands",s={permalink:"/blog/docker-useful-commands",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/docker-useful-commands.md",source:"@site/../../blog/docker-useful-commands.md",title:"Docker Useful Commands",description:"Docker Useful Commands",date:"2023-08-11T00:00:00.000Z",formattedDate:"August 11, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"best practice",permalink:"/blog/tags/best-practice"}],readingTime:.505,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["docker","best practice"],description:"Docker Useful Commands",keywords:["Docker Useful Commands"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-08-11T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Set Up the NFS Sever In Docker",permalink:"/blog/docker-setup-nfs-sever"},nextItem:{title:"FastAPI Celery Serving ML Model",permalink:"/blog/fastapi-celery-serving-ml-model"}},c={authorsImageUrls:[void 0]},i=[{value:"Docker",id:"docker",level:2},{value:"Docker Compose",id:"docker-compose",level:2}],u={toc:i},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Famous ",(0,a.kt)("inlineCode",{parentName:"li"},"busybox")," image that provide many common UNIX utilities for testing.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --privileged busybox sh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find the IP address of Docker container")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker inspect \\\n    -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \\\n    nfs\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete all containers(include all status of running, stopped, created)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker rm -f $(docker ps -a -q)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete all volumes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker volume rm $(docker volume ls -q)\n")),(0,a.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,a.kt)("p",null,"Rebuild image and restart a service which you specified,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up --no-deps web-app -d\n")),(0,a.kt)("p",null,"Remove a service,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose rm -s -v web-auth\n")))}p.isMDXComponent=!0}}]);