"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/setup-nfs-sever.md"},authors:["frank"],tags:["docker","nfs"],description:"Setup NFS Sever",keywords:["Setup NFS Sever"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2023-08-11T00:00:00.000Z"),draft:!1,enableComments:!0},s="Set Up the NFS Sever In Docker",l={permalink:"/blog/docker-setup-nfs-sever",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/docker-setup-nfs-sever.mdx",source:"@site/../../blog/docker-setup-nfs-sever.mdx",title:"Set Up the NFS Sever In Docker",description:"Setup NFS Sever",date:"2023-08-11T00:00:00.000Z",formattedDate:"August 11, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"nfs",permalink:"/blog/tags/nfs"}],readingTime:2.16,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{foam_template:{name:"Blog Docusaurus Template",description:"Creates Docusaurus blog/slip",filepath:"blog/setup-nfs-sever.md"},authors:["frank"],tags:["docker","nfs"],description:"Setup NFS Sever",keywords:["Setup NFS Sever"],image:"https://i.imgur.com/mErPwqL.png",date:"2023-08-11T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Docker Setup Samba Server",permalink:"/blog/docker-setup-samba-server"},nextItem:{title:"Docker Useful Commands",permalink:"/blog/docker-useful-commands"}},i={authorsImageUrls:[void 0]},p=[{value:"Set Up the NFS Server",id:"set-up-the-nfs-server",level:2},{value:"Test NFS server in a Docker container by Manual <strong>mount</strong>",id:"test-nfs-server-in-a-docker-container-by-manual-mount",level:2},{value:"Test NFS server in a Docker container with creating a NFS volume",id:"test-nfs-server-in-a-docker-container-with-creating-a-nfs-volume",level:2},{value:"Setup a NFS Server and Mount NFS Volume int Docker Compose",id:"setup-a-nfs-server-and-mount-nfs-volume-int-docker-compose",level:2},{value:"About NFS Options",id:"about-nfs-options",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To set up a ",(0,a.kt)("strong",{parentName:"p"},"NFS server")," in your Host, you can check ",(0,a.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/ubuntu-nfs-server"},"NFS server installed and configured"),"."),(0,a.kt)("h2",{id:"set-up-the-nfs-server"},"Set Up the NFS Server"),(0,a.kt)("p",null,"Use docker image ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/gists/nfs-server"},"gists/nfs-server")," to start up a ",(0,a.kt)("strong",{parentName:"p"},"NFS server")," container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --rm -d \\\n    --name nfs \\\n    --privileged \\\n    -p 2049:2049 \\\n    -v /tmp/volume:/nfs-share \\\n    -e NFS_DIR=/nfs-share \\\n    -e NFS_OPTION="rw,fsid=0,async,no_subtree_check,no_auth_nlm,insecure,no_root_squash" \\\n    gists/nfs-server\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",null,"Before we use an old nfs server image ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/itsthenetwork/nfs-server-alpine/"},"itsthenetwork/nfs-server-alpine")," which was not maintained more than 4 years and not supported natively in platform ",(0,a.kt)("inlineCode",{parentName:"p"},"linux/arm/v6"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm \\\n    --name nfs \\\n    --privileged \\\n    -v /tmp/volume:/nfs-share \\\n    -e SHARED_DIRECTORY=/nfs-share \\\n    -p 2049:2049 \\\n    itsthenetwork/nfs-server-alpine:latest\n"))),(0,a.kt)("p",null,"Get the ip address of the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server, which will be used later to connect the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server when mounting in a Docker container client. If you only want to mount the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server from the host, you can just know the ip address of your host."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker inspect \\\n    -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \\\n    nfs\n")),(0,a.kt)("p",null,"Here the output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"172.17.0.2\n")),(0,a.kt)("h2",{id:"test-nfs-server-in-a-docker-container-by-manual-mount"},"Test NFS server in a Docker container by Manual ",(0,a.kt)("strong",{parentName:"h2"},"mount")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: run container as root by option ",(0,a.kt)("inlineCode",{parentName:"p"},"--privileged")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--cap-add SYS_ADMIN")," when permissions denied inside the container:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --privileged busybox sh\n")),(0,a.kt)("p",null,"Inside the container:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Due to the fsid=0 parameter set in the /etc/exports file, there's no need to specify the folder name when mounting from a client. For example, this works fine even though the folder being mounted and shared is /nfs-share:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# In the container\n\nmkdir /mnt\n# nfs v4\nmount -v -o vers=4,loud 172.17.0.2:/ /mnt\n\n# create a file to test\necho "some text here" > /mnt/file1.txt\n')),(0,a.kt)("p",null,"Then go to the Host to list directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/volume/test"),", where you will find the ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt")," is sitting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# In the host\ncat /data/volume/test/file1.txt\n")),(0,a.kt)("h2",{id:"test-nfs-server-in-a-docker-container-with-creating-a-nfs-volume"},"Test NFS server in a Docker container with creating a NFS volume"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a NFS volume in Docker")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker volume create --driver local \\\n    --opt type=nfs \\\n    --opt o=addr=172.17.0.2,nfsvers=4 \\\n    --opt device=:/ \\\n    nfs-volume\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker inspect nfs-volume\n")),(0,a.kt)("p",null,"Then run a container with the created volume ",(0,a.kt)("inlineCode",{parentName:"p"},"nfs-volume"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm \\\n    --privileged \\\n    --name nfs-test \\\n    -v nfs-volume:/mnt \\\n    busybox \\\n    sh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Alternative, you can use the combined one command which will create a volume ",(0,a.kt)("inlineCode",{parentName:"li"},"nfsvolume"),", ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm \\\n    --privileged \\\n    --name nfs-test \\\n    --mount 'type=volume,source=nfsvolume,volume-driver=local,volume-opt=type=nfs,volume-opt=device=:/,\"volume-opt=o=addr=172.17.0.2,rw,nfsvers=4,async\",target=/mnt' \\\n    busybox \\\n    sh\n")),(0,a.kt)("h2",{id:"setup-a-nfs-server-and-mount-nfs-volume-int-docker-compose"},"Setup a NFS Server and Mount NFS Volume int Docker Compose"),(0,a.kt)("h2",{id:"about-nfs-options"},"About NFS Options"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.thegeekdiary.com/understanding-the-etc-exports-file/"},"Understanding the /etc/exports File \u2013 The Geek Diary")))}m.isMDXComponent=!0}}]);