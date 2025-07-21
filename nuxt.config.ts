// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons',
    'reka-ui/nuxt'
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  lucide: {
    namePrefix: 'Icon'
  }
})