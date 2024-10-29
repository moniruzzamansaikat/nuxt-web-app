import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'primeicons/primeicons.css',
    '@/assets/styles/main.css'
  ],
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'light', // Set to light mode
          cssLayer: false
        }
      }
    }
  }
})
