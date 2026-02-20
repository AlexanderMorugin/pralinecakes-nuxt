module.exports = {
  apps: [
    {
      name: "pralineshop.ru",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      env: {
        NODE_ENV: "development",
        DATABASE_URL:
          "postgresql://admin:Cosmos1973@193.227.240.14:5433/praline_db?schema=public",
        BASE_URL: "https://pralineshop.ru",
        NUXT_NODEMAILER_HOST: "smtp.yandex.ru",
        NUXT_NODEMAILER_PORT: 465,
        NUXT_NODEMAILER_USER: "morug1n.a@ya.ru",
        NUXT_NODEMAILER_PASSWORD: "vfkbayytfzoemsvl",
        NUXT_NODEMAILER_CONTACT_EMAIL: "nobilis@bk.ru",
      },
      env_production: {
        NODE_ENV: "production",
        DATABASE_URL:
          "postgresql://admin:Cosmos1973@193.227.240.14:5433/praline_db?schema=public",
        BASE_URL: "https://pralineshop.ru",
        NUXT_NODEMAILER_HOST: "smtp.yandex.ru",
        NUXT_NODEMAILER_PORT: 465,
        NUXT_NODEMAILER_USER: "morug1n.a@ya.ru",
        NUXT_NODEMAILER_PASSWORD: "vfkbayytfzoemsvl",
        NUXT_NODEMAILER_CONTACT_EMAIL: "nobilis@bk.ru",
      },
    },
  ],
};
