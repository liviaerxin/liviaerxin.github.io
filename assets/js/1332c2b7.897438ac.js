"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3691],{393:(a,e,t)=>{t.r(e),t.d(e,{Highlight:()=>H,assets:()=>A,contentTitle:()=>F,default:()=>z,frontMatter:()=>L,metadata:()=>U,toc:()=>V});var n=t(7462),s=t(7294),m=t(3905);function r(a){let{children:e,color:t}=a;return s.createElement("span",{style:{backgroundColor:t,borderRadius:"10px",color:"#000",padding:"0.5rem"}},e)}var p=t(6010),l=t(2466),o=t(6550),i=t(1980),c=t(7392),N=t(12);function k(a){return function(a){return s.Children.map(a,(a=>{if(!a||(0,s.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:s}}=a;return{value:e,label:t,attributes:n,default:s}}))}function h(a){const{values:e,children:t}=a;return(0,s.useMemo)((()=>{const a=e??k(t);return function(a){const e=(0,c.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function u(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function d(a){let{queryString:e=!1,groupId:t}=a;const n=(0,o.k6)(),m=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i._X)(m),(0,s.useCallback)((a=>{if(!m)return;const e=new URLSearchParams(n.location.search);e.set(m,a),n.replace({...n.location,search:e.toString()})}),[m,n])]}function g(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,m=h(a),[r,p]=(0,s.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:m}))),[l,o]=d({queryString:t,groupId:n}),[i,c]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,m]=(0,N.Nk)(t);return[n,(0,s.useCallback)((a=>{t&&m.set(a)}),[t,m])]}({groupId:n}),k=(()=>{const a=l??i;return u({value:a,tabValues:m})?a:null})();(0,s.useLayoutEffect)((()=>{k&&p(k)}),[k]);return{selectedValue:r,selectValue:(0,s.useCallback)((a=>{if(!u({value:a,tabValues:m}))throw new Error(`Can't select invalid tab value=${a}`);p(a),o(a),c(a)}),[o,c,m]),tabValues:m}}var w=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(a){let{className:e,block:t,selectedValue:m,selectValue:r,tabValues:o}=a;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),N=a=>{const e=a.currentTarget,t=i.indexOf(e),n=o[t].value;n!==m&&(c(e),r(n))},k=a=>{let e=null;switch(a.key){case"Enter":N(a);break;case"ArrowRight":{const t=i.indexOf(a.currentTarget)+1;e=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(a.currentTarget)-1;e=i[t]??i[i.length-1];break}}e?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":t},e)},o.map((a=>{let{value:e,label:t,attributes:r}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:m===e?0:-1,"aria-selected":m===e,key:e,ref:a=>i.push(a),onKeyDown:k,onClick:N},r,{className:(0,p.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":m===e})}),t??e)})))}function x(a){let{lazy:e,children:t,selectedValue:n}=a;const m=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=m.find((a=>a.props.value===n));return a?(0,s.cloneElement)(a,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},m.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==n}))))}function f(a){const e=g(a);return s.createElement("div",{className:(0,p.Z)("tabs-container",b.tabList)},s.createElement(y,(0,n.Z)({},a,e)),s.createElement(x,(0,n.Z)({},a,e)))}function v(a){const e=(0,w.Z)();return s.createElement(f,(0,n.Z)({key:String(e)},a))}const T={tabItem:"tabItem_Ymn6"};function M(a){let{children:e,hidden:t,className:n}=a;return s.createElement("div",{role:"tabpanel",className:(0,p.Z)(T.tabItem,n),hidden:t},e)}var R=t(614);const I="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, { useState } from 'react';\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? 'true' : 'false'}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}",S={toc:[]},C="wrapper";function E(a){let{components:e,...t}=a;return(0,m.kt)(C,(0,n.Z)({},S,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("span",null,"Hello ",t.name),(0,m.kt)("p",null,"This is text some content from ",(0,m.kt)("inlineCode",{parentName:"p"},"_markdown-partial-example.mdx"),"."))}E.isMDXComponent=!0;var D=t(9012);const L={sidebar_label:"MDX Features",description:"MDX Features",keywords:["mdx","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["mdx","docusaurus"],last_update:{date:new Date("2023-05-31T00:00:00.000Z"),author:"frank"}},F="MDX Features",U={unversionedId:"mdx-features",id:"mdx-features",title:"MDX Features",description:"MDX Features",source:"@site/../../docs/mdx-features.mdx",sourceDirName:".",slug:"/mdx-features",permalink:"/docs/mdx-features",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../docs/mdx-features.mdx",tags:[{label:"mdx",permalink:"/docs/tags/mdx"},{label:"docusaurus",permalink:"/docs/tags/docusaurus"}],version:"current",lastUpdatedBy:"frank",lastUpdatedAt:1685491200,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{sidebar_label:"MDX Features",description:"MDX Features",keywords:["mdx","docusaurus"],image:"https://i.imgur.com/mErPwqL.png",tags:["mdx","docusaurus"],last_update:{date:"2023-05-31T00:00:00.000Z",author:"frank"}},sidebar:"tutorialSidebar",previous:{title:"Using Foam",permalink:"/docs/"},next:{title:"Network Diagnosis",permalink:"/docs/network/diagnosis/network-diagnosis"}},A={},H=a=>{let{children:e,color:t}=a;return(0,m.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)},V=[{value:"React Component",id:"react-component",level:2},{value:"Tabs",id:"tabs",level:2},{value:"NOTES",id:"notes",level:2},{value:"Math",id:"math",level:2},{value:"Diagrams",id:"diagrams",level:2},{value:"Code Block",id:"code-block",level:2},{value:"Importing Code",id:"importing-code",level:2},{value:"Importing Markdown",id:"importing-markdown",level:2}],B={Highlight:H,toc:V},_="wrapper";function z(a){let{components:e,...t}=a;return(0,m.kt)(_,(0,n.Z)({},B,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"mdx-features"},"MDX Features"),(0,m.kt)("h2",{id:"react-component"},"React Component"),(0,m.kt)(H,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,m.kt)(H,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,m.kt)("p",null,"\u200b"),(0,m.kt)(r,{color:"#25c2a0",mdxType:"SharedHighlight"},"Docusaurus green"),(0,m.kt)("p",null,"I can write ",(0,m.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,m.kt)("em",{parentName:"p"},"JSX"),"!"),(0,m.kt)("h2",{id:"tabs"},"Tabs"),(0,m.kt)(v,{mdxType:"Tabs"},(0,m.kt)(M,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,m.kt)(M,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,m.kt)(M,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,m.kt)("h2",{id:"notes"},"NOTES"),(0,m.kt)("admonition",{type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Hello world")),(0,m.kt)("admonition",{type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Hello world")),(0,m.kt)("p",null,"::: note Hello world:::"),(0,m.kt)("admonition",{title:"Your Title",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Some ",(0,m.kt)("strong",{parentName:"p"},"content")," with ",(0,m.kt)("em",{parentName:"p"},"Markdown")," ",(0,m.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,m.kt)("admonition",{title:"Use tabs in admonitions",type:"tip"},(0,m.kt)(v,{mdxType:"Tabs"},(0,m.kt)(M,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,m.kt)(M,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,m.kt)(M,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,m.kt)("h2",{id:"math"},"Math"),(0,m.kt)("p",null,"Let ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mspace",{parentName:"mrow"}),(0,m.kt)("mspace",{parentName:"mrow",width:"0.1111em"}),(0,m.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0.17em"}),(0,m.kt)("mtext",{parentName:"mrow"},"\u2009\u2063"),(0,m.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0em"},":"),(0,m.kt)("mspace",{parentName:"mrow",width:"0.3333em"}),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"\u2192"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f\\colon[a,b]\\to\\R")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mspace nobreak"}),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1111em"}}),(0,m.kt)("span",{parentName:"span",className:"mpunct"}),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mrel"},":")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.3333em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R")))))," be Riemann integrable. Let ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mspace",{parentName:"mrow"}),(0,m.kt)("mspace",{parentName:"mrow",width:"0.1111em"}),(0,m.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0.17em"}),(0,m.kt)("mtext",{parentName:"mrow"},"\u2009\u2063"),(0,m.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0em"},":"),(0,m.kt)("mspace",{parentName:"mrow",width:"0.3333em"}),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"\u2192"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F\\colon[a,b]\\to\\R")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"mspace nobreak"}),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1111em"}}),(0,m.kt)("span",{parentName:"span",className:"mpunct"}),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mrel"},":")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.3333em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R")))))," be\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,m.kt)("mi",{parentName:"msubsup"},"a"),(0,m.kt)("mi",{parentName:"msubsup"},"x")),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F(x)=\\int_{a}^{x} f(t)\\,dt")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2151em",verticalAlign:"-0.3558em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0006em"}},"\u222b"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8593em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.3442em",marginLeft:"-0.1945em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.2579em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3558em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". Then ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is continuous, and at all ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," such that\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"f")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," is continuous at ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is differentiable at ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," with ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"F"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F'(x)=f(x)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"I"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,m.kt)("mn",{parentName:"msubsup"},"0"),(0,m.kt)("mrow",{parentName:"msubsup"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow"},"\u03c0"))),(0,m.kt)("mi",{parentName:"mrow"},"sin"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I = \\int_0^{2\\pi} \\sin(x)\\,dx")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.476em",verticalAlign:"-0.9119em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"}},"\u222b"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.564em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.8129em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9119em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,m.kt)("h2",{id:"diagrams"},"Diagrams"),(0,m.kt)("mermaid",{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),(0,m.kt)("h2",{id:"code-block"},"Code Block"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Every repo must come with a mascot.');\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11}","{1,4-6,11}":!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11} showLineNumbers","{1,4-6,11}":!0,showLineNumbers:!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n")),(0,m.kt)(v,{mdxType:"Tabs"},(0,m.kt)(M,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,m.kt)(M,{value:"py",label:"Python",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,m.kt)(M,{value:"java",label:"Java",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')))),(0,m.kt)("h2",{id:"importing-code"},"Importing Code"),(0,m.kt)(R.Z,{language:"jsx",mdxType:"CodeBlock"},I),(0,m.kt)("h2",{id:"importing-markdown"},"Importing Markdown"),(0,m.kt)(E,{name:"Sebastien",mdxType:"PartialExample"}),(0,m.kt)(D.default,{mdxType:"PartialExample1"}))}z.isMDXComponent=!0},9012:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const m={},r="Skia",p={unversionedId:"skia",id:"skia",title:"Skia",description:"What the difference between SkImage/SkPicture/SkCanvas/SkSurface?",source:"@site/../../docs/skia.md",sourceDirName:".",slug:"/skia",permalink:"/docs/skia",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../docs/skia.md",tags:[],version:"current",lastUpdatedBy:"frankchen",lastUpdatedAt:1685673287,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KillSwitch",permalink:"/docs/network/vpn/kill-switch"},next:{title:"LevelDB",permalink:"/docs/storage/storage-engine/leveldb"}},l={},o=[],i={toc:o},c="wrapper";function N(a){let{components:e,...t}=a;return(0,s.kt)(c,(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"skia"},"Skia"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/rNWV-oYtps"},"What the difference between SkImage/SkPicture/SkCanvas/SkSurface?")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/zatUu89s5_I"},"SkBitmap based SkCanvas very slow... How to improve draw speeds?")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/M6G_bQd8Vf8"},"How to move SkImage from CPU to GPU?")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://groups.google.com/g/skia-discuss/c/EqvExXnEUbI"},"How to control the SkImage GPU back cache size?")),(0,s.kt)("p",null,"As far as I understand when I load SkImage from file or SkBitmap the SkImage lives in CPU side memory. Then the moment I draw this SkImage on a GPU backed canvas it will make a copy of the CPU data into a GPU backed texture. So now we technically have two copies available on the SkImage. Then each time I draw that SkImage it will do it quickly cause it's already in the GPU side."))}N.isMDXComponent=!0}}]);