"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>w});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,w=u["".concat(c,".").concat(k)]||u[k]||f[k]||l;return n?r.createElement(w,a(a({ref:t},s),{},{components:n})):r.createElement(w,a({ref:t},s))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const l={keywords:["KillSwitch"],tags:["network","network/vpn","KillSwitch"]},a="KillSwitch",o={unversionedId:"network/vpn/kill-switch",id:"network/vpn/kill-switch",title:"KillSwitch",description:"KillSwitch could be used to block outgoing traffic when the VPN connection drops and crashes.",source:"@site/../../docs/network/vpn/kill-switch.md",sourceDirName:"network/vpn",slug:"/network/vpn/kill-switch",permalink:"/docs/network/vpn/kill-switch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../../docs/network/vpn/kill-switch.md",tags:[{label:"network",permalink:"/docs/tags/network"},{label:"network/vpn",permalink:"/docs/tags/network-vpn"},{label:"KillSwitch",permalink:"/docs/tags/kill-switch"}],version:"current",lastUpdatedBy:"frankchen",lastUpdatedAt:1685673287,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{keywords:["KillSwitch"],tags:["network","network/vpn","KillSwitch"]},sidebar:"tutorialSidebar",previous:{title:"VPN",permalink:"/docs/network/vpn/"},next:{title:"Skia",permalink:"/docs/skia"}},c={},p=[{value:"PF(packet filter) MacOS",id:"pfpacket-filter-macos",level:2},{value:"Set Up Firewall to Allow Access Only via VPN(KillSwitch)",id:"set-up-firewall-to-allow-access-only-via-vpnkillswitch",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"killswitch"},"KillSwitch"),(0,i.kt)("p",null,"KillSwitch could be used to block outgoing traffic when the VPN connection drops and crashes."),(0,i.kt)("h2",{id:"pfpacket-filter-macos"},"PF(packet filter) MacOS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://iyanmv.medium.com/setting-up-correctly-packet-filter-pf-firewall-on-any-macos-from-sierra-to-big-sur-47e70e062a0e"},"Setting up correctly Packet Filter (pf) firewall on any macOS")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://superuser.com/questions/468919/prevent-outgoing-traffic-unless-openvpn-connection-is-active-using-pf-conf-on-ma"},"Prevent outgoing traffic unless OpenVPN connection is active using pf.conf on Mac OS X")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.neilsabol.site/post/quickly-easily-adding-pf-packet-filter-firewall-rules-macos-osx/"},"Quick and easy pf (packet filter) firewall rules on macOS")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://krypted.com/mac-security/a-cheat-sheet-for-using-pf-in-os-x-lion-and-up/"},"A Cheat Sheet For Using pf in OS X Lion and Up")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://murusfirewall.com/Documentation/OS%20X%20PF%20Manual.pdf"},"OS X PF Manual")),(0,i.kt)("h2",{id:"set-up-firewall-to-allow-access-only-via-vpnkillswitch"},"Set Up Firewall to Allow Access Only via VPN(KillSwitch)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zorrovpn.com/articles/windows-firewall-vpn-only?lang=en"},"ENABLING VPN-ONLY ACCESS TO THE INTERNET WITH WINDOWS FIREWALL")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vpn-kill-switch/killswitch"},"KillSwitch for macOS")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://superuser.com/questions/468919/prevent-outgoing-traffic-unless-openvpn-connection-is-active-using-pf-conf-on-ma"},"Prevent outgoing traffic unless OpenVPN connection is active using pf.conf on Mac OS X")))}f.isMDXComponent=!0}}]);