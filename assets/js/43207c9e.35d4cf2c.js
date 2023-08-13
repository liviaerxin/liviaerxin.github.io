"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[482],{34537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>k});var a=t(87462),r=(t(67294),t(3905)),o=t(1841),i=t.n(o);const s="# Use below credentials to access in `adminer` web to access `db`,\n# server:   db  (db1, db2 are also available!)\n# user:     postgres\n# password: example \nversion: '3.1'\n\nservices:\n\n  db:\n    image: postgres\n    restart: always\n    environment:\n      # POSTGRES_USER: postgres  # `postgres` in default.\n      POSTGRES_PASSWORD: example\n    networks:\n      default:\n        aliases:\n          - db1\n          - db2\n  adminer:\n    image: adminer\n    restart: always\n    ports:\n      - 8080:8080\n",l={authors:["frank"],description:"Communication Between Docker Containers",image:"https://i.imgur.com/mErPwqL.png",tags:["docker","docker-network","postgres","dev-ops"],date:new Date("2023-06-08T00:00:00.000Z"),draft:!1},p="Communication Between Docker Containers",d={permalink:"/blog/docker-containers-communication",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/docker-containers-communication.mdx",source:"@site/../../blog/docker-containers-communication.mdx",title:"Communication Between Docker Containers",description:"Communication Between Docker Containers",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"docker-network",permalink:"/blog/tags/docker-network"},{label:"postgres",permalink:"/blog/tags/postgres"},{label:"dev-ops",permalink:"/blog/tags/dev-ops"}],readingTime:2.155,hasTruncateMarker:!0,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],description:"Communication Between Docker Containers",image:"https://i.imgur.com/mErPwqL.png",tags:["docker","docker-network","postgres","dev-ops"],date:"2023-06-08T00:00:00.000Z",draft:!1},prevItem:{title:"Learn FFmpeg",permalink:"/blog/learn-ffmpeg"},nextItem:{title:"Inspect Shared Library",permalink:"/blog/inspect-shared-library"}},c={authorsImageUrls:[void 0]},k=[{value:"Using <code>--link</code> flag(Legacy)",id:"using---link-flaglegacy",level:2},{value:"Using Default Bridge Network",id:"using-default-bridge-network",level:2},{value:"Using Private Defined Bridge Network",id:"using-private-defined-bridge-network",level:2},{value:"Use Case in Docker Compose",id:"use-case-in-docker-compose",level:2}],m={toc:k},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes between docker containers, we need connect container B from container A to do fast test, etc. For most well-known example, we have ",(0,r.kt)("inlineCode",{parentName:"p"},"FastAPI")," app container connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," db container. In addition, it's likely to do some sql test on ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," db container in a third container."),(0,r.kt)("p",null,"Here some methods we can use."),(0,r.kt)("h2",{id:"using---link-flaglegacy"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"--link")," flag(Legacy)"),(0,r.kt)("p",null,"Start a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres db")," container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --rm --name postgres-db --detach -e POSTGRES_PASSWORD=mysecretpassword postgres\n")),(0,r.kt)("p",null,"Run a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres client")," container to connect the ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," container with user ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," and password ",(0,r.kt)("inlineCode",{parentName:"p"},"mysecretpassword"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -it --rm --link postgres-db:db postgres psql -h db -U postgres\npsql (14.3)\nType "help" for help.\n\npostgres=# SELECT 1;\n ?column? \n----------\n        1\n(1 row)\n')),(0,r.kt)("p",null,"Or run a utility container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --link postgres-db:db busybox sh\n# in `busybox`\nping db\n")),(0,r.kt)("h2",{id:"using-default-bridge-network"},"Using Default Bridge Network"),(0,r.kt)("p",null,"If you are running your container without specifying attached ",(0,r.kt)("inlineCode",{parentName:"p"},"network"),", it will use the docker ",(0,r.kt)("inlineCode",{parentName:"p"},"default bridge network"),"."),(0,r.kt)("p",null,"However The ",(0,r.kt)("inlineCode",{parentName:"p"},"default bridge network")," allows container-to-container communication by ",(0,r.kt)("inlineCode",{parentName:"p"},"IP address")," only. To use ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"alias name")," in connecting rather than IP address, see the following methods."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"So before connecting, we need get the container IP address by ",(0,r.kt)("inlineCode",{parentName:"p"},"docker inspect"),".")),(0,r.kt)("p",null,"Start a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres db")," container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --rm --name postgres-db --detach -e POSTGRES_PASSWORD=mysecretpassword postgres\n")),(0,r.kt)("p",null,"Get the IP address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres db")," container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker inspect mynginx | grep IPAddress\n            "IPAddress": "172.17.0.2",\n')),(0,r.kt)("p",null,"Run a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres client")," container to connect the ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -it --rm postgres psql -h "172.17.0.2" -U postgres\npsql (14.3)\nType "help" for help.\n\npostgres=# SELECT 1;\n ?column? \n----------\n        1\n(1 row)\n')),(0,r.kt)("h2",{id:"using-private-defined-bridge-network"},"Using Private Defined Bridge Network"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"private defined bridge network")," will give you more privacy that it only allows only containers belonging to it can talk to each other."),(0,r.kt)("p",null,"Moreover, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"alias name")," to connect without regard of ",(0,r.kt)("inlineCode",{parentName:"p"},"IP address")," changing due to re-start."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"private bridge network"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker network create postgres-net\n")),(0,r.kt)("p",null,"Start a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres db")," container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --rm --net postgres-net --name postgres-db --detach -e POSTGRES_PASSWORD=mysecretpassword postgres\n")),(0,r.kt)("p",null,"Run a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres client")," container to connect the ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -it --rm --net postgres-net postgres psql -h postgres-db -U postgres\npsql (14.3)\nType "help" for help.\n\npostgres=# SELECT 1;\n ?column? \n----------\n        1\n(1 row)\n')),(0,r.kt)("h2",{id:"use-case-in-docker-compose"},"Use Case in Docker Compose"),(0,r.kt)("p",null,"Actually, ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose")," will create its ",(0,r.kt)("inlineCode",{parentName:"p"},"private bridge network"),", and when it start containers, containers will be attached to that network in default."),(0,r.kt)(i(),{language:"yaml",title:"docker-compose-postgres.yml",mdxType:"CodeBlock"},s))}u.isMDXComponent=!0}}]);