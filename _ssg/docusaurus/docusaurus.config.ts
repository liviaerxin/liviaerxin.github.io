// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

import websiteConfig from './website_config.json';

const config: Config = {
  title: "Frank' Wiki",
  tagline: '',
  // tagline: 'Learn in practice',
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

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  markdown: {
    mermaid: true,
  },

  plugins: [
    'docusaurus-plugin-sass',
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-github-codeblock',
    [require.resolve('docusaurus-lunr-search'), {}],
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
      {
        docs: {
          routeBasePath: '/docs',
          path: '../../docs',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath, simplePlantUML],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        // blog: {
        //   // routeBasePath: '/',
        //   path: '../../journal', // './blog' for local test
        //   blogTitle: 'Docusaurus blog!',
        //   blogDescription: 'A Docusaurus powered blog!',
        //   // postsPerPage: 'ALL',
        //   blogSidebarTitle: 'Recent posts',
        //   blogSidebarCount: 20, // "ALL",
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/', // https://github.com/liviaerxin/liviaerxin.github.io/edit/master/blog/build-system-c++.md
        //   remarkPlugins: [remarkMath, simplePlantUML],
        //   rehypePlugins: [rehypeKatex],
        //   readingTime: ({content, frontMatter, defaultReadingTime}) =>
        //     frontMatter.hide_reading_time
        //       ? undefined
        //       : defaultReadingTime({content}),
        // },
        theme: {
          customCss: './src/css/custom.scss',
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    // docs: {
    //   sidebar: {
    //     hideable: true,
    //     autoCollapseCategories: true,
    //   },
    // },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'powershell',
        'csharp',
        'bash',
        'python',
        'plsql',
        'sql',
        'editorconfig',
        'log',
        'regex',
        'armasm',
        'nasm',
      ],
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
    // github codeblock theme configuration
    codeblock: {
      showGithubLink: true,
      githubLinkLabel: 'View on GitHub',
      showRunmeLink: false,
      runmeLinkLabel: 'Checkout via Runme',
    },
    navbar: {
      hideOnScroll: true,
      title: "Frank",
      logo: {
        alt: 'My Site Logo',
        src: 'https://github.com/liviaerxin.png',
      },
      items: [
        // When type: 'default', it is [Navbar link](https://docusaurus.io/docs/api/themes/configuration#navbar-link)
        // {
        //   to: '/docs/introduction',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'docs',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/tags', label: 'Tags', position: 'right'},
        {to: '/portfolio', label: 'Portfolio', position: 'right'},
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
  } satisfies Preset.ThemeConfig,
} satisfies Config;

export default config;
