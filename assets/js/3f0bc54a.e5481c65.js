"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1599],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,v=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(v,s(s({ref:n},u),{},{components:t})):r.createElement(v,s({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/setup-nfs-sever.md"},authors:["frank"],tags:["docker","nfs"],description:"Setup NFS Sever",keywords:["Setup NFS Sever"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-08-11T00:00:00.000Z"),draft:!1,enableComments:!0},s="Set Up the NFS Sever In Docker",l={permalink:"/blog/docker-setup-nfs-sever",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/docker-setup-nfs-sever.md",source:"@site/../../blog/docker-setup-nfs-sever.md",title:"Set Up the NFS Sever In Docker",description:"Setup NFS Sever",date:"2023-08-11T00:00:00.000Z",formattedDate:"August 11, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"nfs",permalink:"/blog/tags/nfs"}],readingTime:2.515,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/setup-nfs-sever.md"},authors:["frank"],tags:["docker","nfs"],description:"Setup NFS Sever",keywords:["Setup NFS Sever"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-08-11T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"WPF",permalink:"/blog/wpf"},nextItem:{title:"FastAPI Celery Serving ML Model",permalink:"/blog/fastapi-celery-serving-ml-model"}},i={authorsImageUrls:[void 0]},p=[{value:"Set Up the NFS Server",id:"set-up-the-nfs-server",level:2},{value:"Test NFS server in a Docker container by Manual <strong>mount</strong>",id:"test-nfs-server-in-a-docker-container-by-manual-mount",level:2},{value:"Test NFS server in a Docker container with creating a NFS volume",id:"test-nfs-server-in-a-docker-container-with-creating-a-nfs-volume",level:2},{value:"Setup a NFS Server and Mount NFS Volume int Docker Compose",id:"setup-a-nfs-server-and-mount-nfs-volume-int-docker-compose",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To set up a ",(0,a.kt)("strong",{parentName:"p"},"NFS server")," in your Host, you can check ",(0,a.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/ubuntu-nfs-server"},"NFS server installed and configured"),"."),(0,a.kt)("h2",{id:"set-up-the-nfs-server"},"Set Up the NFS Server"),(0,a.kt)("p",null,"Use docker image ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/gists/nfs-server"},"gists/nfs-server")," to start up a ",(0,a.kt)("strong",{parentName:"p"},"NFS server")," container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --rm -d \\\n    --name nfs \\\n    --cap-add=SYS_ADMIN \\\n    --cap-add=SETPCAP \\\n    -p 2049:2049 \\\n    -v /data/volume/test:/nfs-share \\\n    -e NFS_DIR=/nfs-share \\\n    -e NFS_OPTION="rw,fsid=0,async,no_subtree_check,no_auth_nlm,insecure,no_root_squash" \\\n    gists/nfs-server\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",null,"Before we use an old nfs server image ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/itsthenetwork/nfs-server-alpine/"},"itsthenetwork/nfs-server-alpine")," which was not maintained more than 4 years and not supported natively in platform ",(0,a.kt)("inlineCode",{parentName:"p"},"linux/arm/v6"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm \\\n    --name nfs \\\n    --privileged \\\n    -v /data/volume/test:/nfs-share \\\n    -e SHARED_DIRECTORY=/nfs-share \\\n    -p 2049:2049 \\\n    itsthenetwork/nfs-server-alpine:latest\n"))),(0,a.kt)("p",null,"Get the ip address of the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server, which will be used later to connect the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server when mounting in a Docker container client. If you only want to mount the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server from the host, you can just know the ip address of your host."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker inspect \\\n    -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \\\n    nfs\n")),(0,a.kt)("p",null,"Here the output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"172.17.0.2\n")),(0,a.kt)("h2",{id:"test-nfs-server-in-a-docker-container-by-manual-mount"},"Test NFS server in a Docker container by Manual ",(0,a.kt)("strong",{parentName:"h2"},"mount")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: run container as root by option ",(0,a.kt)("inlineCode",{parentName:"p"},"--privileged")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--cap-add SYS_ADMIN")," when permissions denied inside the container:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --privileged busybox sh\n")),(0,a.kt)("p",null,"Inside the container:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Due to the fsid=0 parameter set in the /etc/exports file, there's no need to specify the folder name when mounting from a client. For example, this works fine even though the folder being mounted and shared is /nfs-share:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# In the container\n\nmkdir /mnt\n# nfs v4\nmount -v -o vers=4,loud 172.17.0.2:/ /mnt\n\n# create a file to test\necho "some text here" > /mnt/file1.txt\n')),(0,a.kt)("p",null,"Then go to the Host to list directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/volume/test"),", where you will find the ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt")," is sitting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# In the host\ncat /data/volume/test/file1.txt\n")),(0,a.kt)("h2",{id:"test-nfs-server-in-a-docker-container-with-creating-a-nfs-volume"},"Test NFS server in a Docker container with creating a NFS volume"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a NFS volume in Docker")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker volume create --driver local \\\n  --opt type=nfs \\\n  --opt o=addr=172.17.0.2,nfsvers=4 \\\n  --opt device=:/ \\\n  nfs-volume\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker inspect nfs-volume\n")),(0,a.kt)("p",null,"Then run a container with the created volume ",(0,a.kt)("inlineCode",{parentName:"p"},"nfs-volume"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm \\\n  --name nfs-test \\\n  -v nfs-volume:/mnt \\\n  busybox \\\n  sh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Alternative, you can use the combined one command which will create a volume ",(0,a.kt)("inlineCode",{parentName:"li"},"nfsvolume"),", ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm \\\n    --privileged \\\n    --name nfs-test \\\n    --mount 'type=volume,source=nfsvolume,volume-driver=local,volume-opt=type=nfs,volume-opt=device=:/,\"volume-opt=o=addr=172.17.0.2,rw,nfsvers=4,async\",target=/mnt' \\\n    busybox \\\n    sh\n")),(0,a.kt)("h2",{id:"setup-a-nfs-server-and-mount-nfs-volume-int-docker-compose"},"Setup a NFS Server and Mount NFS Volume int Docker Compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nservices:\n  nfs-client:\n    image: busybox\n    ports:\n      - 8001:8000\n    environment:\n      - ROOT_PATH=/upload\n    working_dir: /app\n    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload --log-config=log_conf.yaml\n    volumes:\n      - type: volume\n        source: nfs-volume\n        target: /data\n        volume:\n          nocopy: true\n    depends_on:\n      - nfs-server\n    networks:\n      backend:\n\n  nfs-server:\n    image: itsthenetwork/nfs-server-alpine:latest\n    privileged: true\n    # ports:\n      # - 2049:2049\n    environment:\n      SHARED_DIRECTORY: /nfs-share\n    volumes:\n      - /data/volume/mtr:/nfs-share\n    networks:\n      backend:\n        ipv4_address: 172.28.0.2\n\nnetworks:\n  backend:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.28.0.0/16\n          gateway: 172.28.0.1\n\nvolumes:\n  nfs-volume:\n    driver: local\n    driver_opts:\n      type: nfs\n      o: "addr=172.28.0.2,nfsvers=4,async"\n      device: ":/"\n')))}m.isMDXComponent=!0}}]);