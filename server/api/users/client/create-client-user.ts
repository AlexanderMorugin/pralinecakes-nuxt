import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";
import { hashPassword } from "~/server/utils/hash-password";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (
    !body?.id ||
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

  const existUser = (
    await db
      .select()
      .from(users)
      .where(eq(users.user_email, body.user_email))
      .limit(1)
      .execute()
  )[0];

  if (existUser) {
    return createError({
      statusCode: 401,
      message: "Пользователь с такой почтой уже существует.",
    });
  }

  const hashUserPassword = hashPassword(body.user_password);
  const { accessToken, refreshToken } = generateTokens(body.id);

  const userData = {
    id: body.id,
    user_role: body.user_role,
    user_name: body.user_name,
    user_email: body.user_email,
    user_password: hashUserPassword,
    refresh_token: refreshToken,
  };

  const result = await db.insert(users).values({ ...userData });

  setCookie(event, "access_token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: true,
  });

  setCookie(event, "refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: true,
  });

  return result;
});
