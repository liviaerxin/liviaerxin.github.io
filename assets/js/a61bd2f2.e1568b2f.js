"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/docker-containers-data-sharing.md"},authors:["frank"],tags:["docker","dev-ops","docker-volume","data"],description:"Docker Containers Data Sharing",keywords:["Docker Containters Data Sharing"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-07-19T00:00:00.000Z"),draft:!1,enableComments:!0},l="Share Data between Docker Containers",i={permalink:"/blog/docker-containers-data-sharing",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/docker-containers-data-sharing.md",source:"@site/../../blog/docker-containers-data-sharing.md",title:"Share Data between Docker Containers",description:"Docker Containers Data Sharing",date:"2023-07-19T00:00:00.000Z",formattedDate:"July 19, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-ops",permalink:"/blog/tags/dev-ops"},{label:"docker-volume",permalink:"/blog/tags/docker-volume"},{label:"data",permalink:"/blog/tags/data"}],readingTime:1.69,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/docker-containers-data-sharing.md"},authors:["frank"],tags:["docker","dev-ops","docker-volume","data"],description:"Docker Containers Data Sharing",keywords:["Docker Containters Data Sharing"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-07-19T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Git Best Practices",permalink:"/blog/git-best-practices"},nextItem:{title:"REST API Filtering, Sorting and Pagination",permalink:"/blog/rest-api-filtering-sorting-pagination"}},s={authorsImageUrls:[void 0]},c=[{value:"Use a volume to bind a local folder",id:"use-a-volume-to-bind-a-local-folder",level:2},{value:"Use NFS volume",id:"use-nfs-volume",level:2},{value:"Use Samba volume",id:"use-samba-volume",level:2},{value:"References",id:"references",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are three types of data to manage data in Docker,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bind mount"),(0,r.kt)("li",{parentName:"ul"},"volume mount"),(0,r.kt)("li",{parentName:"ul"},"tmpfs mount")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(22167).Z,width:"502",height:"255"})),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/"},"Manage data in Docker")," for more information, it's a great official documentation!"),(0,r.kt)("p",null,"Here, this page demonstrates some use cases in practices that you maybe face. As the official documentation says, ",(0,r.kt)("strong",{parentName:"p"},"Volume")," is alway the first choice and preferred mechanism for persisting and sharing data between containers, as one of the biggest advantages is that ",(0,r.kt)("strong",{parentName:"p"},"volume")," is thoroughly managed by Docker. That means:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can manage ",(0,r.kt)("strong",{parentName:"li"},"volume")," using Docker CLI commands ir the Docker API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Volume")," is easier to back up and migrate than ",(0,r.kt)("strong",{parentName:"li"},"bind mounts"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Volume")," work the same interface in Linux and Windows, such as no need to worry about ",(0,r.kt)("inlineCode",{parentName:"li"},"POSIX")," file path style in Windows."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Volume")," driver features support you to store data on remote hosts or cloud storage easily."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Volume")," on Docker Desktop have much higher performance than bind mount from Mac and Windows hosts.")),(0,r.kt)("p",null,"Let's look at some use cases that leverage volume ",(0,r.kt)("strong",{parentName:"p"},"driver")," features"),(0,r.kt)("h2",{id:"use-a-volume-to-bind-a-local-folder"},"Use a volume to bind a local folder"),(0,r.kt)("p",null,"In default, the volume is created by Docker and its corresponding folder resides in Docker managed folder like ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker create volume xxx\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ docker volume inspect xxx\n[\n    {\n        "CreatedAt": "2023-07-19T14:41:18+08:00",\n        "Driver": "local",\n        "Labels": {},\n        "Mountpoint": "/var/lib/docker/volumes/xxx/_data",\n        "Name": "xxx",\n        "Options": {},\n        "Scope": "local"\n    }\n]\n')),(0,r.kt)("p",null,"However, sometimes you would like to bind the volume into a specified local folder(like ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/volumes/testvol"),") in hosts(only available in ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker volume create --opt type=none --opt o=bind --opt device=/data/volumes/testvol testvol\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ docker inspect testvol\n[\n    {\n        "CreatedAt": "2023-07-13T04:36:16Z",\n        "Driver": "local",\n        "Labels": {},\n        "Mountpoint": "/var/lib/docker/volumes/testvol/_data",\n        "Name": "testvol",\n        "Options": {\n            "device": "/data/volumes/testvol",\n            "o": "bind",\n            "type": "none"\n        },\n        "Scope": "local"\n    }\n')),(0,r.kt)("p",null,"In Docker compose yaml,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"services:\n  frontend:\n    image: node:lts\n    volumes:\n      - testvol:/home/node/app\nvolumes:\n  db-data:\n  testvol:\n    driver: local\n    driver_opts:\n      type: none\n      o: bind\n      device: /data/volumes/testvol\n")),(0,r.kt)("h2",{id:"use-nfs-volume"},"Use NFS volume"),(0,r.kt)("h2",{id:"use-samba-volume"},"Use Samba volume"),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/#share-data-between-machines"},"Volumes | Docker Documentation")))}p.isMDXComponent=!0},22167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/types-of-mounts-volume-866cf680c6d400c46bf73612cf43fcd2.png"}}]);