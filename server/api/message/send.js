import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    host: config.nodemailerHost,
    port: config.nodemailerPort,
    secure: true,
    auth: {
      user: config.nodemailerUser,
      pass: config.nodemailerPassword,
    },
  });

  try {
    const body = await readBody(event);

    const data = await transporter.sendMail({
      from: config.nodemailerUser,
      to: config.nodemailerContactEmail,
      subject: body.subject,
      text: body.message,
      html: body.message,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
});
