"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),f=o,h=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},l="Python Benchmark",c={permalink:"/blog/python-benchmark",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../blog/python-benchmark.md",source:"@site/../../blog/python-benchmark.md",title:"Python Benchmark",description:"Ok, here is the cost of acquiring and releasing an uncontended lock",date:"2023-05-29T15:04:26.000Z",formattedDate:"May 29, 2023",tags:[],readingTime:1.06,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Python Module",permalink:"/blog/py-module"},nextItem:{title:"Serialization",permalink:"/blog/serialization"}},s={authorsImageUrls:[]},i=[],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ok, here is the cost of acquiring and releasing an uncontended lock\nunder Linux, with Python 3.2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./python -m timeit \\\n  -s "from threading import Lock; l=Lock(); a=l.acquire; r=l.release" \\\n  "a(); r()"\n10000000 loops, best of 3: 0.127 usec per loop\n')),(0,o.kt)("p",null,"And here is the cost of calling a dummy Python function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./python -m timeit -s "def a(): pass" "a(); a()"\n1000000 loops, best of 3: 0.221 usec per loop\n')),(0,o.kt)("p",null,"And here is the cost of calling a trivial C function (which returns the\nFalse singleton):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./python -m timeit -s "a=bool" "a(); a()"\n10000000 loops, best of 3: 0.164 usec per loop\n')),(0,o.kt)("p",null,"Also, note that using the lock as a context manager is actually slower,\nnot faster as you might imagine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./python -m timeit -s "from threading import Lock; l=Lock()" \\\n  "with l: pass"\n1000000 loops, best of 3: 0.242 usec per loop\n')),(0,o.kt)("p",null,"At least under Linux, there doesn't seem to be a lot of room for\nimprovement in lock performance, to say the least."),(0,o.kt)("p",null,"PS: RLock is now as fast as Lock:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./python -m timeit \\\n-s "from threading import RLock; l=RLock(); a=l.acquire; r=l.release" \\\n"a(); r()"\n10000000 loops, best of 3: 0.114 usec per loop\n')))}m.isMDXComponent=!0}}]);