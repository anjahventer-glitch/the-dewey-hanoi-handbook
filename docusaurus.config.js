// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Hanoi Handbook',
  tagline: 'Everything you need to live, work and thrive in Hanoi',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

url: 'https://anjahventer-glitch.github.io',
baseUrl: '/the-dewey-hanoi-handbook/',
organizationName: 'anjahventer-glitch',
projectName: 'the-dewey-hanoi-handbook',


  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: false,

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
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Home',

        logo: {
          alt: 'Home',
          src: 'img/favicon.png',
          href: '/home',
        },

        items: [
          {
            to: '/docs/living',
            label: 'Living',
            position: 'left',
          },
          {
            to: '/docs/getting-around',
            label: 'Getting Around',
            position: 'left',
          },
          {
            to: '/docs/food-and-drink',
            label: 'Food & Drink',
            position: 'left',
          },
          {
            to: '/docs/healthcare',
            label: 'Healthcare',
            position: 'left',
          },
          {
            to: '/docs/culture',
            label: 'Culture',
            position: 'left',
          },
          {
            to: '/docs/shopping',
            label: 'Shopping',
            position: 'left',
          },
          {
            to: '/docs/explore-vietnam',
            label: 'Explore Vietnam',
            position: 'left',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [],
        copyright: `
          © ${new Date().getFullYear()} The Dewey Schools THT Hanoi Handbook
          <br />
          Created by Anjah Venter
        `,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;