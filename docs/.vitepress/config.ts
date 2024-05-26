import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Efficient Infrastructure',
  description: 'cloud generator.',

  themeConfig: {
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Vision', link: '/guide/vision' },
            { text: 'Assumption', link: '/guide/assumption' },
            { text: 'Our Stack', link: '/guide/edclub' },
          ],
        },
      ],
      // Optional: Other sections for the sidebar
      '/': [
        {
          text: 'General',
          items: [
            { text: 'Example', link: '/example' },
          ],
        },
      ],
    },
  },
});
