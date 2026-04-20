import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'HAMK Teaching Portal',
  tagline: "Master's and Bachelor's course hub",
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://mazarbaloch.github.io',
  baseUrl: '/hamk-teaching-portal/',
  organizationName: 'mazarbaloch',
  projectName: 'hamk-teaching-portal',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'HAMK Teaching Portal',
      logo: {
        alt: 'HAMK Teaching Portal Logo',
        src: 'img/HAMK_Logo.png',
      },
      items: [
        {to: '/masters', label: "Master's Courses", position: 'left'},
        {to: '/bachelors', label: "Bachelor's Courses", position: 'left'},
        {to: '/resources', label: 'Resources', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/docs/', label: 'Docs Hub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Portal',
          items: [
            {label: 'Home', to: '/'},
            {label: "Master's Courses", to: '/masters'},
            {label: "Bachelor's Courses", to: '/bachelors'},
          ],
        },
        {
          title: 'Docs',
          items: [
            {label: 'Docs Hub', to: '/docs/'},
            {label: 'Teaching Toolkit', to: '/docs/resources/teaching-toolkit'},
            {label: 'Assessment Patterns', to: '/docs/resources/assessment-patterns'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Resources', to: '/resources'},
            {label: 'About', to: '/about'},
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} HAMK Teaching Portal`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
