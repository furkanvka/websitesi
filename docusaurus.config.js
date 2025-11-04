// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Benim site',
  tagline: 'Programlama seviyom',
  favicon: 'img/favicon.ico',

  // Site URL
  url: 'https://furkanvural.net',
  baseUrl: '/',

  // GitHub pages config
  organizationName: 'furkan',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      colorMode: {
        defaultMode: 'light',           // Her zaman aydınlık tema
        disableSwitch: true,            // Tema değiştirme butonunu gizle
        respectPrefersColorScheme: false, // Sistem temasını dikkate alma
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'img/logo-light.png',    // Her zaman açık tema logosu
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
            label: 'Araştırma',
          },
        ],
      },
      footer: {
        links: [
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
        copyright: `© ${new Date().getFullYear()} Furkan Vural - Tüm Hakları Saklıdır.`,
      },
      prism: {
        theme: prismThemes.github, // Sadece açık tema kullanılacak
      },
    }),
};

export default config;
