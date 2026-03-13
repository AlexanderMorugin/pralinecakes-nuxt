import { eq, desc } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

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

  if (!body?.user_id) {
    throw createError({
      statusCode: 422,
      message: "ID пользователя отсутствует",
    });
  }

  const result = await db
    .select()
    .from(comments)
    .where(eq(comments.user_id, body.user_id))
    .orderBy(desc(comments.createdAt));

  return result;
});
