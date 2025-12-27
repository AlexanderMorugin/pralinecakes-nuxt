export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/styles/global.scss",
    "~/assets/styles/_variables.scss",
    "~/assets/styles/_fonts.scss",
    "~/assets/styles/_transitions.scss",
    "~/assets/styles/_modal.scss",
  ],

  modules: ["@nuxt/fonts", "@pinia/nuxt"],
});