import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Private Cloud Ways',
  description: 'Private cloud journeys.',
  cleanUrls: false,

  themeConfig: {
    sidebar: {
      '/journeys/edclub/': [
        {
          text: 'Introduction',
          collapsed: true,
          items: [
            { text: 'Our Story', link: '/journeys/edclub/intro/story' },
            { text: 'Vision', link: '/journeys/edclub/intro/vision' },
            { text: 'Assumption', link: '/journeys/edclub/intro/assumption' },
            { text: 'Challenges', link: '/journeys/edclub/intro/challenges' },
            { text: 'Our Stack', link: '/journeys/edclub/intro/stack' },
          ],
        },
        {
          text: 'Infrastructure Overview',
          collapsed: true,
          items: [
            { text: 'Traffic Flow', link: '/journeys/edclub/infrastructure-overview/traffic-flow' },
            { text: 'Inside Network', link: '/journeys/edclub/infrastructure-overview/inside-network' },
            { text: 'Hypervisor', link: '/journeys/edclub/infrastructure-overview/hypervisor' },
            { text: 'Automation', link: '/journeys/edclub/infrastructure-overview/automation' },
            { text: 'Connectivity', link: '/journeys/edclub/infrastructure-overview/connectivity' },
          ],
        },
        {
          text: 'Proxmox VE',
          collapsed: true,
          items: [
            { text: 'Cluster Setup', link: '/journeys/edclub/proxmox-ve/setup' },
            // { text: 'Inside Network', link: '/journeys/edclub/infrastructure-overview/inside-network' },
            // { text: 'Hypervisor', link: '/journeys/edclub/infrastructure-overview/hypervisor' },
            // { text: 'Automation', link: '/journeys/edclub/infrastructure-overview/automation' },
            // { text: 'Connectivity', link: '/journeys/edclub/infrastructure-overview/connectivity' },
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
