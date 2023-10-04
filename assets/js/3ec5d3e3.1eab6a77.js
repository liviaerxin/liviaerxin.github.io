"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/python-package-management.md"},sidebar_label:"Python Package Management",description:"Python Package Management",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["blog","docusaurus"],last_update:{date:new Date("2023-06-26T00:00:00.000Z"),author:"frank"}},l="Python Package Management",s={permalink:"/blog/python-package-management",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/python-package-management.md",source:"@site/../../blog/python-package-management.md",title:"Python Package Management",description:"Python Package Management",date:"2023-10-04T01:36:13.000Z",formattedDate:"October 4, 2023",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.64,hasTruncateMarker:!0,authors:[],frontMatter:{foam_template:{name:"Docs Docusaurus Template",description:"Creates Docusaurus docs/slip",filepath:"docs/python-package-management.md"},sidebar_label:"Python Package Management",description:"Python Package Management",keywords:["docs","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["blog","docusaurus"],last_update:{date:"2023-06-26T00:00:00.000Z",author:"frank"}},prevItem:{title:"Python Benchmark",permalink:"/blog/python-benchmark"},nextItem:{title:"RPC vs MQ",permalink:"/blog/rpc_vs_mq"}},i={authorsImageUrls:[]},p=[{value:"Todo List",id:"todo-list",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Foam includes note templates!\nThis allows you to easily create notes that have similar structure without having to use copy/paste :)"),(0,r.kt)("p",null,"Templates support the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax"},"VS Code's Snippet Syntax"),", which means you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add variables to the newly created note"),(0,r.kt)("li",{parentName:"ul"},"add tabstop to automatically navigate to the key parts of the note, just like a form\nBelow you can see an example showing a todo list and a timestamp.")),(0,r.kt)("h2",{id:"todo-list"},"Todo List"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First tabstop"),(0,r.kt)("li",{parentName:"ol"},"A second tabstop"),(0,r.kt)("li",{parentName:"ol"},"A third tabstop")),(0,r.kt)("p",null,"Note Created: 2023-06-26"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Try out the above example by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"Foam: Create New Note From Template")," command and selecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"your-first-template")," template. Notice what happens when your new note is created!"),(0,r.kt)("p",null,"To remove this template, simply delete the ",(0,r.kt)("inlineCode",{parentName:"p"},".foam/templates/your-first-template.md")," file."),(0,r.kt)("p",null,"Enjoy!"))}m.isMDXComponent=!0}}]);