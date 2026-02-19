export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  css: [
    "~/assets/styles/global.scss",
    "~/assets/styles/_variables.scss",
    "~/assets/styles/_fonts.scss",
    "~/assets/styles/_transitions.scss",
    "~/assets/styles/_modal.scss",
    "~/assets/styles/_forms.scss",
    "~/assets/styles/_animation.scss",
  ],
  // modules: ["@pinia/nuxt", "nuxt-toast", "nuxt-nodemailer"],
  modules: ["@pinia/nuxt", "nuxt-toast"],
  // nitro: {
  //   preset: "node-server",
  // },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      nodemailerHost: process.env.NUXT_NODEMAILER_HOST,
      nodemailerPort: process.env.NUXT_NODEMAILER_PORT,
      nodemailerUser: process.env.NUXT_NODEMAILER_USER,
      nodemailerPassword: process.env.NUXT_NODEMAILER_PASSWORD,
      nodemailerContactEmail: process.env.NUXT_NODEMAILER_CONTACT_EMAIL,
    },
  },
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
