"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6216],{77047:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/07/19/","metadata":{"permalink":"/journal/2023/07/19/","source":"@site/../../journal/2023-07-19.md","title":"Wednesday, July 19, 2023","description":"[ ] I still prefer os.path over Pathlib, as follows","date":"2023-07-19T00:00:00.000Z","formattedDate":"July 19, 2023","tags":[],"readingTime":1.39,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Sunday, July 16, 2023","permalink":"/journal/2023/07/16/"}},"content":"[ ] I still prefer **os.path** over **Pathlib**, as follows\\n\\n1. Consistency, I\'m used to use path string as an argument between functions and I think **Pathlib** is not flexible enough to handle arguments\\n2. Pure and Function, Although **Pathlib** brings many useful features like `glob`, `stem`, and so on. I still like the concept of simplicity that don\'t put all things together!\\n\\n\\n[ ] Trim `$` for clipboard copy in **Docusaurus** in code block bash.\\n\\n[Ignore `$ ` for clipboard copy \xb7 Issue #1745 \xb7 facebook/docusaurus \xb7 GitHub](https://github.com/facebook/docusaurus/issues/1745)\\n\\n[ ] Some common issues I often hit when using **git**\\n\\nConfigure username/password for different repos or remotes\\n\\nGlobal configuration\\n\\n```sh\\ngit config --global --list\\ngit config --local --list\\n```\\n\\n\\n**GIT** two popular authentication methods:\\n\\n- ssh key\\n\\n[How to Authenticate Your Git to GitHub with SSH Keys](https://hackernoon.com/how-to-authenticate-your-git-to-github-with-ssh-keys)\\n\\n- username/password credentials\\n\\nEnable credentials storage in your Git repository\\n\\n```sh\\n# local\\ngit config credential.helper store\\n# global\\ngit config --global credential.helper store\\n```\\n\\nEach credential is stored in `~/.git-credentials` file on its own line as a URL like:\\n\\n```sh\\nhttps://<USERNAME>:<PASSWORD>@github.com\\n```\\n\\nConfigure credentials,\\n\\n```sh\\n# Global\\ngit config --global credential.https://github.com.username <your_username>\\n\\n# Or \\ngit config --local user.name <your_username>\\ngit config --local user.email <your_useremail>\\n# Then git pull or git push to let it cache your username/password after it prompt you to input password in the first time\\n```\\n\\n\\nAlternatively, we can directly edit our global Git config file `~/.gitconfig`,\\n\\n```sh\\n[credential \\"https://github.com\\"]\\n\\tusername = <username>\\n```\\n\\n[Git - Config Username & Password - Store Credentials - ShellHacks](https://www.shellhacks.com/git-config-username-password-store-credentials/)\\n\\n[Configuring Git Credentials](https://www.baeldung.com/ops/git-configure-credentials)\\n\\n[ ] Programming Algorithms\\n\\nTop Algorithms Every Programmer Should Know\\n\\n[What is Algorithm | Introduction to Algorithms - GeeksforGeeks](https://www.geeksforgeeks.org/introduction-to-algorithms/)"},{"id":"/2023/07/16/","metadata":{"permalink":"/journal/2023/07/16/","source":"@site/../../journal/2023-07-16.md","title":"Sunday, July 16, 2023","description":"Admission program requirements | University of Ottawa","date":"2023-07-16T00:00:00.000Z","formattedDate":"July 16, 2023","tags":[],"readingTime":0.18,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Wednesday, July 19, 2023","permalink":"/journal/2023/07/19/"},"nextItem":{"title":"Thursday, July 14, 2023","permalink":"/journal/2023/07/14/"}},"content":"[Admission program requirements | University of Ottawa](https://www.uottawa.ca/study/graduate-studies/program-specific-requirements)\\n\\n[Faculty of Graduate Studies | University of Calgary](https://grad.ucalgary.ca/future-students/explore-programs)\\n\\n[Graduate Programs - University of Alberta](https://calendar.ualberta.ca/content.php?catoid=39&navoid=12434)\\n\\n[Temporary Foreign Workers - Job Bank](https://www.jobbank.gc.ca/temporary-foreign-workers)\\n\\n20 Common Resume Buzzwords (and What to Use Instead)"},{"id":"/2023/07/14/","metadata":{"permalink":"/journal/2023/07/14/","source":"@site/../../journal/2023-07-14.md","title":"Thursday, July 14, 2023","description":"Best practice:","date":"2023-07-14T00:00:00.000Z","formattedDate":"July 14, 2023","tags":[],"readingTime":1.27,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Sunday, July 16, 2023","permalink":"/journal/2023/07/16/"},"nextItem":{"title":"Tuesday, July 4, 2023","permalink":"/journal/2023/07/04/"}},"content":"Best practice:\\n\\n- [x] Update markdown metadata such as datetime when saving files\\n    [Introduction | Front Matter](https://frontmatter.codes/docs)\\n\\n- [x] Docusaurus refer code snippets from GitHub repositories\\n    [GitHub - saucelabs/docusaurus-theme-github-codeblock: A Docusaurus v2 plugin that supports referencing code examples from public GitHub repositories.](https://github.com/saucelabs/docusaurus-theme-github-codeblock)\\n\\n    ```js reference\\n    https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108\\n    ```\\n\\n    ```js reference\\n    https://github.com/liviaerxin/liviaerxin.github.io/blob/560ce03e8dbf5d32b197ccf307ca36af25b5dacd/code-snippets/XKeyIn.cpp#L55-L72\\n    ```\\n\\n- [x] Test-Driven Development mindset involving CI, CD, documentation, iterative deliveries\\n\\n- [x] Create a local volume to bind a specific local folder, only available in `Linux` below.\\n\\n```sh\\ndocker volume create --opt type=none --opt o=bind --opt device=/data/volumes/testvol testvol\\n```\\n\\n```sh\\n\u279c  ~ docker inspect testvol\\n[\\n    {\\n        \\"CreatedAt\\": \\"2023-07-13T04:36:16Z\\",\\n        \\"Driver\\": \\"local\\",\\n        \\"Labels\\": {},\\n        \\"Mountpoint\\": \\"/var/lib/docker/volumes/testvol/_data\\",\\n        \\"Name\\": \\"testvol\\",\\n        \\"Options\\": {\\n            \\"device\\": \\"/data/volumes/testvol\\",\\n            \\"o\\": \\"bind\\",\\n            \\"type\\": \\"none\\"\\n        },\\n        \\"Scope\\": \\"local\\"\\n    }\\n```\\n\\nIn default, the created volume will just sit on `/var/lib/docker/volumes`\\n\\n```sh\\ndocker volume create defaultvol\\n```\\n\\n```sh\\n\u279c  ~ docker volume inspect defaultvol\\n[\\n    {\\n        \\"CreatedAt\\": \\"2023-07-13T04:51:57Z\\",\\n        \\"Driver\\": \\"local\\",\\n        \\"Labels\\": null,\\n        \\"Mountpoint\\": \\"/var/lib/docker/volumes/defaultvol/_data\\",\\n        \\"Name\\": \\"defaultvol\\",\\n        \\"Options\\": null,\\n        \\"Scope\\": \\"local\\"\\n    }\\n\\n```\\n\\n\\n- [ ] Proxies Server: **Traefik** vs **NGINIX**\\n\\nProxies have become an essential networking component and are frequently used with many popular internet services. Proxy servers facilitate requests and responses between end-users and web servers, providing helpful features that augment routing control, privacy, and security. NGINX and Traefik are the most popular tools currently offering proxy functionality. Both solutions can support traditional server-based deployments and containerized application environments, such as Kubernetes. This article will examine both tools in-depth and cover their pros, cons, and distinguishing features.\\n\\n[Traefik vs NGINX: Use Case Comparison](https://www.kubecost.com/kubernetes-devops-tools/traefik-vs-nginx/)"},{"id":"/2023/07/04/","metadata":{"permalink":"/journal/2023/07/04/","source":"@site/../../journal/2023-07-04.md","title":"Tuesday, July 4, 2023","description":"Resumable upload","date":"2023-07-04T00:00:00.000Z","formattedDate":"July 4, 2023","tags":[],"readingTime":0.36,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Thursday, July 14, 2023","permalink":"/journal/2023/07/14/"},"nextItem":{"title":"Monday, July 3, 2023","permalink":"/journal/2023/07/03/"}},"content":"Resumable upload\\n\\n[app_resumable_upload](../code-snippets/app_resumable_upload.py)\\n[app_resumable_upload](../code-snippets/app_tusd.py)\\n\\n\\n[Implementations | tus.io](https://tus.io/implementations)\\n\\n[Resumable file upload](https://javascript.info/resume-upload)\\n\\n[GitHub - tus/tus-js-client: A pure JavaScript client for the tus resumable upload protocol](https://github.com/tus/tus-js-client)\\n\\n[GitHub - tus/tusd: Reference server implementation in Go of tus: the open protocol for resumable file uploads](https://github.com/tus/tusd)\\n\\nIO, StreamIO, FileIO\\n\\nhigh-level used by asyncio.io in socket/tcp/http:   \\n[Streams \u2014 Python 3.11.4 documentation](https://docs.python.org/3/library/asyncio-stream.html#streamreader)\\n\\nstarlette.Request.stream = http Request Body\\n\\nlow-level:  \\n[io \u2014 Core tools for working with streams \u2014 Python 3.11.4 documentation](https://docs.python.org/3/library/io.html#io.RawIOBase)"},{"id":"/2023/07/03/","metadata":{"permalink":"/journal/2023/07/03/","source":"@site/../../journal/2023-07-03.md","title":"Monday, July 3, 2023","description":"As a backend engineer, there are several core skills that are important for success in the field. These skills include:","date":"2023-07-03T00:00:00.000Z","formattedDate":"July 3, 2023","tags":[],"readingTime":2.79,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Tuesday, July 4, 2023","permalink":"/journal/2023/07/04/"}},"content":"As a backend engineer, there are several core skills that are important for success in the field. These skills include:\\n\\n1. Programming languages: Proficiency in one or more programming languages is crucial for backend development. Common languages for backend engineering include Python, Java, C#, Ruby, and JavaScript (Node.js). It\'s important to have a strong understanding of data structures, algorithms, and object-oriented programming concepts.\\n\\n2. Web frameworks: Familiarity with backend web frameworks is essential. Depending on the language you work with, you should be proficient in frameworks such as Django (Python), Spring (Java), ASP.NET (C#), Ruby on Rails (Ruby), or Express.js (Node.js). These frameworks provide tools and libraries for building robust web applications and services.\\n\\n3. Databases and query languages: Backend engineers often work with databases to store and retrieve data. Understanding relational databases like MySQL, PostgreSQL, or Oracle, as well as NoSQL databases like MongoDB or Redis, is valuable. Additionally, knowledge of SQL (Structured Query Language) for database querying is important.\\n\\n4. API development and integration: Backend engineers frequently design and build APIs (Application Programming Interfaces) to enable communication between different systems and services. You should have experience in designing and implementing RESTful APIs and be familiar with tools like Swagger or OpenAPI.\\n\\n5. Server management and deployment: Understanding server management and deployment processes is essential. Familiarity with cloud platforms like AWS (Amazon Web Services), Azure, or Google Cloud, as well as containerization technologies like Docker and orchestration tools like Kubernetes, is valuable.\\n\\n6. Security and scalability: Backend engineers need to have a strong understanding of security principles to develop secure applications. Knowledge of authentication and authorization mechanisms, data encryption, and handling user input securely is important. Additionally, understanding scalability concepts and techniques for handling high traffic and load balancing can be beneficial.\\n\\n7. Testing and debugging: Proficiency in testing and debugging is crucial to ensure the reliability and stability of backend systems. Knowledge of unit testing frameworks, integration testing, and debugging tools is important to identify and fix issues efficiently.\\n\\n8. Version control systems: Proficiency in version control systems like Git is essential for collaboration and managing code repositories. Understanding branching, merging, and pull requests is important to work effectively in a team.\\n\\n9. Continuous Integration and Continuous Deployment (CI/CD): Familiarity with CI/CD practices and tools like Jenkins, Travis CI, or CircleCI is valuable. Knowledge of automated testing, build pipelines, and deployment workflows is important to streamline development processes.\\n\\n10. Problem-solving and analytical thinking: Backend engineers often face complex problems that require analytical thinking and problem-solving skills. The ability to analyze requirements, break down problems into manageable tasks, and devise efficient solutions is highly valuable.\\n\\nRemember, the specific skills required may vary depending on the organization, industry, and technology stack being used. It\'s important to stay updated with emerging technologies and trends in backend development to remain competitive in the job market.\\n\\n\\nWhy Google Search Journey?\\n\\nGoogle Search Journey groups pages from your search histories by topic or intent, providing a more helpful user experience than just showing a chronological list of pages.\\n\\nSearch can, at times, become a rabbit hole. A user may start out looking to book a trip but then get distracted by work or life- or doing several related searches for things they\'ll need for that trip - and totally forget to book the actual trip.\\n\\nPractice programming skills\\n\\n- leetcode\\n- codewars"}]}')}}]);