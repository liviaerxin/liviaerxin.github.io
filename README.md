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
# dev
npm run start --prefix _ssg/docusaurus

# prod
npm run build --prefix _ssg/docusaurus
npm run serve --prefix _ssg/docusaurus
```

[Foam: A personal knowledge management and sharing system for VSCode](https://github.com/foambubble/foam)

[Docusaurus: Easy to maintain open source documentation websites.](https://github.com/facebook/docusaurus)

## References

To be admit I am not good at `UI` design and development, however there many excellent docusaurus showcase in open source.

Thanks to [tinaeldevresse](https://github.com/HunteRoi), I got ideas to design my blog website by referring his [blog library](https://github.com/HunteRoi/tinaeldevresse.eu).

[Grid | Infima](https://infima.dev/docs/layout/grid)

[Bootstrap Icons · Official open source SVG icon library for BootstrapBootstrapGitHubTwitterOpen CollectiveBootstrap](https://icons.getbootstrap.com/)

[Font Awesome](https://fontawesome.com/)

[Tabler Icons - 1400+ Open source free SVG icons](https://tablericons.com/)

[React SVG: How to use SVGs best in React - CopyCat Blog](https://www.copycat.dev/blog/react-svg/)