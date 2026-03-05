import { eq, isNull } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";
import { comparePassword } from "~/server/utils/hash-password";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.user_email || !body?.user_password) {
    throw createError({
      statusCode: 422,
      message: "Некоторые данные отсутствуют",
    });
  }

  const existUser = (
    await db
      .select()
      .from(users)
      .where(eq(users.user_email, body.user_email))
      .limit(1)
  )[0];

  if (!existUser) {
    return createError({
      statusCode: 401,
      message: "Почта или пароль неверные.",
    });
  }

  // console.log(existUser);

  if (existUser.user_password !== null) {
    const doesThePasswordMatch = comparePassword(
      body.user_password,
      existUser.user_password,
    );

    if (!doesThePasswordMatch) {
      return createError({
        statusCode: 401,
        message: "Почта или пароль неверные.",
      });
    }

    // const { accessToken, refreshToken } = generateTokens(existUser[0]);

    // setCookie(event, "access_token", accessToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: true,
    // });

    // setCookie(event, "refresh_token", refreshToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: true,
    // });

    // console.log(doesThePasswordMatch);

    // const result = await db
    // .update(users)
    // .set({ refresh_token: refreshToken })
    // .where(eq(users.email, body.email));

    // Возвращаем на фронт пользователя
    return existUser;
  }

  // const userData = {
  //   id: body.id,
  //   user_role: body.user_role,
  //   user_name: body.user_name,
  //   user_email: body.user_email,
  //   user_password: hashUserPassword,
  // };

  // const result = await db.insert(users).values({ ...userData });

  // return result;
});
