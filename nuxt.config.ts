import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Rico',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        preconnect: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
      }
    ],
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    apiBase: process.env.NUXT_API_BASE || 'http://localhost:5000/v1',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://rico.dantis.me/api/v1',
      githubUrl: process.env.NUXT_PUBLIC_REPO_URL || 'https://github.com/jareddantis-bots/rico'
    }
  }
})
