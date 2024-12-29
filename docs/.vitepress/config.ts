import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Private Cloud Ways',
  description: 'Private cloud journeys.',
  cleanUrls: false,
  vite: {
    ssr: {
      noExternal: ['hyvor-talk-vue'], // Mark as external during SSR
    },
  },
  themeConfig: {
    sidebar: {
      // '/': [
      //   {
      //     text: 'Journeys',
      //     collapsed: false,
      //     items: [
      //       {
      //         text: 'edclub',
      //         link: '/journeys/edclub/', // Overview of the edclub journey
      //       },
      //     ],
      //   },
      // ],
      '/journeys/edclub/': [
        {
          text: 'Introduction',
          collapsed: true,
          items: [
            { text: 'Our Story', link: '/journeys/edclub/intro/story' },
            { text: 'Mission', link: '/journeys/edclub/intro/mission' },
            { text: 'Assumption', link: '/journeys/edclub/intro/assumption' },
            { text: 'Challenges', link: '/journeys/edclub/intro/challenges' },
            { text: 'Our Stack', link: '/journeys/edclub/intro/stack' },
          ],
        },
        {
          text: 'Infrastructure',
          collapsed: true,
          items: [
            { text: 'Traffic Flow', link: '/journeys/edclub/infrastructure/traffic-flow' },
            { text: 'Inside Network', link: '/journeys/edclub/infrastructure/inside-network' },
            { text: 'Hypervisor', link: '/journeys/edclub/infrastructure/hypervisor' },
            { text: 'Automation', link: '/journeys/edclub/infrastructure/automation' },
          ],
        },
      ],
    },
    editLink: {
      pattern: 'https://github.com/rkiany/PrivateCloudWays/edit/main/docs/:path',
      text: 'Edit this page'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 rkiany'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rkiany/PrivateCloudWays' }
    ],
  },
});
