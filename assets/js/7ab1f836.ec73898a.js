"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8781],{40044:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});var i=r(74848),a=r(28453);const o={},t="Monday, April 15, 2024",n={permalink:"/blog/2024/04/15/",editUrl:"https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/../../journal/2024-04-15.md",source:"@site/../../journal/2024-04-15.md",title:"Monday, April 15, 2024",description:"Cylinder-Head-Sector (CHS)",date:"2024-04-15T00:00:00.000Z",tags:[],readingTime:6.715,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Tuesday, April 16, 2024",permalink:"/blog/2024/04/16/"},nextItem:{title:"Friday, April 12, 2024",permalink:"/blog/2024/04/12/"}},d={authorsImageUrls:[]},l=[{value:"Cylinder-Head-Sector (CHS)",id:"cylinder-head-sector-chs",level:2},{value:"Check <strong>S.M.A.R.T.</strong> information of a disk in macOS",id:"check-smart-information-of-a-disk-in-macos",level:2},{value:"Repair storage drive in Windows",id:"repair-storage-drive-in-windows",level:2},{value:"What are bad sectors in the disk?",id:"what-are-bad-sectors-in-the-disk",level:2},{value:"How to repair bad sectors?",id:"how-to-repair-bad-sectors",level:2},{value:"Data recovery tools",id:"data-recovery-tools",level:2},{value:"Disk Repair Tools",id:"disk-repair-tools",level:2},{value:"Disk Drill",id:"disk-drill",level:3},{value:"DiskGenius",id:"diskgenius",level:3},{value:"Resources",id:"resources",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"cylinder-head-sector-chs",children:"Cylinder-Head-Sector (CHS)"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Cylinder-head-sector",children:"Cylinder, head, and sector of a hard drive"})}),"\n",(0,i.jsxs)(s.h2,{id:"check-smart-information-of-a-disk-in-macos",children:["Check ",(0,i.jsx)(s.strong,{children:"S.M.A.R.T."})," information of a disk in macOS"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"brew install smartmontools\n\nsmartctl -a disk0s3\n"})}),"\n",(0,i.jsx)(s.h2,{id:"repair-storage-drive-in-windows",children:"Repair storage drive in Windows"}),"\n",(0,i.jsx)(s.p,{children:"Repairing an storage drive in PowerShell usually involves checking and repairing its file system. PowerShell provides cmdlets for performing file system checks and repairs. Here's a basic approach to repair an external drive using PowerShell:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Check Disk for Errors"}),": Use the ",(0,i.jsx)(s.code,{children:"Repair-Volume"})," cmdlet to check the external drive for errors. This cmdlet scans the file system and fixes any issues it finds."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-powershell",children:"Repair-Volume -DriveLetter E\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Replace ",(0,i.jsx)(s.code,{children:"E"})," with the drive letter of your external drive."]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Check File System Integrity"}),": You can also use ",(0,i.jsx)(s.code,{children:"chkdsk"})," (Check Disk) command-line tool via PowerShell to check and repair file system errors. Run the following command:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-powershell",children:"chkdsk /f /r /x E:\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Replace ",(0,i.jsx)(s.code,{children:"E:"})," with the drive letter of your external drive."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/f"}),": Fixes errors on the disk."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/r"}),": Locates bad sectors and recovers readable information."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/x"}),": Forces the volume to dismount first if necessary."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Please note that repairing an external drive could result in data loss, so it's recommended to back up important data before proceeding. Additionally, you might need to run PowerShell with administrative privileges (",(0,i.jsx)(s.code,{children:"Run as administrator"}),") for these commands to work properly."]}),"\n",(0,i.jsx)(s.h2,{id:"what-are-bad-sectors-in-the-disk",children:"What are bad sectors in the disk?"}),"\n",(0,i.jsx)(s.p,{children:"Bad sectors, also known as bad blocks, are sections on a disk drive that are physically damaged or unable to reliably store data. They can occur on various types of storage media, including hard disk drives (HDDs), solid-state drives (SSDs), USB drives, SD cards, and more."}),"\n",(0,i.jsx)(s.p,{children:"There are two types of bad sectors:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Logical Bad Blocks"}),": Logical bad blocks occur due to software issues or file system errors. These blocks may become inaccessible or unusable due to file system corruption, improper shutdowns, or other software-related issues. Running disk repair tools or performing file system checks can often resolve logical bad blocks."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Physical Bad Blocks"}),": Physical bad blocks are caused by physical damage to the disk surface or storage medium. These blocks cannot reliably store data and may lead to data loss or corruption. Physical bad blocks may occur due to factors such as manufacturing defects, wear and tear over time, exposure to environmental factors like heat or moisture, or physical shocks."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"It's important to address bad blocks on a disk drive as they can lead to data loss, system instability, or hardware failure. Regularly scanning for and repairing bad blocks, as well as maintaining up-to-date backups of important data, can help mitigate the risks associated with disk drive issues."}),"\n",(0,i.jsx)(s.h2,{id:"how-to-repair-bad-sectors",children:"How to repair bad sectors?"}),"\n",(0,i.jsx)(s.p,{children:"Bad sectors, also known as bad blocks, are sections of a disk drive's surface that are physically damaged or malfunctioning. When a sector becomes bad, it may no longer reliably store data, leading to potential data loss or corruption. Repairing bad sectors involves attempting to either recover or mark these problematic sectors to prevent data from being written to them in the future."}),"\n",(0,i.jsx)(s.p,{children:"There are two main approaches to repairing bad sectors:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Recovery"}),": In some cases, data stored in a bad sector can still be recovered. Disk repair tools may attempt to read the data from a bad sector multiple times to recover as much information as possible. If successful, the data can then be relocated to a good sector on the disk."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Marking"}),": If data recovery is not possible or if the sector is too damaged to reliably store data, the bad sector can be marked as unusable. This process involves informing the disk's file system that the sector is bad, preventing data from being written to it in the future. The disk's firmware may also remap the bad sector to a spare sector on the disk if available."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"It's important to note that while marking bad sectors can prevent further data loss, it does not repair the physical damage to the disk. Over time, additional bad sectors may develop, especially on aging or damaged disk drives. Regularly scanning for and repairing bad sectors, as well as maintaining up-to-date backups of important data, can help mitigate the risks associated with disk drive issues."}),"\n",(0,i.jsx)(s.h2,{id:"data-recovery-tools",children:"Data recovery tools"}),"\n",(0,i.jsx)(s.p,{children:"Yes, there are several free data recovery tools available that offer similar functionality to EaseUS Data Recovery Wizard. Here are a few options:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"DMDE"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Recuva"}),": Recuva is a popular and user-friendly data recovery tool developed by Piriform (now owned by CCleaner). It can recover deleted files from hard drives, SSDs, USB drives, memory cards, and more. Recuva offers both a free version and a paid version with additional features."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"PhotoRec"}),": PhotoRec is an open-source data recovery utility that specializes in recovering lost files, including photos, videos, documents, and archives, from a wide range of storage devices. It's available for Windows, macOS, and Linux."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"TestDisk"}),": TestDisk is a powerful open-source tool for recovering lost partitions and fixing disk-related issues. It works alongside PhotoRec and can help recover lost partitions and repair damaged file systems."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Disk Drill"}),": Disk Drill offers a free version that allows you to recover up to 500 MB of data for free. It supports file recovery from various storage devices, including hard drives, SSDs, USB drives, and memory cards. Disk Drill is available for Windows and macOS."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Puran File Recovery"}),": Puran File Recovery is a lightweight and easy-to-use data recovery tool that can recover deleted files from hard drives, USB drives, memory cards, and other storage devices. It offers a simple interface and is available for Windows."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"These are just a few examples of free data recovery tools available. Each tool has its own set of features, limitations, and compatibility with different storage devices and file systems. It's essential to research and choose the tool that best fits your specific data recovery needs. Additionally, remember to always use data recovery tools with caution and avoid writing new data to the storage device until you've completed the recovery process to minimize the risk of overwriting lost data."}),"\n",(0,i.jsx)(s.h2,{id:"disk-repair-tools",children:"Disk Repair Tools"}),"\n",(0,i.jsx)(s.h3,{id:"disk-drill",children:"Disk Drill"}),"\n",(0,i.jsx)(s.p,{children:"Disk Drill is a legitimate data recovery application developed by CleverFiles. It's widely used and has generally positive reviews from users and technology publications. The application is known for its ease of use and effectiveness in recovering deleted files from various storage devices such as hard drives, USB drives, memory cards, and more."}),"\n",(0,i.jsx)(s.p,{children:"However, it's essential to download Disk Drill from the official CleverFiles website or reputable app stores to ensure that you're getting the legitimate version of the software. Like any software, there's always a risk of downloading from unofficial sources, which may lead to malware or other security issues."}),"\n",(0,i.jsx)(s.p,{children:"Always be cautious when downloading and installing software, and ensure that you're using a reputable source to obtain the application. Additionally, it's advisable to read user reviews and research the software before downloading to ensure that it meets your needs and is trustworthy."}),"\n",(0,i.jsx)(s.h3,{id:"diskgenius",children:"DiskGenius"}),"\n",(0,i.jsx)(s.p,{children:"DiskGenius is a reputable disk management and data recovery software developed by Eassos Ltd. It offers a wide range of features, including partition management, data backup, data recovery, disk cloning, and more."}),"\n",(0,i.jsx)(s.p,{children:"DiskGenius has generally positive reviews from users and technology publications, and it's known for its effectiveness in recovering lost or deleted files, repairing disk errors, and managing disk partitions."}),"\n",(0,i.jsx)(s.p,{children:"However, like any software, its reliability can depend on various factors, including the specific use case, the condition of the disk being worked on, and user experience. It's essential to download DiskGenius from the official website or reputable sources to ensure that you're getting the legitimate version of the software."}),"\n",(0,i.jsx)(s.p,{children:"Before using any data recovery or disk management software, it's a good idea to research user reviews, check for any known issues or limitations, and ensure that the software meets your specific needs. Additionally, always make sure to back up your important data before performing any disk-related operations to prevent data loss."}),"\n",(0,i.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://www.diskgenius.com/how-to/bad-sector-repair-software.php",children:"How to Check and Repair Bad Sectors for Hard Drives or USB Drives?"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>n});var i=r(96540);const a={},o=i.createContext(a);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);