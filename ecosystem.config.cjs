module.exports = {
  apps: [
    {
      name: "nuxt-ui-kit",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
