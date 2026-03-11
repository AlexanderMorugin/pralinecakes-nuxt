import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // const accessToken = getCookie(event, "access_token");
  // const refreshToken = getCookie(event, "refresh_token");

  // const decodeAccess = await decodeAccessToken(accessToken);
  // const decodeRefresh = await decodeRefreshToken(refreshToken);

  // if (!decodeAccess || !decodeRefresh) {
  //   throw createError({
  //     statusCode: 422,
  //     message: "Токены отсутствуют",
  //   });
  // }

  // if (!body?.user_id || !body?.user_bonus) {
  //   throw createError({
  //     statusCode: 422,
  //     message: "ID пользователя отсутствует",
  //   });
  // }

  console.log(body.user_id, body.user_bonus);

  // const result = await db
  //   .update(users)
  //   .set({
  //     user_bonus: body.user_bonus,
  //   })
  //   .where(eq(users.id, body.user_id));

  // return result;
});
