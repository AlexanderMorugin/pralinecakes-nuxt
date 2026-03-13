import { eq, desc } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // console.log(body?.user_id);
  // const accessToken = getCookie(event, "access_token");
  // const refreshToken = getCookie(event, "refresh_token");

  // console.log(accessToken);
  // console.log(refreshToken);

  // const decodeAccess = await decodeAccessToken(accessToken);
  // const decodeRefresh = await decodeRefreshToken(refreshToken);

  // console.log(decodeAccess);
  // console.log(decodeRefresh);

  // if (!decodeAccess || !decodeRefresh) {
  //   throw createError({
  //     statusCode: 422,
  //     message: "Токены отсутствуют",
  //   });
  // }

  if (!body?.user_id) {
    throw createError({
      statusCode: 422,
      message: "ID пользователя отсутствует",
    });
  }

  const result = await db
    .select()
    .from(orders)
    .where(eq(orders.user_id, body.user_id))
    // .limit(body.limit)
    .orderBy(desc(orders.createdAt));

  return result;
});
