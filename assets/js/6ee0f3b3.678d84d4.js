"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6227],{76345:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(74848),r=n(28453);const i={sidebar_label:"building chatgpt style conversation",description:"building chatgpt style conversation messages tree on recursive",keywords:["system-design","data-structure"],image:"https://i.imgur.com/mErPwqL.png",tags:["system-design","database"],last_update:{date:new Date("2025-04-16T00:00:00.000Z"),author:"frank"}},a="Building ChatGPT-Style Conversations: Message Structure and Recursive Retrieval in PostgreSQL",o={id:"system-design/building-chatgpt-style-conversation",title:"Building ChatGPT-Style Conversations: Message Structure and Recursive Retrieval in PostgreSQL",description:"building chatgpt style conversation messages tree on recursive",source:"@site/../../docs/system-design/building-chatgpt-style-conversation.mdx",sourceDirName:"system-design",slug:"/system-design/building-chatgpt-style-conversation",permalink:"/docs/system-design/building-chatgpt-style-conversation",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/system-design/building-chatgpt-style-conversation.mdx",tags:[{inline:!0,label:"system-design",permalink:"/docs/tags/system-design"},{inline:!0,label:"database",permalink:"/docs/tags/database"}],version:"current",lastUpdatedBy:"frank",lastUpdatedAt:17447616e5,frontMatter:{sidebar_label:"building chatgpt style conversation",description:"building chatgpt style conversation messages tree on recursive",keywords:["system-design","data-structure"],image:"https://i.imgur.com/mErPwqL.png",tags:["system-design","database"],last_update:{date:"2025-04-16T00:00:00.000Z",author:"frank"}},sidebar:"docs",previous:{title:"Serialization",permalink:"/docs/serialization"},next:{title:"WiFi AutoSwitch Windows",permalink:"/docs/wifi-autoswitch-windows"}},l={},c=[{value:"The Problem: Conversations Aren&#39;t Flat",id:"the-problem-conversations-arent-flat",level:2},{value:"The Solution: Message Trees",id:"the-solution-message-trees",level:2},{value:"Designing the Table in PostgreSQL",id:"designing-the-table-in-postgresql",level:2},{value:"Reconstructing the Message Path with a Recursive Query",id:"reconstructing-the-message-path-with-a-recursive-query",level:2},{value:"Handling Branches and Regenerations",id:"handling-branches-and-regenerations",level:2},{value:"Why Not Store Child References?",id:"why-not-store-child-references",level:2},{value:"Performance Tips",id:"performance-tips",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"building-chatgpt-style-conversations-message-structure-and-recursive-retrieval-in-postgresql",children:"Building ChatGPT-Style Conversations: Message Structure and Recursive Retrieval in PostgreSQL"}),"\n",(0,t.jsx)(s.p,{children:"Ever wondered how ChatGPT handles branching conversations, regenerations, and maintaining context seamlessly? Behind the sleek UI is a well-designed data structure rooted in a classic computer science concept: the message tree. In this post, we'll explore how to design and implement a ChatGPT-style conversation system, with a focus on storing and retrieving messages in PostgreSQL using recursive queries."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"the-problem-conversations-arent-flat",children:"The Problem: Conversations Aren't Flat"}),"\n",(0,t.jsx)(s.p,{children:"In a normal messaging app, conversations are usually linear. But in an AI chat interface like ChatGPT, users can:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Regenerate a previous response"}),"\n",(0,t.jsx)(s.li,{children:"Fork a new conversation from any earlier message"}),"\n",(0,t.jsx)(s.li,{children:"Traverse back and forth in a conversation tree"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["This means the data structure must support ",(0,t.jsx)(s.strong,{children:"branching"}),", not just a flat message list."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"the-solution-message-trees",children:"The Solution: Message Trees"}),"\n",(0,t.jsxs)(s.p,{children:["Instead of storing messages in a simple list, we structure them as a ",(0,t.jsx)(s.strong,{children:"tree"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Every message has a unique ",(0,t.jsx)(s.code,{children:"id"})]}),"\n",(0,t.jsxs)(s.li,{children:["Each message (except the root) has a ",(0,t.jsx)(s.code,{children:"parent_id"})]}),"\n",(0,t.jsxs)(s.li,{children:["A conversation is a path from the ",(0,t.jsx)(s.strong,{children:"root message to a leaf message"})]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"root_msg\n  \u2514\u2500\u2500 msg_1\n        \u2514\u2500\u2500 msg_2a\n              \u2514\u2500\u2500 msg_3\n        \u2514\u2500\u2500 msg_2b  <- regenerated fork\n"})}),"\n",(0,t.jsx)(s.p,{children:"To get the path for msg3:\n\u2022\tmsg3 \u2192 msg_2a \u2192 msg1 \u2192 root_msg"}),"\n",(0,t.jsx)(s.p,{children:"This allows us to support regenerations and alternate responses while preserving context."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"designing-the-table-in-postgresql",children:"Designing the Table in PostgreSQL"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE messages (\n    id UUID PRIMARY KEY,\n    parent_id UUID REFERENCES messages(id),\n    role TEXT CHECK (role IN ('user', 'assistant')),\n    content TEXT,\n    created_at TIMESTAMP DEFAULT now()\n);\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Each message is either from the ",(0,t.jsx)(s.code,{children:"user"})," or the ",(0,t.jsx)(s.code,{children:"assistant"}),", and optionally links to its parent message."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"reconstructing-the-message-path-with-a-recursive-query",children:"Reconstructing the Message Path with a Recursive Query"}),"\n",(0,t.jsxs)(s.p,{children:["To feed the correct context to the model, we need to reconstruct the full path from the ",(0,t.jsx)(s.strong,{children:"root to a given message"}),". PostgreSQL makes this easy with a recursive CTE:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"WITH RECURSIVE path AS (\n    SELECT id, parent_id, role, content, created_at\n    FROM messages\n    WHERE id = 'leaf_message_id' -- starting point\n\n    UNION ALL\n\n    SELECT m.id, m.parent_id, m.role, m.content, m.created_at\n    FROM messages m\n    INNER JOIN path p ON m.id = p.parent_id\n)\nSELECT * FROM path ORDER BY created_at;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This walks ",(0,t.jsx)(s.strong,{children:"up"})," the tree from the leaf to the root, and we then ",(0,t.jsx)(s.strong,{children:"sort by timestamp"})," to restore the original message order."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"handling-branches-and-regenerations",children:"Handling Branches and Regenerations"}),"\n",(0,t.jsx)(s.p,{children:"Every time a user regenerates or forks a response:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A new message is created with the same ",(0,t.jsx)(s.code,{children:"parent_id"})," as the message being regenerated"]}),"\n",(0,t.jsx)(s.li,{children:"This creates a new branch in the tree"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"To show branches in the UI (like ChatGPT does with \u201cRegenerate\u201d or \u201cContinue from here\u201d), simply:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM messages WHERE parent_id = 'some_message_id';\n"})}),"\n",(0,t.jsx)(s.p,{children:"You\u2019ll get all the children of that message, representing possible next steps or alternate replies."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"why-not-store-child-references",children:"Why Not Store Child References?"}),"\n",(0,t.jsxs)(s.p,{children:["You might wonder if we should store ",(0,t.jsx)(s.code,{children:"child_id"})," or even entire paths for fast lookup. In practice:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsxs)(s.strong,{children:["Storing ",(0,t.jsx)(s.code,{children:"child_id"})," isn't necessary"]}),", as we can always query it and the parent may have ",(0,t.jsx)(s.strong,{children:"more than one child"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Caching full paths (denormalized) is an optimization, not a requirement."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This keeps the data normalized and clean, while PostgreSQL handles recursion efficiently."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"performance-tips",children:"Performance Tips"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Index ",(0,t.jsx)(s.code,{children:"parent_id"})," for fast joins"]}),"\n",(0,t.jsxs)(s.li,{children:["Use ",(0,t.jsx)(s.code,{children:"UUID"})," or short ",(0,t.jsx)(s.code,{children:"BIGINT"})," ids depending on your needs"]}),"\n",(0,t.jsx)(s.li,{children:"Optionally cache reconstructed paths in Redis for real-time rendering"}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(s.p,{children:"Designing a ChatGPT-style conversation system requires more than just storing messages. You need a tree-based structure, recursive retrieval, and efficient querying. PostgreSQL, with its support for recursive CTEs, is a rock-solid choice for managing this elegantly."}),"\n",(0,t.jsx)(s.p,{children:"Whether you\u2019re building a chatbot platform, customer support tool, or AI assistant, these techniques can give you the flexibility to handle complex conversational flows just like ChatGPT."}),"\n",(0,t.jsx)(s.p,{children:"Happy building! \ud83e\udee0"})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(96540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);