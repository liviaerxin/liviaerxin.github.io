"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[616],{99223:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(74848),i=s(28453);const a={},r="Thursday, July 14, 2023",o={permalink:"/blog/2023/07/14/",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../journal/2023-07-14.md",source:"@site/../../journal/2023-07-14.md",title:"Thursday, July 14, 2023",description:"Best practice:",date:"2023-07-14T00:00:00.000Z",tags:[],readingTime:1.27,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Sunday, July 16, 2023",permalink:"/blog/2023/07/16/"},nextItem:{title:"Tuesday, July 4, 2023",permalink:"/blog/2023/07/04/"}},l={authorsImageUrls:[]},c=[];function d(e){const n={a:"a",code:"code",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Best practice:"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Update markdown metadata such as datetime when saving files\n",(0,t.jsx)(n.a,{href:"https://frontmatter.codes/docs",children:"Introduction | Front Matter"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Docusaurus refer code snippets from GitHub repositories\n",(0,t.jsx)(n.a,{href:"https://github.com/saucelabs/docusaurus-theme-github-codeblock",children:"GitHub - saucelabs/docusaurus-theme-github-codeblock: A Docusaurus v2 plugin that supports referencing code examples from public GitHub repositories."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/liviaerxin/liviaerxin.github.io/blob/560ce03e8dbf5d32b197ccf307ca36af25b5dacd/code-snippets/XKeyIn.cpp#L55-L72\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Test-Driven Development mindset involving CI, CD, documentation, iterative deliveries"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Create a local volume to bind a specific local folder, only available in ",(0,t.jsx)(n.code,{children:"Linux"})," below."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker volume create --opt type=none --opt o=bind --opt device=/data/volumes/testvol testvol\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'\u279c  ~ docker inspect testvol\n[\n    {\n        "CreatedAt": "2023-07-13T04:36:16Z",\n        "Driver": "local",\n        "Labels": {},\n        "Mountpoint": "/var/lib/docker/volumes/testvol/_data",\n        "Name": "testvol",\n        "Options": {\n            "device": "/data/volumes/testvol",\n            "o": "bind",\n            "type": "none"\n        },\n        "Scope": "local"\n    }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In default, the created volume will just sit on ",(0,t.jsx)(n.code,{children:"/var/lib/docker/volumes"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker volume create defaultvol\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'\u279c  ~ docker volume inspect defaultvol\n[\n    {\n        "CreatedAt": "2023-07-13T04:51:57Z",\n        "Driver": "local",\n        "Labels": null,\n        "Mountpoint": "/var/lib/docker/volumes/defaultvol/_data",\n        "Name": "defaultvol",\n        "Options": null,\n        "Scope": "local"\n    }\n\n'})}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Proxies Server: ",(0,t.jsx)(n.strong,{children:"Traefik"})," vs ",(0,t.jsx)(n.strong,{children:"NGINIX"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Proxies have become an essential networking component and are frequently used with many popular internet services. Proxy servers facilitate requests and responses between end-users and web servers, providing helpful features that augment routing control, privacy, and security. NGINX and Traefik are the most popular tools currently offering proxy functionality. Both solutions can support traditional server-based deployments and containerized application environments, such as Kubernetes. This article will examine both tools in-depth and cover their pros, cons, and distinguishing features."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.kubecost.com/kubernetes-devops-tools/traefik-vs-nginx/",children:"Traefik vs NGINX: Use Case Comparison"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);