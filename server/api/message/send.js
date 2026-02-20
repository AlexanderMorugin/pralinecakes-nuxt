import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // return "Hello";
  // const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    host: process.env.NUXT_NODEMAILER_HOST,
    port: process.env.NUXT_NODEMAILER_PORT,
    // host: config.public.nodemailerHost,
    // port: config.public.nodemailerPort,
    // host: "smtp.yandex.ru",
    // port: 587,
    secure: true,
    auth: {
      user: process.env.NUXT_NODEMAILER_USER,
      pass: process.env.NUXT_NODEMAILER_PASSWORD,
      // user: config.public.nodemailerUser,
      // pass: config.public.nodemailerPassword,
      // user: "morug1n.a@ya.ru",
      // pass: "vfkbayytfzoemsvl",
    },
  });

  try {
    const body = await readBody(event);

    const data = await transporter.sendMail({
      from: process.env.NUXT_NODEMAILER_USER,
      to: process.env.NUXT_NODEMAILER_CONTACT_EMAIL,
      // from: config.public.nodemailerUser,
      // to: config.public.nodemailerContactEmail,
      // subject: body.subject,
      // text: body.subject,
      // html: body.subject,
      subject: body.subject,
      text: body.subject,
      html: "Заказ",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
});
