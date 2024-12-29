import { Analytics } from '@vercel/analytics/react'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Analytics', Analytics)
  }
} satisfies Theme