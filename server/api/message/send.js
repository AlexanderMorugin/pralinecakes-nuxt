import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // return "Hello";
  const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    host: config.nodemailerHost,
    // port: config.nodemailerPort,
    // host: "smtp.yandex.ru",
    port: 587,
    secure: true,
    auth: {
      user: config.nodemailerUser,
      pass: config.nodemailerPassword,
      // user: "morug1n.a@ya.ru",
      // pass: "vfkbayytfzoemsvl",
    },
  });

  try {
    const body = await readBody(event);

    const data = await transporter.sendMail({
      from: "morug1n.a@ya.ru",
      to: "nobilis@bk.ru",
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
