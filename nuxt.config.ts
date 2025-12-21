export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: [
    "~/assets/styles/global.css",
    "~/assets/styles/_variables.css",
    "~/assets/styles/_fonts.css",
  ],

  modules: ["@nuxt/fonts"],
});
