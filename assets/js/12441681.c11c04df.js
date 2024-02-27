"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),g=r,d=c["".concat(p,".").concat(g)]||c[g]||u[g]||a;return n?i.createElement(d,o(o({ref:t},s),{},{components:n})):i.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(87462),r=(n(67294),n(3905));const a={authors:["frank"],tags:["Wiki","Compiler"],description:"Introduction for writing a Compiler in practice",keywords:["Writing Compiler"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-02-19T00:00:00.000Z"),draft:!1,enableComments:!0},o="Wiki Compiler",l={permalink:"/blog/wiki-compiler",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-compiler.mdx",source:"@site/../../blog/wiki-compiler.mdx",title:"Wiki Compiler",description:"Introduction for writing a Compiler in practice",date:"2024-02-19T00:00:00.000Z",formattedDate:"February 19, 2024",tags:[{label:"Wiki",permalink:"/blog/tags/wiki"},{label:"Compiler",permalink:"/blog/tags/compiler"}],readingTime:3.13,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["Wiki","Compiler"],description:"Introduction for writing a Compiler in practice",keywords:["Writing Compiler"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-02-19T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Algorithms",permalink:"/blog/algorithms"},nextItem:{title:"Wiki Socket",permalink:"/blog/wiki-socket"}},p={authorsImageUrls:[void 0]},m=[{value:"Interpreter vs compiler",id:"interpreter-vs-compiler",level:2},{value:"Bootstrap a compiler for new language",id:"bootstrap-a-compiler-for-new-language",level:2},{value:"Where did the existing compiler <code>C1</code> come from?",id:"where-did-the-existing-compiler-c1-come-from",level:3},{value:"Implementations",id:"implementations",level:3},{value:"Compiler for a subset of C language bootstrapping from Python",id:"compiler-for-a-subset-of-c-language-bootstrapping-from-python",level:3},{value:"Compiler for a subset of C language bootstrapping from C",id:"compiler-for-a-subset-of-c-language-bootstrapping-from-c",level:3},{value:"Compiler bootstrapping from assembly",id:"compiler-bootstrapping-from-assembly",level:3},{value:"Compiler bootstrapping from HEX",id:"compiler-bootstrapping-from-hex",level:3}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Let's have a look at the functions that a compiler should be able to build."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"lexer(Lexical analysis)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"generate tokens from source code"))),(0,r.kt)("li",{parentName:"ol"},"parser",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"construct abstract syntax tree(AST) from tokens"))),(0,r.kt)("li",{parentName:"ol"},"code generation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"generate low-level code, such as assembly code or machine code")))),(0,r.kt)("h2",{id:"interpreter-vs-compiler"},"Interpreter vs compiler"),(0,r.kt)("p",null,"an ",(0,r.kt)("strong",{parentName:"p"},"interpreter")," also does ",(0,r.kt)("inlineCode",{parentName:"p"},"lexer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"parser")," jobs as a compiler does in step 1 and 2, but instead of generating low-level code, the ",(0,r.kt)("strong",{parentName:"p"},"interpreter")," generates the results."),(0,r.kt)("h2",{id:"bootstrap-a-compiler-for-new-language"},"Bootstrap a compiler for new language"),(0,r.kt)("p",null,"New programming language and its corresponding compiler is mainly developed from an existing language. The progress is called ",(0,r.kt)("strong",{parentName:"p"},"bootstrapping"),", which can be summarized as,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"C1  + L1  -> C20\nC20 + L2u -> C21\nC21 + L2  -> C22\nC22 + L2  -> C23\nC23 + L2  -> C24\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"L1")," : an existing language\n",(0,r.kt)("inlineCode",{parentName:"p"},"C1")," : an existing compiler for language ",(0,r.kt)("inlineCode",{parentName:"p"},"L1"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"C20"),": a compiler written in language ",(0,r.kt)("inlineCode",{parentName:"p"},"L1")," for language ",(0,r.kt)("inlineCode",{parentName:"p"},"L2u"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"C21"),": a compiler written in language ",(0,r.kt)("inlineCode",{parentName:"p"},"L2u")," for language ",(0,r.kt)("inlineCode",{parentName:"p"},"L2"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"L2u"),": is subset of language ",(0,r.kt)("inlineCode",{parentName:"p"},"L2")),(0,r.kt)("p",null,"Bootstrapping stage:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Write a bootstrap compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C20")," to understand language ",(0,r.kt)("inlineCode",{parentName:"li"},"L2u"),"(a subset of language ",(0,r.kt)("inlineCode",{parentName:"li"},"L2"),") in using existed language ",(0,r.kt)("inlineCode",{parentName:"li"},"L1")," and its corresponding compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C1"),"."),(0,r.kt)("li",{parentName:"ol"},"Use the compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C20")," and language ",(0,r.kt)("inlineCode",{parentName:"li"},"L2u")," to write the compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C21")," to understand language ",(0,r.kt)("inlineCode",{parentName:"li"},"L2"),"."),(0,r.kt)("li",{parentName:"ol"},"Now ",(0,r.kt)("inlineCode",{parentName:"li"},"C21")," is a fully self-hosted compiler, as well as its descendants ",(0,r.kt)("inlineCode",{parentName:"li"},"C22"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"C23"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"C24"),".")),(0,r.kt)("h3",{id:"where-did-the-existing-compiler-c1-come-from"},"Where did the existing compiler ",(0,r.kt)("inlineCode",{parentName:"h3"},"C1")," come from?"),(0,r.kt)("p",null,"There is no need to use a compiler ",(0,r.kt)("inlineCode",{parentName:"p"},"C1")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"L1")," if you write the bootstrap compiler ",(0,r.kt)("inlineCode",{parentName:"p"},"C20")," in machine code. This solves the chicken-and-egg problem totally for programming languages."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bootstrapping initial compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C20"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"A small and simple compiler is created manually in machine code or written in ",(0,r.kt)("inlineCode",{parentName:"li"},"assembly")," language."),(0,r.kt)("li",{parentName:"ol"},"[Option*]"," Translate the ",(0,r.kt)("inlineCode",{parentName:"li"},"assembly")," language into machine code manually if it's not written in machine code."),(0,r.kt)("li",{parentName:"ol"},"The initial compiler is just capable enough to understand a subset of the target language ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," it is supposed to compile."))),(0,r.kt)("li",{parentName:"ol"},"Use the initial compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C20")," to compile the compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C21")," written in language ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," while the ",(0,r.kt)("inlineCode",{parentName:"li"},"C21")," is also supposed to compile language ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),"."),(0,r.kt)("li",{parentName:"ol"},"Now compiler ",(0,r.kt)("inlineCode",{parentName:"li"},"C21")," a fully self-compilation.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://scienceblogs.com/goodmath/2007/04/15/strange-loops-dennis-ritchie-a"},"Strange Loops: Ken Thompson and the Self-referencing C Compiler | ScienceBlogs")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bootstrapping_%28compilers%29"},"Bootstrapping (compilers) - Wikipedia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools"},"Compilers: Principles, Techniques, and Tools - Wikipedia")),(0,r.kt)("h3",{id:"implementations"},"Implementations"),(0,r.kt)("p",null,"Interpreter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rswier/c4"},"GitHub - rswier/c4: C in four functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lotabout/write-a-C-interpreter"},"GitHub - lotabout/write-a-C-interpreter: Write a simple interpreter of C. Inspired by c4 and largely based on it."))),(0,r.kt)("p",null,"Self-hosted Compiler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/DoctorWkt/acwj"},"GitHub - DoctorWkt/acwj: A Compiler Writing Journey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/certik/bcompile"},"GitHub - certik/bcompile: Bootstrapping a simple compiler from nothing"))),(0,r.kt)("p",null,"The basic knowledge of ",(0,r.kt)("inlineCode",{parentName:"p"},"lexer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"parser")," is critical and necessary for developing a programming language, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flex/lex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yacc/parser"))),(0,r.kt)("h3",{id:"compiler-for-a-subset-of-c-language-bootstrapping-from-python"},"Compiler for a subset of C language bootstrapping from Python"),(0,r.kt)("p",null,"Recently, I am becoming interested in building a ",(0,r.kt)("inlineCode",{parentName:"p"},"lexer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parser")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code generator")," to try to create a mini language and deep insight of how ",(0,r.kt)("inlineCode",{parentName:"p"},"GCC")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Clang/LLVM")," do their jobs."),(0,r.kt)("p",null,"For educational purposes, learning in practice is my favorite approach to grasp an overview."),(0,r.kt)("p",null,"Let's do it!"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python for writing the bootstrap compiler ")),(0,r.kt)("p",null,"I use ",(0,r.kt)("a",{parentName:"p",href:"https://ply.readthedocs.io/_/downloads/en/latest/pdf/"},"ply"),", a pure Python implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"lex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yacc")," tools to facilitate me to write the bootstrap compiler for the subset of C language."),(0,r.kt)("h3",{id:"compiler-for-a-subset-of-c-language-bootstrapping-from-c"},"Compiler for a subset of C language bootstrapping from C"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An existing ",(0,r.kt)("inlineCode",{parentName:"li"},"GCC")," for writing the bootstrap compiler")),(0,r.kt)("p",null,"Here are some popular tutorials from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DoctorWkt/acwj"},"GitHub - DoctorWkt/acwj: A Compiler Writing Journey"),"."),(0,r.kt)("p",null,"You can also refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lotabout/write-a-C-interpreter"},"GitHub - lotabout/write-a-C-interpreter")," although I prefer classifying it as ",(0,r.kt)("strong",{parentName:"p"},"interpreter")," not a complete compiler."),(0,r.kt)("h3",{id:"compiler-bootstrapping-from-assembly"},"Compiler bootstrapping from assembly"),(0,r.kt)("h3",{id:"compiler-bootstrapping-from-hex"},"Compiler bootstrapping from HEX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/certik/bcompile"},"GitHub - certik/bcompile: Bootstrapping a simple compiler from nothing")))}u.isMDXComponent=!0}}]);