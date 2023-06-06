# Personal Blog Powered By Foam and Docusaurus

Tech Stacks behind:

- `Foam`: knowledge management system for providing rich features in `vscode`.
  - Graph Visualization
  - Link Autocompletion
  - Sync links on file rename
  - Templates
  - Generate references for your wikilinks
  - ...
- `Docusaurus`: static site generator to build a static site from `Foam` knowledge content.
  - SEO friendly
  - Powered by MDX
  - Search
  - Document Versioning
  - Internationalization (i18n)
- `GitHub Actions`: deploy to GitHub Pages.

Project Structure:

```sh
❯ tree -L 3
.
├── README.md
├── _layouts
├── _ssg
│   └── docusaurus
│       ├── babel.config.js
│       ├── build
│       ├── docusaurus.config.js
│       ├── package-lock.json
│       ├── package.json
│       ├── sidebars.js
│       ├── src
│       └── static
├── assets
├── attachments
├── blog
└── docs
```

Local test:

```sh
npm run start --prefix _ssg/docusaurus
npm run build --prefix _ssg/docusaurus
```

[Foam: A personal knowledge management and sharing system for VSCode](https://github.com/foambubble/foam)

[Docusaurus: Easy to maintain open source documentation websites.](https://github.com/facebook/docusaurus)