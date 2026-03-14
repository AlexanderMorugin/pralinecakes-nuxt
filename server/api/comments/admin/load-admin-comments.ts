import { desc } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const accessToken = getCookie(event, "access_token");
  const refreshToken = getCookie(event, "refresh_token");

  const decodeAccess = await decodeAccessToken(accessToken);
  const decodeRefresh = await decodeRefreshToken(refreshToken);

  if (!decodeAccess || !decodeRefresh) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  const result = await db
    .select()
    .from(comments)
    .orderBy(desc(comments.createdAt));

  return result;
});
