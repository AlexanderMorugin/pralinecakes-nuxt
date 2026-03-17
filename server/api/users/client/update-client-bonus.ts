import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.user_id || !body?.user_bonus) {
    throw createError({
      statusCode: 422,
      message: "ID пользователя отсутствует",
    });
  }

  const result = await db
    .update(users)
    .set({
      user_bonus: body.user_bonus,
    })
    .where(eq(users.id, body.user_id));

  return result;
});
