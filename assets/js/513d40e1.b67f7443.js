"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={authors:["frank"],tags:["network","cheat sheet"],description:"Network Cheat Sheet",keywords:["Network Cheat Sheet"],image:"https://i.imgur.com/mErPwqL.png",date:new Date("2024-01-16T00:00:00.000Z"),draft:!1,enableComments:!0},l="Network Cheat Sheet",i={permalink:"/blog/cheatsheet-network",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/cheatsheet-network.mdx",source:"@site/../../blog/cheatsheet-network.mdx",title:"Network Cheat Sheet",description:"Network Cheat Sheet",date:"2024-01-16T00:00:00.000Z",formattedDate:"January 16, 2024",tags:[{label:"network",permalink:"/blog/tags/network"},{label:"cheat sheet",permalink:"/blog/tags/cheat-sheet"}],readingTime:4.915,hasTruncateMarker:!1,authors:[{name:"Frank Chen",title:"Maintainer of Docusaurus",url:"https://github.com/liviaerxin",imageURL:"https://github.com/liviaerxin.png",key:"frank"}],frontMatter:{authors:["frank"],tags:["network","cheat sheet"],description:"Network Cheat Sheet",keywords:["Network Cheat Sheet"],image:"https://i.imgur.com/mErPwqL.png",date:"2024-01-16T00:00:00.000Z",draft:!1,enableComments:!0},prevItem:{title:"Traefik Docker Cheat Sheet",permalink:"/blog/cheatsheet-traefik-docker"},nextItem:{title:"ARM64/AArch64 Assembly Cheat Sheet",permalink:"/blog/cheatsheet-assembly-arm64"}},s={authorsImageUrls:[void 0]},p=[{value:"Get IP address",id:"get-ip-address",level:2},{value:"Get IP address of a specific network interface",id:"get-ip-address-of-a-specific-network-interface",level:3},{value:"Show Routing Table",id:"show-routing-table",level:2},{value:"Find Gateway Used for Routing",id:"find-gateway-used-for-routing",level:2},{value:"Show Routes across Network",id:"show-routes-across-network",level:2},{value:"Ping Through Specific Interface",id:"ping-through-specific-interface",level:2},{value:"Find Out Address Used by Which Process",id:"find-out-address-used-by-which-process",level:2},{value:"Add a Route",id:"add-a-route",level:2},{value:"FireWall Rule",id:"firewall-rule",level:2},{value:"Get Geolocation of IP Address",id:"get-geolocation-of-ip-address",level:2},{value:"Packet Analyzer",id:"packet-analyzer",level:2},{value:"Monitor TCP packet on network interfaces",id:"monitor-tcp-packet-on-network-interfaces",level:3},{value:"Monitor HTTP message on network interfaces",id:"monitor-http-message-on-network-interfaces",level:3},{value:"USB Virtual Ethernet",id:"usb-virtual-ethernet",level:2},{value:"Access WSL 2 from local area network(LAN)",id:"access-wsl-2-from-local-area-networklan",level:2},{value:"Find WSL 2 IP address that can be reached from Windows host",id:"find-wsl-2-ip-address-that-can-be-reached-from-windows-host",level:3},{value:"Add proxy",id:"add-proxy",level:3},{value:"Optional Add firewall rule",id:"optional-add-firewall-rule",level:3},{value:"Check current proxy",id:"check-current-proxy",level:3},{value:"Clean up",id:"clean-up",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/cs/routing-table-entry"},"Understanding Routing Table Entry | Baeldung on Computer Science")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the packs go through the gateway of interface. the same interface can have multiple gateways and different interfaces can have the same gateway.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://forums.developer.nvidia.com/t/ssh-enabled-only-if-connected-through-microusb/192708/12"},"route diagnosis")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/"},"3 Ways to Find Which Linux Process Listening on a Port")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E18752_01/html/816-4554/ipconfig-142.html"},"Monitoring Network Status With the netstat Command - System Administration Guide: IP Services")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"System Administration Guide")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.xmodulo.com/geographic-location-ip-address-command-line.html"},"How to look up the geographic location of an IP address from the command line")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"#geolocation-of-ip")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://danielmiessler.com/study/tcpdump/"},"A tcpdump Tutorial with Examples \u2014 50 Ways to Isolate Traffic - Daniel Miesslersearchmailmailmail")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://resource.nvidia.com/cheatsheets/linux-networking-cheatsheet-tcpdump"},"TCPDump cheatsheet")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://opensource.com/article/18/10/introduction-tcpdump"},"An introduction to using tcpdump at the Linux command line | Opensource.com")),(0,r.kt)("p",null,"Knowing ",(0,r.kt)("inlineCode",{parentName:"p"},"simultaneously")," these three things for failing and working circumstances would be quite useful."),(0,r.kt)("h2",{id:"get-ip-address"},"Get IP address"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rms@rms:~$ ip addr\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\Frank> ipconfig\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\Frank> netsh interface ip show address\n")),(0,r.kt)("h3",{id:"get-ip-address-of-a-specific-network-interface"},"Get IP address of a specific network interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rms@rms:~$ ip addr show enp0s31f6\n5: enp0s31f6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000\n    link/ether 00:4e:01:fc:39:50 brd ff:ff:ff:ff:ff:ff\n    inet 10.6.64.184/24 brd 10.6.64.255 scope global enp0s31f6\n       valid_lft forever preferred_lft forever\n    inet6 fe80::24e:1ff:fefc:3950/64 scope link\n       valid_lft forever preferred_lft forever\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rms@rms:~$ hostname -I | awk '{print $1}'\n10.6.64.184\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'PS C:\\Users\\Frank> netsh interface ip show address "Ethernet"\n\nConfiguration for interface "Ethernet"\n    DHCP enabled:                         Yes\n    IP Address:                           10.6.64.243\n    Subnet Prefix:                        10.6.64.0/24 (mask 255.255.255.0)\n    Default Gateway:                      10.6.64.1\n    Gateway Metric:                       0\n    InterfaceMetric:                      25\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'PS C:\\Users\\Frank> netsh interface ip show address "Ethernet" | findstr "IP Address"\n')),(0,r.kt)("h2",{id:"show-routing-table"},"Show Routing Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# linux\nroute\n# osx\nnetstat -rn\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-r")," flag means to show routes."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-n")," flag means to not resolve IPs to hostnames."),(0,r.kt)("h2",{id:"find-gateway-used-for-routing"},"Find Gateway Used for Routing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# linux\nip route get 8.8.8.8\n# osx\nroute get 8.8.8.8\n")),(0,r.kt)("h2",{id:"show-routes-across-network"},"Show Routes across Network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"traceroute\n# en0 interface\ntraceroute -i en0\n")),(0,r.kt)("h2",{id:"ping-through-specific-interface"},"Ping Through Specific Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# linux\nping -I en0 sslvpn.astri.org\n# osx\nping -b en0 sslvpn.astri.org\n")),(0,r.kt)("h2",{id:"find-out-address-used-by-which-process"},"Find Out Address Used by Which Process"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# osx\nnetstat -avn -p tcp\n")),(0,r.kt)("h2",{id:"add-a-route"},"Add a Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# osx\nroute -n add 10.0.0.0/24 10.0.0.1\n# linux\nroute -n add -net 10.0.0.0/24 gw 10.0.0.1\n")),(0,r.kt)("h2",{id:"firewall-rule"},"FireWall Rule"),(0,r.kt)("p",null,"osx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# show all information/stats\nsudo pfctl -sa\n# show rules\nsudo pfctl -sr\n# sanity check edited configuration file\nsudo pfctl -v -n -f /etc/pf.conf\n# load pf with new rules\nsudo pfctl -f /etc/pf.conf\n# enable pf\nsudo pfctl -e\n# disable pf\nsudo pfctl -d\n# add information on the fly\nsudo pfctl -t localsub -T add 127.0.0.0/24\n# flush added rules later\nsudo pfctl -Fa -f /etc/pf.conf\n\nsudo pfctl -si\nsudo pfctl -q\n")),(0,r.kt)("h2",{id:"get-geolocation-of-ip-address"},"Get Geolocation of IP Address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl ipinfo.io/103.216.223.161\n")),(0,r.kt)("h2",{id:"packet-analyzer"},"Packet Analyzer"),(0,r.kt)("h3",{id:"monitor-tcp-packet-on-network-interfaces"},"Monitor TCP packet on network interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# list which interfaces are available for capture\ntcpdump --list-interfaces\n# capture all packets in any interface\nsudo tcpdump --interface any\n# limit the number of packets captured then stop `-c number`\nsudo tcpdump -i any -c 5\n# disable name resolution with using `-n` and port resolution with `-nn` \nsudo tcpdump -i any -c 5 -nn\n# filter packets by protocol, only capture `ICMP` packets\nsudo tcpdump -i any -c 5 icmp\n# capture packets related with host `8.8.8.8`\nsudo tcpdump -i any -c 5 -nn host 8.8.8.8\n# capture packets related with port `80`\nsudo tcpdump -i any -c 5 -nn port 80\n# capture packets with source address 192.168.0.1\nsudo tcpdump -i any -c 5 -nn src 192.168.0.1\n# capture packets with destination address 8.8.8.8\nsudo tcpdump -i any -c 5 -nn dst 8.8.8.8\n# capture either port `80` or port `443`\nsudo tcpdump -i enp0s31f6 -nn port 80 or port 443\n# display payload\nsudo tcpdump -i enp0s31f6 port 80 -A -s 0\n")),(0,r.kt)("p",null,"In the above command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i")," specifies the network interface, and ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," means all interfaces."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c")," specify the number of packets to capture, omitting ",(0,r.kt)("inlineCode",{parentName:"li"},"-c")," to capture packets continuously."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-nn")," display IP address and port as numbers rather than attempting to resolve them to hostname."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-A")," display the packet payload in ASCII format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s 0")," means capturing the entire packet.")),(0,r.kt)("h3",{id:"monitor-http-message-on-network-interfaces"},"Monitor HTTP message on network interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="tcpflow"',title:'"tcpflow"'},"# monitor on the interface: `enp0s31f6`\nsudo tcpflow -p -c -i enp0s31f6 port 80\n# just show HTTP message of `GET` and `POST` HTTP methods\nsudo tcpflow -p -c -i enp0s31f6 port 80 | grep -oE '(GET|POST) .* HTTP/1.[01]|Host: .*'\n")),(0,r.kt)("p",null,"In the above command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p")," disables promiscuous mode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c")," means only print the output to the console and don\u2019t create files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i")," specifies the network interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grep"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o")," means show only the matching parts of the lines that match the pattern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-E")," means the pattern is an extended regular expression (ERE)")))),(0,r.kt)("h2",{id:"usb-virtual-ethernet"},"USB Virtual Ethernet"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://forums.developer.nvidia.com/t/provide-internet-through-micro-usb-while-doing-ssh/111326/14"},"An explanation on the USB virtual ethernet")),(0,r.kt)("h2",{id:"access-wsl-2-from-local-area-networklan"},"Access WSL 2 from local area network(LAN)"),(0,r.kt)("p",null,"After enabling ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/"},"systemd")," in WSL 2, I have to forward the Windows host port to the WSL 2 distribution."),(0,r.kt)("h3",{id:"find-wsl-2-ip-address-that-can-be-reached-from-windows-host"},"Find WSL 2 IP address that can be reached from Windows host"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1420 qdisc mq state UP group default qlen 1000\n    link/ether 00:15:5d:98:b5:99 brd ff:ff:ff:ff:ff:ff\n    inet 172.29.6.23/20 brd 172.29.15.255 scope global eth0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::215:5dff:fe98:b599/64 scope link\n       valid_lft forever preferred_lft forever\n")),(0,r.kt)("h3",{id:"add-proxy"},"Add proxy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"netsh interface portproxy add v4tov4 listenport=8082 connectport=8082 connectaddress=172.29.6.23,127.0.0.1\n")),(0,r.kt)("h3",{id:"optional-add-firewall-rule"},"[Optional]"," Add firewall rule"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'netsh advfirewall firewall add rule name= "Open Port 8082" dir=in action=allow protocol=TCP localport=8082\n')),(0,r.kt)("h3",{id:"check-current-proxy"},"Check current proxy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"netsh interface portproxy show all\n")),(0,r.kt)("h3",{id:"clean-up"},"Clean up"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"netsh interface portproxy delete v4tov4 listenport=8082\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'netsh advfirewall firewall delete rule name="Open port 8082"\n')))}u.isMDXComponent=!0}}]);