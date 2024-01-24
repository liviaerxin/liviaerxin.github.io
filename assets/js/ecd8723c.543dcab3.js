"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,k=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={authors:["frank"],tags:["Cheatsheet Traefik"],description:"Cheatsheet Traefik",keywords:["Cheatsheet Traefik"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-01-17T00:00:00.000Z"),draft:!1,enableComments:!0},o="Traefik Docker Cheat Sheet",s={permalink:"/blog/cheatsheet-traefik-docker",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/cheatsheet-traefik-docker.mdx",source:"@site/../../blog/cheatsheet-traefik-docker.mdx",title:"Traefik Docker Cheat Sheet",description:"Cheatsheet Traefik",date:"2024-01-17T00:00:00.000Z",formattedDate:"January 17, 2024",tags:[{label:"Cheatsheet Traefik",permalink:"/blog/tags/cheatsheet-traefik"}],readingTime:1.895,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["Cheatsheet Traefik"],description:"Cheatsheet Traefik",keywords:["Cheatsheet Traefik"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-01-17T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Wiki VPN",permalink:"/blog/wiki-vpn"},nextItem:{title:"Network Cheat Sheet",permalink:"/blog/cheatsheet-network"}},l={authorsImageUrls:[void 0]},p=[{value:"Redirect root path <code>/</code> to a subpath",id:"redirect-root-path--to-a-subpath",level:2},{value:"Route a prefix to a service",id:"route-a-prefix-to-a-service",level:2},{value:"Specify a custom port for the container",id:"specify-a-custom-port-for-the-container",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here are quick references for using ",(0,n.kt)("inlineCode",{parentName:"p"},"Traefik")," on ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker")," containers."),(0,n.kt)("p",null,"I use ",(0,n.kt)("inlineCode",{parentName:"p"},"Traefik")," in my docker compose project more frequently than using ",(0,n.kt)("inlineCode",{parentName:"p"},"Nginx"),", as it has such advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simply to use and fast to spin up",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Configuration relies on platform syntax(like ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker labels")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Kubernetes annotations"),"), while ",(0,n.kt)("inlineCode",{parentName:"li"},"Nginx")," uses its own syntax and directives."),(0,n.kt)("li",{parentName:"ul"},"Configuration can just sit in ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),", but ",(0,n.kt)("inlineCode",{parentName:"li"},"Nginx")," always uses a dedicate configuration file(",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/nginx/nginx.conf"),")."))),(0,n.kt)("li",{parentName:"ul"},"Dynamic configuration:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Changes to the configuration require a restart of the ",(0,n.kt)("inlineCode",{parentName:"li"},"Nginx")," process"),(0,n.kt)("li",{parentName:"ul"},"Changes to the configuration require a restart of its corresponding service, not the ",(0,n.kt)("inlineCode",{parentName:"li"},"Traefik")," process")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://doc.traefik.io/traefik/assets/img/middleware/overview.png",alt:"How a Request is processed in Traefik"})),(0,n.kt)("p",null,"Entrypoint -> Router -> Middleware 1 -> Middleware 2 -> ... -> Service"),(0,n.kt)("h2",{id:"redirect-root-path--to-a-subpath"},"Redirect root path ",(0,n.kt)("inlineCode",{parentName:"h2"},"/")," to a subpath"),(0,n.kt)("p",null,"The goal is to redirect root path ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," to sub path ",(0,n.kt)("inlineCode",{parentName:"p"},"/mtr")," that's an ingress for a web service:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1/mtr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1/mtr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"https://127.0.0.1/something")," -> no redirect")),(0,n.kt)("p",null,"It works for ",(0,n.kt)("strong",{parentName:"p"},"Traefik 2.0")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"services:\n  traefik:\n    image: traefik:v2.10\n    command:\n      - --api.insecure=true\n      - --providers.docker=true\n      - --providers.docker.exposedbydefault=false\n      - --entrypoints.web.address=:80\n    ports:\n      - 80:80\n      - 8080:8080 # Web UI Port\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    labels:\n      - traefik.enable=true\n      # Redirection from `http://xxx.com` to `http://xxx.com/foo`\n      - traefik.http.routers.domain.entrypoints=web\n      - traefik.http.routers.domain.rule=Path(`/`)\n      - traefik.http.routers.domain.service=noop@internal\n      - traefik.http.routers.domain.middlewares=to-foo@docker\n      - traefik.http.middlewares.to-foo.redirectregex.permanent=true\n      - traefik.http.middlewares.to-foo.redirectregex.regex=^http://([^/]+)/?$\n      - traefik.http.middlewares.to-foo.redirectregex.replacement=http://$${1}/foo\n\n  foo:\n    image:  traefik/whoami:v1.10\n    hostname: foo.com\n    labels:\n      - traefik.enable=true\n      # just to ingress `http://xxx.com/foo`\n      - traefik.http.routers.foo.entrypoints=web\n      - traefik.http.routers.foo.rule=PathPrefix(`/foo`)\n")),(0,n.kt)("h2",{id:"route-a-prefix-to-a-service"},"Route a prefix to a service"),(0,n.kt)("p",null,"Match a request with a prefix ",(0,n.kt)("inlineCode",{parentName:"p"},"/bar"),", strip the prefix and route it to the ",(0,n.kt)("strong",{parentName:"p"},"bar")," service,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"bar:\n  image:  traefik/whoami:v1.10\n  hostname: bar.com\n  labels:\n    - traefik.enable=true\n    # ingress `http://xxx.com/bar/xyz` and send `http://xxx.com/xyz` to `bar` service\n    - traefik.http.routers.bar.entrypoints=web\n    - traefik.http.routers.bar.rule=PathPrefix(`/bar`)\n    - traefik.http.routers.bar.middlewares=bar-strip-prefix@docker\n    - traefik.http.middlewares.bar-strip-prefix.stripprefix.prefixes=/bar\n")),(0,n.kt)("h2",{id:"specify-a-custom-port-for-the-container"},"Specify a custom port for the container"),(0,n.kt)("p",null,"By default, Traefik used the first exposed port of a container, if a container exposes multiple ports, set ",(0,n.kt)("inlineCode",{parentName:"p"},"traefik.http.services.xxx.loadbalancer.server.port")," to override that port."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"bar12345:\n  image:  traefik/whoami:v1.10\n  hostname: bar12345.com\n  environment:\n    WHOAMI_PORT_NUMBER: 12345\n  labels:\n    - traefik.enable=true\n    - traefik.http.routers.bar12345.entrypoints=web\n    - traefik.http.routers.bar12345.rule=PathPrefix(`/bar12345`)\n    - traefik.http.routers.bar12345.service=bar12345\n    # Tell Traefik to use the port 12345 to connect to `bar12345` service\n    - traefik.http.services.bar12345.loadbalancer.server.port=12345\n")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://community.traefik.io/t/url-redirect-abc-com-to-xyz-com/8084"},"URL Redirect abc.com to xyz.com - Traefik v2 (latest) - Traefik Labs Community Forum")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/kekru/d088be6a3fa844089ae62d80c077bb38"},"Traefik redirect / (root) to sub path with Docker labels \xb7 GitHub")))}m.isMDXComponent=!0}}]);