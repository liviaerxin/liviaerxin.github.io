// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

const websiteConfig = require('./website_config.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'S\' Wiki',
  tagline: 'Dinosaurs are cool to focus on your content',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://liviaerxin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liviaerxin', // Usually your GitHub org/user name.
  projectName: 'liviaerxin.github.io', // Usually your repo name.

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
    '@docusaurus/theme-mermaid',
    [
      require.resolve("docusaurus-lunr-search"),
      {
      }],
    ['@docusaurus/plugin-content-blog',
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
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs:
          false, // Optional: disable the docs plugin
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
        blog:
        // false,
        {
          // routeBasePath: '/',
          path: '../../blog', // './blog' for local test
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 5,
          blogSidebarCount: 20,
          blogSidebarTitle: 'Recent posts',
          showReadingTime: true,
          editUrl: 'https://github.com/liviaerxin/liviaerxin.github.io/edit/master/_ssg/docusaurus/', // https://github.com/liviaerxin/liviaerxin.github.io/edit/master/blog/build-system-c++.md
          remarkPlugins: [math, simplePlantUML],
          rehypePlugins: [katex],
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({ content }),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'S\' Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'right' },
          { to: "/journal", label: "Journal", position: "right" },
          { to: "/portfolio", label: "Portfolio", position: "right" },
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
                html: `<a class='footer__link-item' target='_blank' rel='noopener noreferrer' href='https://stackoverflow.com/${websiteConfig.STACKOVERFLOW_USER}'><svg role='img' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitter' class='svg-inline--fa fa-twitter fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path xmlns="http://www.w3.org/2000/svg" fill="#F58025" d="M22.9878906,76.73 L77.0128906,88.085 L79.2838906,77.285 L25.2588906,65.925 L22.9878906,76.73 Z M30.1368906,50.861 L80.1828906,74.169 L84.8448906,64.16 L34.7978906,40.852 L30.1368906,50.861 Z M43.9848906,26.308 L86.4128906,61.639 L93.4788906,53.154 L51.0508906,17.824 L43.9848906,26.308 Z M71.3718906,0.192 L62.5118906,6.782 L95.4598906,51.082 L104.319891,44.493 L71.3718906,0.192 Z M22,102 L77,102 L77,91 L22,91 L22,102 Z"/></svg></a>`
              },
              {
                html: `<a class='footer__link-item' target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/${websiteConfig.LINKEDIN_USER}'><svg role='img' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='linkedin' class='svg-inline--fa fa-linkedin fa-w-14' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path></svg></a>`
              },
              {
                html: `<a class='footer__link-item' target='_blank' rel='noopener' href='https://${websiteConfig.GITHUB_USER}.github.io'><svg role='img' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='github' class='svg-inline--fa fa-github fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path fill='currentColor' d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path></svg></a>`
              },
            ]
          }
        ],
        copyright: `<span style='font-size: 10px;'>Copyright ©2020-present Frank. Built with Docusaurus.</span>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp'],
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
        options: {
          maxTextSize: 100000,
        },
      },
      sitemap: {
        cacheTime: 6000 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5
    }
    }),
};

module.exports = config;
