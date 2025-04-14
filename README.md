# Personal Blog Powered By Foam and Docusaurus

The content and the **Static Site Generator** (**SSG**) are decoupled into two separated folders.

To organize and present my learning content, I have employed both of **Docs** and **Blog** features in **Docusaurus** while creating these markdown files with **template** feature in **Foam**.


## Project Structure

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
|-- code-snippets
|   |-- assembly
|   |-- c
|   |-- cpp
|   |-- docker-compose
|   |-- dockerfile
|   `-- python
└── docs
```

I also include my daily codebase repos into the `code-snippets/` folder, including:
- `assembly`: [https://github.com/liviaerxin/hello-assembly.git](https://github.com/liviaerxin/hello-assembly.git)
- `c`: [https://github.com/liviaerxin/hello-c.git](https://github.com/liviaerxin/hello-c.git)
- `cpp`: [https://github.com/liviaerxin/hello-cpp.git](https://github.com/liviaerxin/hello-cpp.git)
- `docker-compose`: [https://github.com/liviaerxin/hello-docker-compose.git](https://github.com/liviaerxin/hello-docker-compose.git)
- `docker`: [https://github.com/liviaerxin/hello-docker.git](https://github.com/liviaerxin/hello-docker.git)
- `python`: [https://github.com/liviaerxin/hello-python.git](https://github.com/liviaerxin/hello-python.git)

## Detailed features

- **Foam**: knowledge management system for providing rich features in `vscode`.
  - Graph Visualization
  - Link Autocompletion
  - Sync links on file rename
  - Templates
  - Generate references for your wikilinks
  - ...
- **Docusaurus**: static site generator (**SSG** ) to build a static site from `Foam` knowledge content.
  - SEO friendly
  - Powered by MDX
  - Search
  - Document Versioning
  - Internationalization (i18n)
- **GitHub Actions**: deploy to GitHub Pages.

## Get started

Installing dependencies,

```sh
# `npm`
npm install --prefix _ssg/docusaurus

# or `yarn`
yarn --cwd _ssg/docusaurus
```

For development, running up as

```sh
# `npm`
npm run start --prefix _ssg/docusaurus
npm run start --prefix _ssg/docusaurus -- --host 0.0.0.0

# or `yarn`
yarn --cwd _ssg/docusaurus start
```

For production, building the package then serving,

```sh
# `npm`
npm run build --prefix _ssg/docusaurus
npm run serve --prefix _ssg/docusaurus -- --host 0.0.0.0

# or `yarn`
yarn --cwd _ssg/docusaurus build
yarn --cwd _ssg/docusaurus serve --host 0.0.0.0
```

[Foam: A personal knowledge management and sharing system for VSCode](https://github.com/foambubble/foam)

[Docusaurus: Easy to maintain open source documentation websites.](https://github.com/facebook/docusaurus)


## About Docusaurus

### Submodules

First time,

```sh
git clone --recursive https://github.com/liviaerxin/liviaerxin.github.io.git
```

or

```sh
git clone https://github.com/liviaerxin/liviaerxin.github.io.git
cd liviaerxin.github.io.git
git submodule update --init --recursive
```

After first clone,

Pull the latest commits for submodules

```sh
git submodule foreach git pull
```

or

```sh
git submodule update --remote --rebase
#or
git submodule update --remote --merge
```

only `git submodule update --remote` will update all commits and check the latest commit of submodule but do not move the submodule `main` branch to the commit. So using `--rebase` or `--merge` to merge the `main` branch into the branch `origin/main`.

Pull the commits pointed by the parent repo for submodules

```sh
git submodule update
```

### Swizzling

Here're `@docusaurus/theme-classic` components being customized by swizzling,

```sh
npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap --typescript
npm run swizzle @docusaurus/theme-classic BlogPostItem/Footer/ReadMoreLink -- --eject --typescript
npm run swizzle @docusaurus/theme-classic BlogTagsPostsPage -- --eject --typescript
npm run swizzle @docusaurus/theme-classic SearchBar -- --eject --typescript
```

### Layout

[Grid | Infima](https://infima.dev/docs/layout/grid)

### CSS Styles

[Colors | Infima](https://infima.dev/docs/utilities/colors)

I used the default colors shades from **Infima**.

### Icon Management

[Bootstrap Icons · Official open source SVG icon library for BootstrapBootstrapGitHubTwitterOpen CollectiveBootstrap](https://icons.getbootstrap.com/)

[Font Awesome](https://fontawesome.com/)

[Tabler Icons - 1400+ Open source free SVG icons](https://tablericons.com/)

[React SVG: How to use SVGs best in React - CopyCat Blog](https://www.copycat.dev/blog/react-svg/)

### Metadata Setting

[📦 plugin-content-blog | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter)

[📦 plugin-content-docs | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)

### Front Matter VS Code Extension

[Introduction | Front Matter](https://frontmatter.codes/docs)

### Import Code from GitHub Repository

Docusaurus refer code snippets from GitHub repositories

[GitHub - saucelabs/docusaurus-theme-github-codeblock: A Docusaurus v2 plugin that supports referencing code examples from public GitHub repositories.](https://github.com/saucelabs/docusaurus-theme-github-codeblock)

### References

To be admit I am not good at `UI` design and development, however there many excellent docusaurus showcase in open source.

Thanks to [tinaeldevresse](https://github.com/HunteRoi), I got ideas to design my blog website by referring his [blog library](https://github.com/HunteRoi/tinaeldevresse.eu).

## Changelogs

## 20240514

After several quiet months without maintaining my site and writing new posts, today I update my Docusaurus version from `2.4.3` to `3.3.2`. It feels like a significant leap with many breaking changes. Let me try!


## 20241005

As I create more and more Git repositories, it's becoming increasingly difficult to keep track of them all, especially the ones I haven't used in over six months. I'm prone to forgetting about them. However, since this repository, my personal repository, is where I work in my daily life, I've decided to consolidate my other Git repositories into this one for quick reference when needed.
