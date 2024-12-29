import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Add Vercel Analytics script only on the client side
    if (typeof window !== 'undefined') {
      // Add Vercel Analytics
      const script = document.createElement('script');
      script.setAttribute('src', '/_vercel/insights/script.js');
      document.head.appendChild(script);

      // Dynamically import Hyvor Talk only on the client side
      import('hyvor-talk-vue')
        .then(({ Embed }) => {
          app.component('HyvorTalkEmbed', Embed);
        })
        .catch((error) => {
          console.error('Failed to load Hyvor Talk:', error);
        });
    }
  },
} satisfies Theme;
