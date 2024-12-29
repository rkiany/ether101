import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Add Vercel Analytics
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.setAttribute('src', '/_vercel/insights/script.js')
      document.head.appendChild(script)
    }
  }
} satisfies Theme