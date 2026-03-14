import { eq } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  const decodeAccess = await decodeAccessToken(cookie.access_token);
  const decodeRefresh = await decodeRefreshToken(cookie.refresh_token);

  if (!decodeAccess || !decodeRefresh) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID отзыва отсутствует",
    });
  }

  const result = await db.delete(comments).where(eq(comments.id, body.id));

  return result;
});
