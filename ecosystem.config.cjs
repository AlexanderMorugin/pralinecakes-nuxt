module.exports = {
  apps: [
    {
      name: "pralineshop.ru",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      env: {
        DATABASE_URL:
          "postgresql://admin:Cosmos1973@193.227.240.14:5433/praline_db?schema=public",
        BASE_URL: "https://pralineshop.ru",
      },
    },
  ],
};
