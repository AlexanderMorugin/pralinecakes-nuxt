import { eq } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body) {
    throw createError({
      statusCode: 422,
      message: "ID или Статус отзыва отсутствуют",
    });
  }

  const result = await db
    .update(comments)
    .set({ visibility: body.visibility })
    .where(eq(comments.id, body.id));

  return result;
});
