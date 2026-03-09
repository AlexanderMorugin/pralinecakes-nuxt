import { eq } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

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

  if (!body?.id || !body?.visibility) {
    throw createError({
      statusCode: 422,
      message: "ID или Статус отзыва отсутствуют",
    });
  }

  const result = await db
    .update(comments)
    .set({ visibility: body.visibility })
    .where(eq(comments.id, body.id))
    .returning();

  return result;
});
