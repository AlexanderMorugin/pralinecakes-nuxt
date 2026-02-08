export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/styles/global.scss",
    "~/assets/styles/_variables.scss",
    "~/assets/styles/_fonts.scss",
    "~/assets/styles/_transitions.scss",
    "~/assets/styles/_modal.scss",
    "~/assets/styles/_forms.scss",
    "~/assets/styles/_animation.scss",
  ],

  // modules: ["@nuxt/fonts", "@pinia/nuxt", "nuxt-toast"],
  modules: ["@pinia/nuxt", "nuxt-toast"],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
        },
      ],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
});
