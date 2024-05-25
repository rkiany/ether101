import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Efficient Infrastructure',
  description: 'cloud generator.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Goals', link: '/guide/goals' }, // Adjust this if your example is inside the guide folder
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
