// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

const websiteConfig = require('./website_config.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "S' Wiki",
  tagline: 'Dinosaurs are cool to focus on your content',
  favicon: 'https://github.com/liviaerxin.png',

  // Set the production url of your site here
  url: 'https://liviaerxin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: websiteConfig.GITHUB_USER, // Usually your GitHub org/user name.
  projectName: websiteConfig.GITHUB_REPOSITORY, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  plugins: [
    'docusaurus-plugin-sass',
    '@docusaurus/theme-mermaid',
    '@saucelabs/theme-github-codeblock',
    [require.resolve('docusaurus-lunr-search'), {}],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'journal',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: '/journal',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: '../../journal',
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'learning',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: '/learning',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: '../../learning',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Optional: disable the docs plugin
        // {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/',
        //   path: './docs',
        //   showLastUpdateAuthor: true,
        //   showLastUpdateTime: true,
        //   remarkPlugins: [math, simplePlantUML],
        //   rehypePlugins: [katex],
        // },
        blog: {
          // routeBasePath: '/',
          path: '../../blog', // './blog' for local test
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          showReadingTime: true,
          editUrl:
            'https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/', // https://github.com/liviaerxin/liviaerxin.github.io/edit/master/blog/build-system-c++.md
          remarkPlugins: [math, simplePlantUML],
          rehypePlugins: [katex],
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({content}),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "S' Wiki",
        logo: {
          alt: 'My Site Logo',
          src: 'https://github.com/liviaerxin.png',
        },
        hideOnScroll: true,
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/learning', label: 'Learning', position: 'left'},
          {to: '/journal', label: 'Journal', position: 'left'},
          {to: '/portfolio', label: 'Portfolio', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                html: `<a class='footer__link-item' target='_blank' rel='noopener' href='https://github.com/${websiteConfig.GITHUB_USER}'><img class='svg-inline--fa fa-github fa-w-14' src="/img/github-tile.svg"/></a>`,
              },
              {
                html: `<a class='footer__link-item' target='_blank' rel='noopener noreferrer' href='https://stackoverflow.com/users/${websiteConfig.STACKOVERFLOW_USER}'><img class='svg-inline--fa fa-stackoverflow fa-w-14' src="/img/stackoverflow-tile.svg" /></a>`,
              },
              {
                html: `<a class='footer__link-item' target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/${websiteConfig.LINKEDIN_USER}'><img class='svg-inline--fa fa-linkedin fa-w-14' src="/img/linkedin-tile.svg" /></a>`,
              },
            ],
          },
        ],
        copyright: `<span style='font-size: 10px;'>Copyright ©2020-present Frank. Built with Docusaurus.</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp'],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
        options: {
          maxTextSize: 100000,
        },
      },
      sitemap: {
        cacheTime: 6000 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
      },
    }),
};

module.exports = config;
