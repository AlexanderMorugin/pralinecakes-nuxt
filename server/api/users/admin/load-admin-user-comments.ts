import { eq, desc } from "drizzle-orm";
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
