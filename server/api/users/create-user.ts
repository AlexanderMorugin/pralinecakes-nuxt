import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (
    !body?.user_role ||
    !body?.user_name ||
    !body?.user_email ||
    !body?.user_password
  ) {
    throw createError({
      statusCode: 422,
      message: "Некоторые данные отсутствуют",
    });
  }

  const userData = {
    user_role: body.user_role,
    user_name: body.user_name,
    user_email: body.user_email,
    user_password: body.user_password,
  };

  console.log(userData);

  // const result = await db.insert(users).values({ ...userData });

  // return result;
});
