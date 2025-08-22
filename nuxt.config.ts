// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css", "~/assets/styles/global.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-lucide-icons",
    "reka-ui/nuxt",
    "motion-v/nuxt"
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  lucide: {
    namePrefix: "Icon",
  },
});
