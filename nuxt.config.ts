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
  ],

  modules: ["@nuxt/fonts", "@pinia/nuxt"],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Пралине Shop",
      meta: [
        {
          name: "viewport",
          // content: "width=device-width, initial-scale=1",
          // content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
        },
        {
          name: "description",
          content: "Пралине Shop Пралине Shop Пралине Shop",
        },
      ],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
});
