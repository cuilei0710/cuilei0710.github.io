import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';

import editLink from './config/editLink';
import footer from './config/footer';
import head from './config/head';
import nav from './config/nav';
import rewrites from './config/rewrites';
import search from './config/search';
import socialLinks from './config/socialLinks';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'LEARNO',
  description: 'Mario Leo Personal Notes',
  head,
  cleanUrls: true,
  rewrites,
  srcExclude: ['**/README.md', '**/TODO.md'],
  ignoreDeadLinks: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://cuilei0710.github.io',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks,

    footer,

    editLink,

    search,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
    },
  },
});
