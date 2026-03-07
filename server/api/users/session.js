import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";
import { transformUser } from "~/server/utils/transform-user";

export default defineEventHandler(async (event) => {
  const cookieTokenRefresh = getCookie(event, "refresh_token");

  const decodeCookieTokenRefresh = await decodeRefreshToken(cookieTokenRefresh);

  // console.log(decodeCookieTokenRefresh);

  if (!decodeCookieTokenRefresh) {
    throw createError({
      statusCode: 422,
      message: "Рефреш токен отсутствует",
    });
  }

  const existUser = (
    await db
      .select()
      .from(users)
      .where(eq(users.refresh_token, cookieTokenRefresh))
      .limit(1)
  )[0];

  // console.log(existUser);

  const rToken = await decodeRefreshToken(existUser.refresh_token);

  // console.log(rToken);

  if (!rToken) {
    throw createError({
      statusCode: 422,
      message: "Рефреш токен истёк",
    });
  }

  return transformUser(existUser);

  // const existUser = await db
  //   .select()
  //   .from(users)
  //   .where(eq(users.refresh_token, cookieTokenRefresh));
});
