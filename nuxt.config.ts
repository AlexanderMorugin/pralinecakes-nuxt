export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  // ssr: true,
  css: [
    "~/assets/styles/global.scss",
    "~/assets/styles/_variables.scss",
    "~/assets/styles/_fonts.scss",
    "~/assets/styles/_transitions.scss",
    "~/assets/styles/_modal.scss",
    "~/assets/styles/_forms.scss",
    "~/assets/styles/_animation.scss",
  ],
  modules: ["@pinia/nuxt", "nuxt-toast"],
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
  // nitro: {
  //   // используем кеширование на стороне сервера
  //   routeRules: {
  //     // правила роутинга
  //     "/": { static: true }, // страница генерируется только один раз
  //     "/cakes": { static: true }, // страница генерируется только один раз
  //     "/cakes/[slug]": { swr: 60 }, // используем серверный кеш на 60 сек
  //     "/pastry": { static: true }, // страница генерируется только один раз
  //     "/pastry/[slug]": { swr: 60 }, // используем серверный кеш на 60 сек
  //     "/company": { static: true }, // страница генерируется только один раз
  //     "/contact": { static: true }, // страница генерируется только один раз
  //     "/delivery": { static: true }, // страница генерируется только один раз
  //     // для server api
  //     "/api/cakes/load-cakes": { swr: 120 }, // кеширует апи роут на 2 мин
  //     // выключить режим ssr для админа
  //     "/cart": { static: false },
  //   },
  // },
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
