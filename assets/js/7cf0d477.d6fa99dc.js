"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(a),b=r,g=c["".concat(l,".").concat(b)]||c[b]||p[b]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},76183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-samba.mdx"},authors:["frank"],tags:["wiki","samba"],description:"Wiki Samba",keywords:["Wiki Samba"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-09-15T00:00:00.000Z"),draft:!1,enableComments:!0},o="Samba Wiki",s={permalink:"/blog/wiki-samba",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-samba.mdx",source:"@site/../../blog/wiki-samba.mdx",title:"Samba Wiki",description:"Wiki Samba",date:"2023-09-15T00:00:00.000Z",formattedDate:"September 15, 2023",tags:[{label:"wiki",permalink:"/blog/tags/wiki"},{label:"samba",permalink:"/blog/tags/samba"}],readingTime:.225,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-samba.mdx"},authors:["frank"],tags:["wiki","samba"],description:"Wiki Samba",keywords:["Wiki Samba"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-09-15T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Learn Vcpkg",permalink:"/blog/wiki-vcpkg"},nextItem:{title:"WPF",permalink:"/blog/wiki-wpf"}},l={authorsImageUrls:[void 0]},u=[{value:"Setting up Samba",id:"setting-up-samba",level:2},{value:"Troubleshooting Samba",id:"troubleshooting-samba",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setting-up-samba"},"Setting up Samba"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/ubuntu-samba"},"How to Install Samba in Ubuntu {+Configuring and Connecting}searchtwitterfacebooklinkedinchevron-circle-upyoutube-playinstagram")),(0,r.kt)("h2",{id:"troubleshooting-samba"},"Troubleshooting Samba"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/1391434/troubleshooting-access-denied-on-samba"},"Troubleshooting Access Denied on SAMBA - Ask Ubuntu")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-editorconfig",metastring:'title="/etc/samba.conf"',title:'"/etc/samba.conf"'},"[documents]\npath = /data/documents\nvalid users = @simon\nguest ok = no\nwritable = yes\nbrowsable = yes\n")))}p.isMDXComponent=!0}}]);