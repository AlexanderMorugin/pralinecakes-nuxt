import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    host: config.public.nodemailerHost,
    port: config.public.nodemailerPort,
    secure: true,
    auth: {
      user: config.public.nodemailerUser,
      pass: config.public.nodemailerPassword,
    },
  });

  try {
    const body = await readBody(event);

    const result = await transporter.sendMail({
      from: {
        name: "Praline Shop",
        address: config.public.nodemailerUser,
      },
      to: config.public.nodemailerContactEmail,
      subject: body.subject,
      text: body.subject,
      html: `<b>${body.message}</b>`,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
});
