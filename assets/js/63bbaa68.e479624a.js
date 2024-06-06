"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6914],{52370:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=i(74848),o=i(28453);const s={authors:["frank"],tags:["Wiki","Compiler"],description:"Introduction for writing a Compiler in practice",keywords:["Writing Compiler"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-02-19T00:00:00.000Z"),draft:!1,enableComments:!0},t="Wiki Compiler",l={id:"wiki-compiler",title:"Wiki Compiler",description:"Introduction for writing a Compiler in practice",source:"@site/../../docs/wiki-compiler.mdx",sourceDirName:".",slug:"/wiki-compiler",permalink:"/docs/wiki-compiler",draft:!1,unlisted:!1,editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../docs/wiki-compiler.mdx",tags:[{inline:!0,label:"Wiki",permalink:"/docs/tags/wiki"},{inline:!0,label:"Compiler",permalink:"/docs/tags/compiler"}],version:"current",lastUpdatedBy:"frank chen",lastUpdatedAt:1717664504e3,frontMatter:{authors:["frank"],tags:["Wiki","Compiler"],description:"Introduction for writing a Compiler in practice",keywords:["Writing Compiler"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-02-19T00:00:00.000Z",draft:!1,enableComments:!0},sidebar:"docs",previous:{title:"Learn CMake",permalink:"/docs/wiki-cmake"},next:{title:"Wiki Coral",permalink:"/docs/wiki-coral"}},c={},a=[{value:"Parser",id:"parser",level:2},{value:"Difference between Compiler and Interpreter",id:"difference-between-compiler-and-interpreter",level:2},{value:"Bootstrap a compiler",id:"bootstrap-a-compiler",level:2},{value:"Where did the existing compiler <code>C1</code> come from?",id:"where-did-the-existing-compiler-c1-come-from",level:3},{value:"Implementations",id:"implementations",level:3},{value:"Compiler for a subset of C language bootstrapping from Python",id:"compiler-for-a-subset-of-c-language-bootstrapping-from-python",level:3},{value:"Compiler for a subset of C language bootstrapping from C",id:"compiler-for-a-subset-of-c-language-bootstrapping-from-c",level:3},{value:"Compiler bootstrapping from assembly",id:"compiler-bootstrapping-from-assembly",level:3},{value:"Compiler bootstrapping from HEX",id:"compiler-bootstrapping-from-hex",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"wiki-compiler",children:"Wiki Compiler"}),"\n",(0,r.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Let's have a look at the functions that a compiler should be able to build."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["lexer(Lexical analysis)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"generate tokens from source code"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["parser","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"construct abstract syntax tree(AST) from tokens"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["code generation","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"generate low-level code, such as assembly code or machine code"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"parser",children:"Parser"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"BNF"})," syntax is used to for computer to understand the expression, and is a critical concept to be followed to sequently parse the tokens to AST tree. Certainly, only one loop on the tokens is enough, which makes it very efficient."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"BNF"})," syntax for arithmetic operations grammar, including ",(0,r.jsx)(n.code,{children:"+"}),", ",(0,r.jsx)(n.code,{children:"-"}),", ",(0,r.jsx)(n.code,{children:"*"}),", ",(0,r.jsx)(n.code,{children:"\\"}),", and ",(0,r.jsx)(n.code,{children:"u-"}),"(unary ",(0,r.jsx)(n.code,{children:"-"}),") ."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"expression  :   term\n            |   expression `+` expression\n            |   expression `-` expression\n\nterm        :   factor\n            |   term `*` term\n            |   term `/` term\n\nfactor      :   NUMBER\n            |   `(` expression `)`\n            |   `u-`factor\n            |   `u+`factor\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"BNF"})," syntax for arithmetic operations and variable assignment."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"expression  :   term\n            |   expression `+` expression\n            |   expression `-` expression\n\nterm        :   factor\n            |   term `*` term\n            |   term `/` term\n            |   term `%` term\n\nfactor      :   NUMBER\n            |   ID\n            |   `(` expression `)`\n            |   `u-`factor\n            |   `u+`factor\n            |   assignment\n\nassignment  :   ID `=` expression\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In addition, ",(0,r.jsx)(n.code,{children:"BNF"})," can also be applied to define regular expressions:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'expression      :   term\n                |   term `|` term\n\nterm            :   factor\n                |   term term\n\nfactor          :   atom\n                |   atom `*`\n\natom            :   CHAR\n                | `(` expression `)`\n\nCHAR            : any valid character except meta characters (e.g., "*", "|", "(")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"difference-between-compiler-and-interpreter",children:"Difference between Compiler and Interpreter"}),"\n",(0,r.jsxs)(n.p,{children:["an ",(0,r.jsx)(n.strong,{children:"interpreter"})," also does ",(0,r.jsx)(n.code,{children:"lexer"})," and ",(0,r.jsx)(n.code,{children:"parser"})," jobs as a compiler does in step 1 and 2, but instead of generating low-level code, the ",(0,r.jsx)(n.strong,{children:"interpreter"})," generates the results directly."]}),"\n",(0,r.jsx)(n.h2,{id:"bootstrap-a-compiler",children:"Bootstrap a compiler"}),"\n",(0,r.jsxs)(n.p,{children:["A new programming language and a compiler written also in the new language is supposed to develop from an existing language. The progress is called ",(0,r.jsx)(n.strong,{children:"bootstrapping"}),", which can be summarized as,"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"C1  + L1  -> C20\nC20 + L2u -> C21\nC21 + L2  -> C22\nC22 + L2  -> C23\nC23 + L2  -> C24\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"L1"})," : an existing language\n",(0,r.jsx)(n.code,{children:"C1"})," : an existing compiler for language ",(0,r.jsx)(n.code,{children:"L1"}),"\n",(0,r.jsx)(n.code,{children:"C20"}),": a compiler written in language ",(0,r.jsx)(n.code,{children:"L1"})," for language ",(0,r.jsx)(n.code,{children:"L2u"}),"\n",(0,r.jsx)(n.code,{children:"C21"}),": a compiler written in language ",(0,r.jsx)(n.code,{children:"L2u"})," for language ",(0,r.jsx)(n.code,{children:"L2"}),"\n",(0,r.jsx)(n.code,{children:"L2u"}),": is subset of language ",(0,r.jsx)(n.code,{children:"L2"})]}),"\n",(0,r.jsx)(n.p,{children:"Bootstrapping stage:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Write a bootstrap compiler ",(0,r.jsx)(n.code,{children:"C20"})," to understand language ",(0,r.jsx)(n.code,{children:"L2u"}),"(a subset of language ",(0,r.jsx)(n.code,{children:"L2"}),") in using existed language ",(0,r.jsx)(n.code,{children:"L1"})," and its corresponding compiler ",(0,r.jsx)(n.code,{children:"C1"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Use the compiler ",(0,r.jsx)(n.code,{children:"C20"})," and language ",(0,r.jsx)(n.code,{children:"L2u"})," to write the compiler ",(0,r.jsx)(n.code,{children:"C21"})," to understand language ",(0,r.jsx)(n.code,{children:"L2"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Now ",(0,r.jsx)(n.code,{children:"C21"})," is a fully self-hosted compiler, as well as its descendants ",(0,r.jsx)(n.code,{children:"C22"}),", ",(0,r.jsx)(n.code,{children:"C23"}),", and ",(0,r.jsx)(n.code,{children:"C24"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"where-did-the-existing-compiler-c1-come-from",children:["Where did the existing compiler ",(0,r.jsx)(n.code,{children:"C1"})," come from?"]}),"\n",(0,r.jsxs)(n.p,{children:["There is no need to use a compiler ",(0,r.jsx)(n.code,{children:"C1"})," + ",(0,r.jsx)(n.code,{children:"L1"})," if you write the bootstrap compiler ",(0,r.jsx)(n.code,{children:"C20"})," in machine code. This solves the chicken-and-egg problem totally for programming languages."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Bootstrapping initial compiler ",(0,r.jsx)(n.code,{children:"C20"}),":","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["A small and simple compiler is created manually in machine code or written in ",(0,r.jsx)(n.code,{children:"assembly"})," language."]}),"\n",(0,r.jsxs)(n.li,{children:["[Option*] Translate the ",(0,r.jsx)(n.code,{children:"assembly"})," language into machine code manually if it's not written in machine code."]}),"\n",(0,r.jsxs)(n.li,{children:["The initial compiler is just capable enough to understand a subset of the target language ",(0,r.jsx)(n.code,{children:"C"})," it is supposed to compile."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Use the initial compiler ",(0,r.jsx)(n.code,{children:"C20"})," to compile the compiler ",(0,r.jsx)(n.code,{children:"C21"})," written in language ",(0,r.jsx)(n.code,{children:"C"})," while the ",(0,r.jsx)(n.code,{children:"C21"})," is also supposed to compile language ",(0,r.jsx)(n.code,{children:"C"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Now compiler ",(0,r.jsx)(n.code,{children:"C21"})," a fully self-compilation."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://scienceblogs.com/goodmath/2007/04/15/strange-loops-dennis-ritchie-a",children:"Strange Loops: Ken Thompson and the Self-referencing C Compiler | ScienceBlogs"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Bootstrapping_%28compilers%29",children:"Bootstrapping (compilers) - Wikipedia"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools",children:"Compilers: Principles, Techniques, and Tools - Wikipedia"})}),"\n",(0,r.jsx)(n.h3,{id:"implementations",children:"Implementations"}),"\n",(0,r.jsx)(n.p,{children:"Interpreter:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/rswier/c4",children:"GitHub - rswier/c4: C in four functions"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lotabout/write-a-C-interpreter",children:"GitHub - lotabout/write-a-C-interpreter: Write a simple interpreter of C. Inspired by c4 and largely based on it."})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Self-hosted Compiler:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/DoctorWkt/acwj",children:"GitHub - DoctorWkt/acwj: A Compiler Writing Journey"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/certik/bcompile",children:"GitHub - certik/bcompile: Bootstrapping a simple compiler from nothing"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The basic knowledge of ",(0,r.jsx)(n.code,{children:"lexer"})," and ",(0,r.jsx)(n.code,{children:"parser"})," is critical and necessary for developing a programming language,"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"flex/lex"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"yacc/parser"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"compiler-for-a-subset-of-c-language-bootstrapping-from-python",children:"Compiler for a subset of C language bootstrapping from Python"}),"\n",(0,r.jsxs)(n.p,{children:["Recently, I am becoming interested in building a ",(0,r.jsx)(n.code,{children:"lexer"}),", ",(0,r.jsx)(n.code,{children:"parser"})," and ",(0,r.jsx)(n.code,{children:"code generator"})," to try to create a mini language and deep insight of how ",(0,r.jsx)(n.code,{children:"GCC"})," or ",(0,r.jsx)(n.code,{children:"Clang/LLVM"})," do their jobs."]}),"\n",(0,r.jsx)(n.p,{children:"For educational purposes, learning in practice is my favorite approach to grasp an overview."}),"\n",(0,r.jsx)(n.p,{children:"Let's do it!"}),"\n",(0,r.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Python for writing the bootstrap compiler"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["I use ",(0,r.jsx)(n.a,{href:"https://ply.readthedocs.io/_/downloads/en/latest/pdf/",children:"ply"}),", a pure Python implementation of the ",(0,r.jsx)(n.code,{children:"lex"})," and ",(0,r.jsx)(n.code,{children:"yacc"})," tools to facilitate me to write the bootstrap compiler for the subset of C language."]}),"\n",(0,r.jsx)(n.h3,{id:"compiler-for-a-subset-of-c-language-bootstrapping-from-c",children:"Compiler for a subset of C language bootstrapping from C"}),"\n",(0,r.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["An existing ",(0,r.jsx)(n.code,{children:"GCC"})," for writing the bootstrap compiler"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here are some popular tutorials from ",(0,r.jsx)(n.a,{href:"https://github.com/DoctorWkt/acwj",children:"GitHub - DoctorWkt/acwj: A Compiler Writing Journey"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also refer ",(0,r.jsx)(n.a,{href:"https://github.com/lotabout/write-a-C-interpreter",children:"GitHub - lotabout/write-a-C-interpreter"})," although I prefer classifying it as ",(0,r.jsx)(n.strong,{children:"interpreter"})," not a complete compiler."]}),"\n",(0,r.jsx)(n.h3,{id:"compiler-bootstrapping-from-assembly",children:"Compiler bootstrapping from assembly"}),"\n",(0,r.jsx)(n.h3,{id:"compiler-bootstrapping-from-hex",children:"Compiler bootstrapping from HEX"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/certik/bcompile",children:"GitHub - certik/bcompile: Bootstrapping a simple compiler from nothing"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(96540);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);