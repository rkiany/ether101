<template>
    <Layout>
      <Analytics />
    </Layout>
  </template>
  
  <script setup>
  import { Analytics } from '@vercel/analytics/react'
  import DefaultTheme from 'vitepress/theme'
  
  const { Layout } = DefaultTheme
  </script>