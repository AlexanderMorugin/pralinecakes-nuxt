// module.exports = {
//   apps: [
//     {
//       name: "pralineshop",
//       port: "3000",
//       exec_mode: "cluster",
//       instances: "max",
//       script: "./.output/server/index.mjs",
//     },
//   ],
// };

module.exports = {
  apps: [
    {
      name: "nuxt-app",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
