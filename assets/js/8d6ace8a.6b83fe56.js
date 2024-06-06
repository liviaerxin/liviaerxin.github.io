"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3585],{51643:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(74848),s=r(28453);const o={authors:["frank"],tags:["Python Celery"],description:"Python Celery",keywords:["Python Celery"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-12-20T00:00:00.000Z"),draft:!1,enableComments:!0},a="Python Celery",i={id:"python-celery-workflow",title:"Python Celery",description:"Python Celery",source:"@site/../../docs/python-celery-workflow.mdx",sourceDirName:".",slug:"/python-celery-workflow",permalink:"/docs/python-celery-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/python-celery-workflow.mdx",tags:[{inline:!0,label:"Python Celery",permalink:"/docs/tags/python-celery"}],version:"current",lastUpdatedBy:"frank chen",lastUpdatedAt:1717664504e3,frontMatter:{authors:["frank"],tags:["Python Celery"],description:"Python Celery",keywords:["Python Celery"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-12-20T00:00:00.000Z",draft:!1,enableComments:!0},sidebar:"docs",previous:{title:"Python C Library",permalink:"/docs/python-c-library"},next:{title:"Celery",permalink:"/docs/python-celery"}},l={},c=[{value:"Construct a workflow",id:"construct-a-workflow",level:2},{value:"Avoid running synchronous subtasks within a task",id:"avoid-running-synchronous-subtasks-within-a-task",level:2},{value:"Asynchronous tasks with a task",id:"asynchronous-tasks-with-a-task",level:2},{value:"Monitor the workflow",id:"monitor-the-workflow",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"python-celery",children:"Python Celery"}),"\n",(0,t.jsxs)(n.p,{children:["What's ",(0,t.jsx)(n.strong,{children:"workflow"})," in Celery?"]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"Celery"}),", ",(0,t.jsx)(n.strong,{children:"workflow"})," is composed of multiple ",(0,t.jsx)(n.strong,{children:"tasks"}),", and a ",(0,t.jsx)(n.strong,{children:"task"})," is deemed to be a universal unit of the ",(0,t.jsx)(n.strong,{children:"workflow"}),", as a function in the program. In ",(0,t.jsx)(n.strong,{children:"Celery"}),", it's recommended to divide a long-running task into multiple short-running tasks. ",(0,t.jsx)(n.strong,{children:"workflow"})," comes out to help ease the orchestrations of the work, such as ",(0,t.jsx)(n.code,{children:"chain()"})," three tasks."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/liviaerxin/fastapi-celery-ml/blob/main/app/examples/celery_workflow.py",children:"A demo workflow"})}),"\n",(0,t.jsx)(n.h2,{id:"construct-a-workflow",children:"Construct a workflow"}),"\n",(0,t.jsx)(n.h2,{id:"avoid-running-synchronous-subtasks-within-a-task",children:"Avoid running synchronous subtasks within a task"}),"\n",(0,t.jsx)(n.h2,{id:"asynchronous-tasks-with-a-task",children:"Asynchronous tasks with a task"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"@app.task(bind=True)\ndef update_page_info(self, url):\n    # fetch_page -> parse_page -> store_page\n    chain = fetch_page.s(url) | parse_page.s() | store_page_info.s(url)\n    # chain()\n    self.replace(chain)\n\n@app.task()\ndef fetch_page(url):\n    return myhttplib.get(url)\n\n@app.task()\ndef parse_page(page):\n    return myparser.parse_document(page)\n\n@app.task(ignore_result=True)\ndef store_page_info(info, url):\n    PageInfo.objects.create(url=url, info=info)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"monitor-the-workflow",children:"Monitor the workflow"}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://blog.det.life/replacing-celery-tasks-inside-a-chain-b1328923fb02",children:"Designing Dynamic Workflows with Celery and Python | by Marin Agli\u0107 | Data Engineer Things"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://dev.to/akarshan/the-curious-case-of-celery-work-flows-39f7",children:"The Curious Case of Celery Work-flows"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://engineering.instawork.com/celery-eta-tasks-demystified-424b836e4e94",children:"Celery ETA Tasks Demystified. At Instawork, we use Celery to queue\u2026 | by Oleg Pesok | Instawork Engineering"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.celeryq.dev/en/stable/userguide/canvas.html",children:"Canvas: Designing Work-flows \u2014 Celery 5.3.6 documentation"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);