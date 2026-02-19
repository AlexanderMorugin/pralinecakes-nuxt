import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // return "Hello";
  const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    host: config.public.nodemailerHost,
    port: config.public.nodemailerPort,
    // host: "smtp.yandex.ru",
    // port: 587,
    secure: true,
    auth: {
      user: config.public.nodemailerUser,
      pass: config.public.nodemailerPassword,
      // user: "morug1n.a@ya.ru",
      // pass: "vfkbayytfzoemsvl",
    },
  });

  try {
    const body = await readBody(event);

    const data = await transporter.sendMail({
      from: config.public.nodemailerUser,
      to: config.public.nodemailerContactEmail,
      // subject: body.subject,
      // text: body.subject,
      // html: body.subject,
      subject: "Заказ",
      text: "Заказ",
      html: "Заказ",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
});
