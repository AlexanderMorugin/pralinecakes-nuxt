import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // return "Hello";
  // const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    // host: process.env.NUXT_NODEMAILER_HOST,
    // port: process.env.NUXT_NODEMAILER_PORT,
    // host: config.public.nodemailerHost,
    // port: config.public.nodemailerPort,
    // host: "smtp.yandex.ru",
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    // tls: {
    //   // must provide server name, otherwise TLS certificate check will fail
    //   servername: "pralineshop.ru",
    // },
    auth: {
      // user: process.env.NUXT_NODEMAILER_USER,
      // pass: process.env.NUXT_NODEMAILER_PASSWORD,
      // user: config.public.nodemailerUser,
      // pass: config.public.nodemailerPassword,
      // user: "morug1n.a@ya.ru",
      user: "morug1n.a",
      pass: "vfkbayytfzoemsvl",
    },
  });

  try {
    const body = await readBody(event);

    const result = await transporter.sendMail({
      from: {
        name: "Praline",
        address: "morug1n.a@ya.ru",
      },
      to: "nobilis@bk.ru",
      // from: process.env.NUXT_NODEMAILER_USER,
      // to: process.env.NUXT_NODEMAILER_CONTACT_EMAIL,
      // from: config.public.nodemailerUser,
      // to: config.public.nodemailerContactEmail,
      // subject: body.subject,
      // text: body.subject,
      // html: body.subject,
      subject: body.subject,
      text: body.subject,
      html: "<b>Hello world?</b>",
    });

    return result;
  } catch (error) {
    console.log(error);
  }
});
