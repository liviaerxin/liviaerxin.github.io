"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7862],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}},42794:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"wiki/wiki-dev-environment","title":"Wiki Development Environment","description":"Wiki Dev Environment","source":"@site/../../docs/wiki/wiki-dev-environment.mdx","sourceDirName":"wiki","slug":"/wiki/wiki-dev-environment","permalink":"/docs/wiki/wiki-dev-environment","draft":false,"unlisted":false,"editUrl":"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/wiki/wiki-dev-environment.mdx","tags":[{"inline":true,"label":"wiki","permalink":"/docs/tags/wiki"},{"inline":true,"label":"dev-environment","permalink":"/docs/tags/dev-environment"}],"version":"current","lastUpdatedBy":"liviaerxin","lastUpdatedAt":1744927023000,"frontMatter":{"authors":["frank"],"tags":["wiki","dev-environment"],"description":"Wiki Dev Environment","keywords":["Wiki Dev Environment"],"image":"https://i.imgur.com/mErPwqL.png","date":"2023-12-04T00:00:00.000Z","draft":false,"enableComments":true},"sidebar":"docs","previous":{"title":"Cyber Security Wiki","permalink":"/docs/wiki/wiki-cybersecurity"},"next":{"title":"Diagram Wiki","permalink":"/docs/wiki/wiki-diagram"}}');var r=i(74848),o=i(28453);const s={authors:["frank"],tags:["wiki","dev-environment"],description:"Wiki Dev Environment",keywords:["Wiki Dev Environment"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-12-04T00:00:00.000Z"),draft:!1,enableComments:!0},c="Wiki Development Environment",a={},d=[{value:"VS Code",id:"vs-code",level:2},{value:"Dev Container",id:"dev-container",level:3},{value:"C/C++",id:"cc",level:3},{value:"Resources",id:"resources",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"wiki-development-environment",children:"Wiki Development Environment"})}),"\n",(0,r.jsx)(n.p,{children:"Here are some experiences that I have gotten to prepare a best-practice development environment for projects. I would like to update to keep up with the latest tech stacks."}),"\n",(0,r.jsx)(n.h2,{id:"vs-code",children:"VS Code"}),"\n",(0,r.jsxs)(n.p,{children:["As of now, the ",(0,r.jsx)(n.code,{children:"VS Code"})," is the most popular IDE among developers. Absolutely, for me, it's my first choice and favorite developing tool."]}),"\n",(0,r.jsx)(n.h3,{id:"dev-container",children:"Dev Container"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/docs/devcontainers/containers",children:"Developing inside a Container using Visual Studio Code Remote Development"})}),"\n",(0,r.jsx)(n.p,{children:"What is Dev Container?"}),"\n",(0,r.jsx)(n.p,{children:'A "Dev Container" typically refers to a development environment that is containerized. Containers are lightweight, portable, and consistent environments that encapsulate an application and its dependencies. They provide a standardized way to package and run software across different environments, ensuring that the application behaves consistently regardless of where it is deployed.'}),"\n",(0,r.jsx)(n.p,{children:"The benefits of using Dev Containers include:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Consistency: Developers work in the same environment, reducing the chances of environment-related issues."}),"\n",(0,r.jsx)(n.li,{children:"Isolation: Dev Containers are isolated from the host system, preventing conflicts with other software installed on the developer's machine."}),"\n",(0,r.jsx)(n.li,{children:"Reproducibility: The development environment can be easily recreated by anyone using the container specifications."}),"\n",(0,r.jsx)(n.li,{children:"Portability: Dev Containers can be easily shared, allowing developers to work on the same project with minimal setup."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Best ways to customize the environment in Dev containers?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://containers.dev/guide/dockerfile",children:"Using Images, Dockerfile, and Docker Compose"}),":love_you_gesture:"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://containers.dev/features",children:"Using Features"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://containers.dev/implementors/json_reference/#lifecycle-scripts",children:"Using lifecycle scripts"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"How to Write Dockerfile for Dev containers?"}),"\n",(0,r.jsxs)(n.p,{children:["You can refer to this repo ",(0,r.jsx)(n.a,{href:"https://github.com/devcontainers/images",children:"GitHub - devcontainers/images: Repository for pre-built dev container images published under mcr.microsoft.com/devcontainers"})]}),"\n",(0,r.jsxs)(n.p,{children:["What magics does the ",(0,r.jsx)(n.code,{children:"Dev Containers"})," extension do when starting?"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Hook a default startup command ",(0,r.jsx)(n.code,{children:"while sleep 1000; do :; done"})," to keep the container not exit. Disable this behavior by setting ",(0,r.jsx)(n.code,{children:"overrideCommand: false"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"How to run a container inside of Dev containers?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/vscode-dev-containers/tree/main/containers/docker-in-docker",children:"Docker-in-Docker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/vscode-dev-containers/tree/main/containers/docker-from-docker",children:"Docker-from-Docker"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For instance, I use the ",(0,r.jsx)(n.strong,{children:"Docker-in-Docker"})," method to always test/run Docker containers inside of Dev containers."]}),"\n",(0,r.jsx)(n.h3,{id:"cc",children:"C/C++"}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);