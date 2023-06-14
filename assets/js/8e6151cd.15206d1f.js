"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Writing Notes",l={unversionedId:"getting-started/write-notes-in-foam",id:"getting-started/write-notes-in-foam",title:"Writing Notes",description:"Notes are simple text files with some extra flavor, in the shape of Markdown syntax and support for extra properties (see [[note-properties]]).",source:"@site/../../docs/getting-started/write-notes-in-foam.md",sourceDirName:"getting-started",slug:"/getting-started/write-notes-in-foam",permalink:"/docs/getting-started/write-notes-in-foam",draft:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/getting-started/write-notes-in-foam.md",tags:[],version:"current",lastUpdatedBy:"liviaerxin",lastUpdatedAt:1686730828,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sync notes with source control",permalink:"/docs/getting-started/sync-notes-with-soruce-control"},next:{title:"Hello from Docusaurus",permalink:"/docs/doc-with-tags"}},s={},p=[{value:"Foam Syntax",id:"foam-syntax",level:2},{value:"Markdown Syntax",id:"markdown-syntax",level:2},{value:"Heading 2",id:"heading-2",level:2},{value:"Heading 3",id:"heading-3",level:3},{value:"Heading 4",id:"heading-4",level:4},{value:"Heading 5",id:"heading-5",level:5},{value:"Heading 6",id:"heading-6",level:6}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writing-notes"},"Writing Notes"),(0,a.kt)("p",null,"Notes are simple text files with some extra flavor, in the shape of Markdown syntax and support for extra properties (see [","[note-properties]","])."),(0,a.kt)("h2",{id:"foam-syntax"},"Foam Syntax"),(0,a.kt)("p",null,"Foam uses standard Markdown, with a few added twists:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the title of a note (e.g. in the [","[graph-visualization]","]) is given by precedence based on:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"title")," property (see [","[note-properties]","])"),(0,a.kt)("li",{parentName:"ul"},"the first ",(0,a.kt)("inlineCode",{parentName:"li"},"# heading 1")," of the file"),(0,a.kt)("li",{parentName:"ul"},"the file name")))),(0,a.kt)("h2",{id:"markdown-syntax"},"Markdown Syntax"),(0,a.kt)("p",null,"With Markdown, we can style our notes in a simple way, while keeping the document a simple text file (the best way to future-proof your writings!)."),(0,a.kt)("p",null,"You can see the formatted output by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"Markdown: Open Preview to the Side")," command."),(0,a.kt)("p",null,"Here is a high level overview of Markdown, for more information on the Markdown syntax ",(0,a.kt)("a",{parentName:"p",href:"https://commonmark.org/help/"},"see here"),"."),(0,a.kt)("h1",{id:"heading-1"},"Heading 1"),(0,a.kt)("h2",{id:"heading-2"},"Heading 2"),(0,a.kt)("h3",{id:"heading-3"},"Heading 3"),(0,a.kt)("h4",{id:"heading-4"},"Heading 4"),(0,a.kt)("h5",{id:"heading-5"},"Heading 5"),(0,a.kt)("h6",{id:"heading-6"},"Heading 6"),(0,a.kt)("p",null,"This is a ",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com"},"link to google"),"."),(0,a.kt)("p",null,"This is a wikilink (aka internal link) to [","[note-properties]","]."),(0,a.kt)("p",null,"Here is an image:\n",(0,a.kt)("img",{alt:"image",src:n(9505).Z,width:"200",height:"200"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"this is a blockquote\nit can span multiple lines")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"list item"),(0,a.kt)("li",{parentName:"ul"},"list item"),(0,a.kt)("li",{parentName:"ul"},"list item")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"One"),(0,a.kt)("li",{parentName:"ol"},"Two"),(0,a.kt)("li",{parentName:"ol"},"Three")),(0,a.kt)("p",null,"This text is ",(0,a.kt)("strong",{parentName:"p"},"in bold")," and this is ",(0,a.kt)("em",{parentName:"p"},"italic"),"."),(0,a.kt)("p",null,"The following is a horizontal rule"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This is a table:\n| Column 1 | Column 2 |\n| -------- | -------- |\n| R1C1     | R1C2     |\n| R2C1     | R2C2     |"),(0,a.kt)("p",null,"You can ",(0,a.kt)("inlineCode",{parentName:"p"},"inline code")," or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"you can create\ncode blocks\n")))}c.isMDXComponent=!0},9505:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/foam-icon-2ce00e6b5551b1bd7107f5841e0ed4f1.png"}}]);