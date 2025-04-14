"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6822],{38800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(74848),s=a(28453);const i={authors:["frank"],tags:["cheatsheet","ImageMagick"],description:"Cheatsheet ImageMagick",keywords:["Cheatsheet ImageMagick"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-04-02T00:00:00.000Z"),draft:!1,enableComments:!0},r="Cheatsheet ImageMagick",o={id:"cheatsheet-imagemagick",title:"Cheatsheet ImageMagick",description:"Cheatsheet ImageMagick",source:"@site/../../docs/cheatsheet-imagemagick.mdx",sourceDirName:".",slug:"/cheatsheet-imagemagick",permalink:"/docs/cheatsheet-imagemagick",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/cheatsheet-imagemagick.mdx",tags:[{inline:!0,label:"cheatsheet",permalink:"/docs/tags/cheatsheet"},{inline:!0,label:"ImageMagick",permalink:"/docs/tags/image-magick"}],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:1744599368e3,frontMatter:{authors:["frank"],tags:["cheatsheet","ImageMagick"],description:"Cheatsheet ImageMagick",keywords:["Cheatsheet ImageMagick"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-04-02T00:00:00.000Z",draft:!1,enableComments:!0},sidebar:"docs",previous:{title:"Docker Cheat Sheet",permalink:"/docs/cheatsheet-docker"},next:{title:"Network Cheat Sheet",permalink:"/docs/cheatsheet-network"}},c={},l=[{value:"Convert a PNG file to a JPG file",id:"convert-a-png-file-to-a-jpg-file",level:2},{value:"Convert a PDF to a series of PNG files",id:"convert-a-pdf-to-a-series-of-png-files",level:2},{value:"Convert a PDF to a series of JPG files",id:"convert-a-pdf-to-a-series-of-jpg-files",level:2},{value:"Compress a PDF",id:"compress-a-pdf",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"cheatsheet-imagemagick",children:"Cheatsheet ImageMagick"}),"\n",(0,n.jsx)(t.h2,{id:"convert-a-png-file-to-a-jpg-file",children:"Convert a PNG file to a JPG file"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"convert input.png \\\n    -density 150 \\\n    -define jpeg:extent=500KB \\\n    output.jpg\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"convert input.png \\\n    -density 150 \\\n    -quality 50 \\\n    output.jpg\n"})}),"\n",(0,n.jsx)(t.h2,{id:"convert-a-pdf-to-a-series-of-png-files",children:"Convert a PDF to a series of PNG files"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"convert                  \\\n    <your-PDF-file>.pdf  \\\n   -density 150          \\\n   -trim                 \\\n   -verbose              \\\n    page%d.png\n"})}),"\n",(0,n.jsx)(t.h2,{id:"convert-a-pdf-to-a-series-of-jpg-files",children:"Convert a PDF to a series of JPG files"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"convert                  \\\n   -density 150          \\\n   -trim                 \\\n    <your-PDF-file>.pdf  \\\n   -quality 100          \\\n   -flatten              \\\n   -sharpen 0x1.0        \\\n   -verbose              \\\n    page%d.jpg\n"})}),"\n",(0,n.jsx)(t.h2,{id:"compress-a-pdf",children:"Compress a PDF"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"convert -density 120 -quality 100 -compress jpeg original.pdf output.pdf\n"})}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);