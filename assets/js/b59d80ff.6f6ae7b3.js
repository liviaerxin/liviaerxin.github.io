"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-assembly.mdx"},authors:["frank"],tags:["Wiki Assembly"],description:"Wiki Assembly",keywords:["Wiki Assembly"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-11-22T00:00:00.000Z"),draft:!1,enableComments:!0},l="Wiki Assembly",o={permalink:"/blog/wiki-assembly",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/wiki-assembly.mdx",source:"@site/../../blog/wiki-assembly.mdx",title:"Wiki Assembly",description:"Wiki Assembly",date:"2023-11-22T00:00:00.000Z",formattedDate:"November 22, 2023",tags:[{label:"Wiki Assembly",permalink:"/blog/tags/wiki-assembly"}],readingTime:5.64,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/wiki-assembly.mdx"},authors:["frank"],tags:["Wiki Assembly"],description:"Wiki Assembly",keywords:["Wiki Assembly"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-11-22T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki Network",permalink:"/blog/wiki-network"},nextItem:{title:"Celery",permalink:"/blog/python-celery"}},s={authorsImageUrls:[void 0]},p=[{value:"Assembly Instructions Set",id:"assembly-instructions-set",level:2},{value:"Assembly Opcodes",id:"assembly-opcodes",level:2},{value:"Assembly Oprands",id:"assembly-oprands",level:2},{value:"Register Operands",id:"register-operands",level:3},{value:"Memory Operands",id:"memory-operands",level:3},{value:"Immediate Operands",id:"immediate-operands",level:3},{value:"Bootstrap a compiler for new language",id:"bootstrap-a-compiler-for-new-language",level:2},{value:"Where did the existing compiler <code>C1</code> come from?",id:"where-did-the-existing-compiler-c1-come-from",level:3},{value:"Compiler&#39;s job overview",id:"compilers-job-overview",level:3},{value:"Interpreter vs compiler",id:"interpreter-vs-compiler",level:3},{value:"Implementations",id:"implementations",level:3},{value:"Compiler for a subset of C language bootstrapping from Python",id:"compiler-for-a-subset-of-c-language-bootstrapping-from-python",level:3},{value:"Compiler for a subset of C language bootstrapping from C",id:"compiler-for-a-subset-of-c-language-bootstrapping-from-c",level:3},{value:"Compiler bootstrapping from assembly",id:"compiler-bootstrapping-from-assembly",level:3},{value:"Compiler bootstrapping from HEX",id:"compiler-bootstrapping-from-hex",level:3},{value:"Resources",id:"resources",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Why ",(0,i.kt)("inlineCode",{parentName:"p"},"Assembly")," language is important to to learn?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The most low-level language that is closely tied to the hardware such as ",(0,i.kt)("inlineCode",{parentName:"li"},"CPU"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Assembly")," code implements a symbolic (human-readable) representation of the binary machine code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Assembly")," language is written to follow the ",(0,i.kt)("inlineCode",{parentName:"li"},"CPU")," execution logic directly."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Assembly")," language facilities a deeper understanding how ",(0,i.kt)("inlineCode",{parentName:"li"},"CPU")," actually do its job.")),(0,i.kt)("p",null,"Why ",(0,i.kt)("inlineCode",{parentName:"p"},"Assembly")," language is critical elementary foundation to other higher-level language, E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Assembly")," code is the important medium for compiling ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," code to machine code.\nWhen ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," program being compiled to an binary object file, the ",(0,i.kt)("inlineCode",{parentName:"p"},"GCC")," compiler will do following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"C")," code will be compiled into ",(0,i.kt)("inlineCode",{parentName:"li"},"Assembly")," code"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Assembly")," code will be translated into machine code")),(0,i.kt)("p",null,"Is ",(0,i.kt)("inlineCode",{parentName:"p"},"Assembly")," language cross-platform?"),(0,i.kt)("p",null,"No, ",(0,i.kt)("inlineCode",{parentName:"p"},"Assembly")," language is specific in the specific platform. E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"X86")," CPU-architecture has its own ",(0,i.kt)("inlineCode",{parentName:"p"},"Assembly")," instruction sets as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"arm")," CPU."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Assembly")," is CPU-dependent as machine code is CPU-dependent, while ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," language is CPU-independent for cross-platform."),(0,i.kt)("p",null,"Is the first version of ",(0,i.kt)("inlineCode",{parentName:"p"},"GCC")," written in ",(0,i.kt)("inlineCode",{parentName:"p"},"Assembly"),"?"),(0,i.kt)("p",null,"No, ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"BCPL")," language, ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/18125490/how-was-the-first-c-compiler-written"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-asm",metastring:'title="print.asm"',title:'"print.asm"'},'; print.asm\n; nasm -f elf64 print.asm && ld print.o && ./a.out ; echo $?\n; objdump -d a.out\nsection .data\nmessage db, "Welcome,   to, Segmentation, Faults!, "\n\nsection .text\n\nglobal _start\n\n_printMessage:\n    mov rax, 4       ; System call number for sys_write\n    mov rbx, 1       ; File descriptor 1 is stdout\n    mov rcx, message ; Pointer to the message string\n    mov rdx, 32      ; Length of the message\n    int 0x80         ; Call kernel\n\n    ret ; Return from the function\n\n_exit:\n    mov rax, 1 ; System call number for sys_exit\n    mov rbx, 0 ; Exit code 0\n    int 0x80   ; Call kernel\n\n_start:\n    call _printMessage ; Call the print message function\n    mov  rax, 1        ; System call number for sys_exit\n    mov  rbx, 1        ; Exit code 0\n    int  0x80          ; Call kernel\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-asm",metastring:'title="sum.asm"',title:'"sum.asm"'},"; sum.asm\n; nasm -f elf64 sum.asm && ld sum.o && ./a.out ; echo $?\n; objdump -d a.out\nsection .text\nglobal _start\n\n; Function to calculate the sum of two integers\nsum:\n    mov rax, rdi   ; Move the first argument (a) to rax\n    add rax, rsi   ; Add the second argument (b) to rax\n    ret            ; Return with the result in rax\n\n_start:\n    ; Example usage of the sum function\n    mov rdi, 5     ; First argument: a = 5\n    mov rsi, 7     ; Second argument: b = 7\n\n    call sum       ; Call the sum function\n\n    ; The result is now in rax\n    ; It can be used or printed, depending on the context\n    mov rdi, rax   ; Exit code 0\n\n    ; Exit the program\n    mov rax, 60    ; System call number for sys_exit\n    syscall        ; Make the system call\n")),(0,i.kt)("h2",{id:"assembly-instructions-set"},"Assembly Instructions Set"),(0,i.kt)("p",null,"Assembly instructions are human readable representation of the assembly ",(0,i.kt)("inlineCode",{parentName:"p"},"Opcode")," which hex codes."),(0,i.kt)("h2",{id:"assembly-opcodes"},"Assembly Opcodes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://sparksandflames.com/files/x86InstructionChart.html"},"Intel x86 Assembler Instruction Set Opcode Table")),(0,i.kt)("h2",{id:"assembly-oprands"},"Assembly Oprands"),(0,i.kt)("p",null,"Data area"),(0,i.kt)("h3",{id:"register-operands"},"Register Operands"),(0,i.kt)("h3",{id:"memory-operands"},"Memory Operands"),(0,i.kt)("h3",{id:"immediate-operands"},"Immediate Operands"),(0,i.kt)("h2",{id:"bootstrap-a-compiler-for-new-language"},"Bootstrap a compiler for new language"),(0,i.kt)("p",null,"New programming language and its corresponding compiler is mainly developed from an existing language. The progress is called ",(0,i.kt)("strong",{parentName:"p"},"bootstrapping"),", which can be summarized as,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"C1  + L1  -> C20\nC20 + L2u -> C21\nC21 + L2  -> C22\nC22 + L2  -> C23\nC23 + L2  -> C24\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"L1")," : an existing language\n",(0,i.kt)("inlineCode",{parentName:"p"},"C1")," : an existing compiler for language ",(0,i.kt)("inlineCode",{parentName:"p"},"L1"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"C20"),": a compiler written in language ",(0,i.kt)("inlineCode",{parentName:"p"},"L1")," for language ",(0,i.kt)("inlineCode",{parentName:"p"},"L2u"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"C21"),": a compiler written in language ",(0,i.kt)("inlineCode",{parentName:"p"},"L2u")," for language ",(0,i.kt)("inlineCode",{parentName:"p"},"L2"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"L2u"),": is subset of language ",(0,i.kt)("inlineCode",{parentName:"p"},"L2")),(0,i.kt)("p",null,"Bootstrapping stage:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Write a bootstrap compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C20")," to understand language ",(0,i.kt)("inlineCode",{parentName:"li"},"L2u"),"(a subset of language ",(0,i.kt)("inlineCode",{parentName:"li"},"L2"),") in using existed language ",(0,i.kt)("inlineCode",{parentName:"li"},"L1")," and its corresponding compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C1"),"."),(0,i.kt)("li",{parentName:"ol"},"Use the compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C20")," and language ",(0,i.kt)("inlineCode",{parentName:"li"},"L2u")," to write the compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C21")," to understand language ",(0,i.kt)("inlineCode",{parentName:"li"},"L2"),"."),(0,i.kt)("li",{parentName:"ol"},"Now ",(0,i.kt)("inlineCode",{parentName:"li"},"C21")," is a fully self-hosted compiler, as well as its descendants ",(0,i.kt)("inlineCode",{parentName:"li"},"C22"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"C23"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"C24"),".")),(0,i.kt)("h3",{id:"where-did-the-existing-compiler-c1-come-from"},"Where did the existing compiler ",(0,i.kt)("inlineCode",{parentName:"h3"},"C1")," come from?"),(0,i.kt)("p",null,"There is no need to use a compiler ",(0,i.kt)("inlineCode",{parentName:"p"},"C1")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"L1")," if you write the bootstrap compiler ",(0,i.kt)("inlineCode",{parentName:"p"},"C20")," in machine code. This solves the chicken-and-egg problem totally for programming languages."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bootstrapping initial compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C20"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"A small and simple compiler is created manually in machine code or written in ",(0,i.kt)("inlineCode",{parentName:"li"},"assembly")," language."),(0,i.kt)("li",{parentName:"ol"},"[Option*]"," Translate the ",(0,i.kt)("inlineCode",{parentName:"li"},"assembly")," language into machine code manually if it's not written in machine code."),(0,i.kt)("li",{parentName:"ol"},"The initial compiler is just capable enough to understand a subset of the target language ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," it is supposed to compile."))),(0,i.kt)("li",{parentName:"ol"},"Use the initial compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C20")," to compile the compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C21")," written in language ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," while the ",(0,i.kt)("inlineCode",{parentName:"li"},"C21")," is also supposed to compile language ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),"."),(0,i.kt)("li",{parentName:"ol"},"Now compiler ",(0,i.kt)("inlineCode",{parentName:"li"},"C21")," a fully self-compilation.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://scienceblogs.com/goodmath/2007/04/15/strange-loops-dennis-ritchie-a"},"Strange Loops: Ken Thompson and the Self-referencing C Compiler | ScienceBlogs")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bootstrapping_%28compilers%29"},"Bootstrapping (compilers) - Wikipedia")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools"},"Compilers: Principles, Techniques, and Tools - Wikipedia")),(0,i.kt)("h3",{id:"compilers-job-overview"},"Compiler's job overview"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"lexer(Lexical analysis)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"generate tokens from source code"))),(0,i.kt)("li",{parentName:"ol"},"parser",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"construct abstract syntax tree(AST) from tokens"))),(0,i.kt)("li",{parentName:"ol"},"code generation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"generate low-level code, such as assembly code or machine code")))),(0,i.kt)("h3",{id:"interpreter-vs-compiler"},"Interpreter vs compiler"),(0,i.kt)("p",null,"an ",(0,i.kt)("strong",{parentName:"p"},"interpreter")," also does ",(0,i.kt)("inlineCode",{parentName:"p"},"lexer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parser")," jobs as a compiler does in step 1 and 2, but instead of generating low-level code, the ",(0,i.kt)("strong",{parentName:"p"},"interpreter")," generates the results."),(0,i.kt)("h3",{id:"implementations"},"Implementations"),(0,i.kt)("p",null,"Interpreter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rswier/c4"},"GitHub - rswier/c4: C in four functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lotabout/write-a-C-interpreter"},"GitHub - lotabout/write-a-C-interpreter: Write a simple interpreter of C. Inspired by c4 and largely based on it."))),(0,i.kt)("p",null,"Self-hosted Compiler:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DoctorWkt/acwj"},"GitHub - DoctorWkt/acwj: A Compiler Writing Journey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/certik/bcompile"},"GitHub - certik/bcompile: Bootstrapping a simple compiler from nothing"))),(0,i.kt)("p",null,"The basic knowledge of ",(0,i.kt)("inlineCode",{parentName:"p"},"lexer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parser")," is critical and necessary for developing a programming language, "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flex/lex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yacc/parser"))),(0,i.kt)("h3",{id:"compiler-for-a-subset-of-c-language-bootstrapping-from-python"},"Compiler for a subset of C language bootstrapping from Python"),(0,i.kt)("p",null,"Recently, I am becoming interested in building a ",(0,i.kt)("inlineCode",{parentName:"p"},"lexer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parser")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"code generator")," to try to create a mini language and deep insight of how ",(0,i.kt)("inlineCode",{parentName:"p"},"GCC")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Clang/LLVM")," do their jobs."),(0,i.kt)("p",null,"For educational purposes, learning in practice is my favorite approach to grasp an overview."),(0,i.kt)("p",null,"Let's do it!"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python for writing the bootstrap compiler ")),(0,i.kt)("p",null,"I use ",(0,i.kt)("a",{parentName:"p",href:"https://ply.readthedocs.io/_/downloads/en/latest/pdf/"},"ply"),", a pure Python implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"lex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yacc")," tools to facilitate me to write the bootstrap compiler for the subset of C language."),(0,i.kt)("h3",{id:"compiler-for-a-subset-of-c-language-bootstrapping-from-c"},"Compiler for a subset of C language bootstrapping from C"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An existing ",(0,i.kt)("inlineCode",{parentName:"li"},"GCC")," for writing the bootstrap compiler")),(0,i.kt)("p",null,"Here are some popular tutorials from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DoctorWkt/acwj"},"GitHub - DoctorWkt/acwj: A Compiler Writing Journey"),"."),(0,i.kt)("p",null,"You can also refer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lotabout/write-a-C-interpreter"},"GitHub - lotabout/write-a-C-interpreter")," although I prefer classifying it as ",(0,i.kt)("strong",{parentName:"p"},"interpreter")," not a complete compiler."),(0,i.kt)("h3",{id:"compiler-bootstrapping-from-assembly"},"Compiler bootstrapping from assembly"),(0,i.kt)("h3",{id:"compiler-bootstrapping-from-hex"},"Compiler bootstrapping from HEX"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/certik/bcompile"},"GitHub - certik/bcompile: Bootstrapping a simple compiler from nothing")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/mikesmullin/6259449"},"https://gist.github.com/mikesmullin/6259449")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cs.lmu.edu/~ray/notes/nasmtasutorial/"},"https://cs.lmu.edu/~ray/notes/nasmtasutorial/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cs.brown.edu/courses/cs033/docs/guides/x64_cheatsheet.pdf"},"https://cs.brown.edu/courses/cs033/docs/guides/x64_cheatsheet.pdf")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://6.s081.scripts.mit.edu/sp18/x86-64-architecture-guide.html"},"http://6.s081.scripts.mit.edu/sp18/x86-64-architecture-guide.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cs61.seas.harvard.edu/site/2018/Asm1/"},"https://cs61.seas.harvard.edu/site/2018/Asm1/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.stanford.edu/class/cs107/guide/x86-64.html"},"https://web.stanford.edu/class/cs107/guide/x86-64.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cs.virginia.edu/~evans/cs216/guides/x86.html"},"https://www.cs.virginia.edu/~evans/cs216/guides/x86.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cs.uaf.edu/2016/fall/cs301/lecture/09_28_machinecode.html"},"https://www.cs.uaf.edu/2016/fall/cs301/lecture/09_28_machinecode.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://p403n1x87.github.io/getting-started-with-x86-64-assembly-on-linux.html"},"https://p403n1x87.github.io/getting-started-with-x86-64-assembly-on-linux.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://flint.cs.yale.edu/cs421/papers/x86-asm/asm.html"},"https://flint.cs.yale.edu/cs421/papers/x86-asm/asm.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nickdesaulniers.github.io/blog/2014/04/18/lets-write-some-x86-64/"},"https://nickdesaulniers.github.io/blog/2014/04/18/lets-write-some-x86-64/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pacman128.github.io/static/pcasm-book.pdf"},"https://pacman128.github.io/static/pcasm-book.pdf")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redirect.cs.umbc.edu/portal/help/nasm/sample_64.shtml"},"https://redirect.cs.umbc.edu/portal/help/nasm/sample_64.shtml")))}c.isMDXComponent=!0}}]);