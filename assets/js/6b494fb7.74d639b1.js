"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2469],{31764:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(74848),r=n(28453);const s={},t="Friday, April 19, 2024",c={permalink:"/blog/2024/04/19/",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../journal/2024-04-19.md",source:"@site/../../journal/2024-04-19.md",title:"Friday, April 19, 2024",description:"Docker compose for development and production",date:"2024-04-19T00:00:00.000Z",tags:[],readingTime:3.325,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Thursday, April 25, 2024",permalink:"/blog/2024/04/25/"},nextItem:{title:"Thursday, April 18, 2024",permalink:"/blog/2024/04/18/"}},d={authorsImageUrls:[]},l=[{value:"Docker compose for development and production",id:"docker-compose-for-development-and-production",level:2},{value:"Deploying a local Docker compose project for production",id:"deploying-a-local-docker-compose-project-for-production",level:2},{value:"How to automate deployment from development to production using Docker Compose",id:"how-to-automate-deployment-from-development-to-production-using-docker-compose",level:2},{value:"Setting up CI/CD with Docker Compose",id:"setting-up-cicd-with-docker-compose",level:2}];function a(e){const o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"docker-compose-for-development-and-production",children:"Docker compose for development and production"}),"\n",(0,i.jsxs)(o.p,{children:["Understanding the nuances between development (",(0,i.jsx)(o.code,{children:"dev"}),") and production (",(0,i.jsx)(o.code,{children:"prod"}),") environments is crucial for efficient operations:"]}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Database Infrastructure:"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"In development, engineers typically rely on local MySQL or MongoDB instances. However, for production-grade reliability and scalability, businesses often leverage managed database services provided by leading cloud platforms. As a result, the configuration of environment variables for database connections varies between the two environments."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Resource Allocation:"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Development machines typically possess limited computing resources compared to production servers. Consequently, it's essential to optimize resource allocation during development by minimizing unnecessary services or configurations. This ensures efficient performance and cost-effectiveness."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Building Strategies:"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"During development, engineers build and run Docker images locally to streamline the development process. Conversely, for production, a structured approach is adopted. This involves building and publishing images through Continuous Integration (CI) pipelines. Subsequently, the pre-built images are pulled from a registry for execution in the production environment."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Given these considerations, a one-size-fits-all approach, such as simply overriding configurations from a base Docker Compose file, may not suffice to address the unique requirements of each environment."}),"\n",(0,i.jsx)(o.p,{children:"In summary, while Docker Compose serves as a valuable tool for local development and testing, its utility in production deployment may be limited. To meet the evolving needs of a growing application, businesses are encouraged to explore advanced deployment solutions, such as cloud-based Kubernetes pods, for scalable and resilient operations."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://news.ycombinator.com/item?id=32484008",children:"Docker Compose best practices for dev and prod | Hacker News"})}),"\n",(0,i.jsx)(o.h2,{id:"deploying-a-local-docker-compose-project-for-production",children:"Deploying a local Docker compose project for production"}),"\n",(0,i.jsx)(o.p,{children:"one common way to do it without CD/CI pipeline, is to:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"build development images by using different/override docker-compose files and use .env that can be adapted for every environment."}),"\n",(0,i.jsx)(o.li,{children:"push stable images to a container registry"}),"\n",(0,i.jsx)(o.li,{children:"docker pull the images on the prod."}),"\n",(0,i.jsx)(o.li,{children:"run the containers"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://www.reddit.com/r/docker/comments/s0fn94/how_to_deploy_a_local_docker_compose_project_to_a/",children:"Reddit - Dive into anything"})}),"\n",(0,i.jsx)(o.h2,{id:"how-to-automate-deployment-from-development-to-production-using-docker-compose",children:"How to automate deployment from development to production using Docker Compose"}),"\n",(0,i.jsx)(o.p,{children:"Organizing development and production configurations in Docker Compose can be achieved using various strategies, and the choice depends on your specific requirements and preferences. Here are two common approaches:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Using Two Docker Compose Files:"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Development:"})," Create a ",(0,i.jsx)(o.code,{children:"docker-compose.yml"})," file tailored for development purposes. This file can include options for volumes, environment variables, ports, and other settings that facilitate the development workflow, such as live code reloading."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Production:"})," Create a separate ",(0,i.jsx)(o.code,{children:"docker-compose.prod.yml"})," file for production settings. This file should include configurations optimized for production, such as specifying production-ready images and environment variables suited for the production environment."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["To deploy in production, you can use the ",(0,i.jsx)(o.code,{children:"-f"})," flag to specify the production Docker Compose file:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"docker-compose -f docker-compose.prod.yml up -d\n"})}),"\n",(0,i.jsx)(o.p,{children:"This approach offers clear separation between development and production configurations and makes it easier to manage different settings for each environment."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Using Different Environment Files:"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Maintain a single Docker Compose file (",(0,i.jsx)(o.code,{children:"docker-compose.yml"}),") that defines the services and their basic configurations."]}),"\n",(0,i.jsxs)(o.li,{children:["Use different environment files for development (",(0,i.jsx)(o.code,{children:"docker-compose.override.yml"}),") and production (",(0,i.jsx)(o.code,{children:"docker-compose.prod.yml"}),"). These environment files can override configurations defined in the base ",(0,i.jsx)(o.code,{children:"docker-compose.yml"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"In the development environment file, you can specify volumes, environment variables for development-specific settings, and other configurations suited for development."}),"\n",(0,i.jsx)(o.li,{children:"In the production environment file, you can specify production-ready image versions, environment variables for production, and any other configurations optimized for the production environment."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"To run in development:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"docker-compose up -d\n"})}),"\n",(0,i.jsx)(o.p,{children:"To run in production:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d\n"})}),"\n",(0,i.jsx)(o.p,{children:"This approach keeps all configurations in a single Docker Compose file, with environment-specific settings separated into different files. It provides flexibility and simplifies deployment by allowing you to specify the environment at runtime."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Both approaches have their merits, and the choice depends on factors such as the complexity of your project, team preferences, and deployment workflows. Whichever approach you choose, ensure that your configurations are well-organized, easy to maintain, and provide the necessary flexibility for both development and production environments."}),"\n",(0,i.jsx)(o.h2,{id:"setting-up-cicd-with-docker-compose",children:"Setting up CI/CD with Docker Compose"})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function t(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);