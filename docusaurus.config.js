// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Benim site',
  tagline: 'Programlama seviyom',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'furkan_vka', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
       },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Furkan Vural',
        logo: {
          alt: 'Logo',
          src: 'img/logo-light.png',      // Açık tema için
          srcDark: 'img/logo-dark.png',   // Koyu tema için
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gömülüSidebar',
            position: 'left',
            label: 'Gömülü',
          },
          {
            type: 'docSidebar',
            sidebarId: 'yapayzekaSidebar',
            position: 'left',
            label: 'Yapay Zeka',
          },
          {
            type: 'docSidebar',
            sidebarId: 'programlamaSidebar',
            position: 'left',
            label: 'Programlama',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ArastirmaSidebar',
            position: 'left',
            label: 'arastirma',
          }
        ],
      },
      footer: {
        links: [
          {
            title: 'Notlar',
            items: [
              {
                label: 'Gömülü Sistemler',
                to: '/docs/gömülü/giris',
              },
              {
                label: 'Yapay Zeka',
                to: '/docs/yapayzeka/giris',
              },
              {
                label: 'Programlama',
                to: '/docs/programlama/go',
              },
              {
                label: 'Programlama',
                to: '/docs/araştırma/giris',
              },
            ],
          },
          {
            title: 'Topluluk',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/furkan-vural-508b2028b/', 
              },
            ],
          },
          {
            title: 'Diğer',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/furkanvka',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} [Furkan Vural] - Tüm Hakları Saklıdır.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
