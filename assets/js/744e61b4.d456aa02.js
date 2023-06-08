"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="Graphical User Interface(GUI)",o={permalink:"/blog/graphical-user-interface",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../blog/graphical-user-interface.md",source:"@site/../../blog/graphical-user-interface.md",title:"Graphical User Interface(GUI)",description:"Modern GUI composition of:",date:"2023-06-08T13:58:06.000Z",formattedDate:"June 8, 2023",tags:[],readingTime:1.155,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Data Center",permalink:"/blog/data-center"},nextItem:{title:"OpenCV tips",permalink:"/blog/opencv-tips"}},p={authorsImageUrls:[]},c=[{value:"Android graphics",id:"android-graphics",level:2},{value:"WayLand",id:"wayland",level:2}],d={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern GUI composition of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windowing System/Compositor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Quartz Compositor(OSX)"),(0,r.kt)("li",{parentName:"ul"},"Desktop Window Manager(Windows)"),(0,r.kt)("li",{parentName:"ul"},"X11(Linux)"),(0,r.kt)("li",{parentName:"ul"},"Wayland(Linux)"),(0,r.kt)("li",{parentName:"ul"},"SurfaceFlinger(Android)"))),(0,r.kt)("li",{parentName:"ul"},"Graphic Rendering",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hardware-Accelerated Rendering",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OpenGL"),(0,r.kt)("li",{parentName:"ul"},"Vulkan"),(0,r.kt)("li",{parentName:"ul"},"DirectX"))),(0,r.kt)("li",{parentName:"ul"},"Software Rendering",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"QT Rasterization Engine")))))),(0,r.kt)("p",null,"Windowing System"),(0,r.kt)("p",null,"It's very essential to apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"native Windowing System")," library for Cross-platform GUI framework in different platforms. Here's a cue from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/glfw/glfw/blob/3a60992a418aad88717db32353bec22e8bb7dab3/include/GLFW/glfw3native.h#L94-L118"},"including native windowing system headers from GLFW")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#if !defined(GLFW_NATIVE_INCLUDE_NONE)\n #if defined(GLFW_EXPOSE_NATIVE_WIN32) || defined(GLFW_EXPOSE_NATIVE_WGL)\n  /* This is a workaround for the fact that glfw3.h needs to export APIENTRY (for\n   * example to allow applications to correctly declare a GL_KHR_debug callback)\n   * but windows.h assumes no one will define APIENTRY before it does\n   */\n  #if defined(GLFW_APIENTRY_DEFINED)\n   #undef APIENTRY\n   #undef GLFW_APIENTRY_DEFINED\n  #endif\n  #include <windows.h>\n #elif defined(GLFW_EXPOSE_NATIVE_COCOA) || defined(GLFW_EXPOSE_NATIVE_NSGL)\n  #if defined(__OBJC__)\n   #import <Cocoa/Cocoa.h>\n  #else\n   #include <ApplicationServices/ApplicationServices.h>\n   #include <objc/objc.h>\n  #endif\n #elif defined(GLFW_EXPOSE_NATIVE_X11) || defined(GLFW_EXPOSE_NATIVE_GLX)\n  #include <X11/Xlib.h>\n  #include <X11/extensions/Xrandr.h>\n #elif defined(GLFW_EXPOSE_NATIVE_WAYLAND)\n  #include <wayland-client.h>\n #endif\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Windowing_system"},"Windowing system - Wikipedia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/linux/gui"},"GUI Under Linux | Baeldung on Linux")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GTK"},"GTK - Wikipedia")),(0,r.kt)("p",null,"Graphic Render APIs/Libraries"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://alain.xyz/blog/comparison-of-modern-graphics-apis"},"A Comparison of Modern Graphics APIs")),(0,r.kt)("h2",{id:"android-graphics"},"Android graphics"),(0,r.kt)("p",null,"two core pieces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SurfaceFlinger"),(0,r.kt)("li",{parentName:"ul"},"Skia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://source.android.com/devices/graphics"},"Graphics \xa0|\xa0 Android Open Source Project"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4579573/android-graphics-internals"},"Android Graphics Internals - Stack Overflow")),(0,r.kt)("h2",{id:"wayland"},"WayLand"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bugaevc.gitbooks.io/writing-wayland-clients/content/about-this-book/what-is-wayland.html"},"What is Wayland? \xb7 Writing Wayland clients")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hdante.wordpress.com/2014/07/08/the-hello-wayland-tutorial/"},"The Hello Wayland Tutorial | FLOSS & Cia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@bugaevc/how-to-use-wayland-with-c-to-make-a-linux-app-c2673a35ce05"},"How to use Wayland with C to make a Linux app | by Sergey Bugaev | Medium")))}s.isMDXComponent=!0}}]);