import { eq, desc } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  const decodeAccess = await decodeAccessToken(cookie.access_token);

  if (!decodeAccess) {
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
    .from(orders)
    .where(eq(orders.user_id, body.user_id))
    // .limit(body.limit)
    .orderBy(desc(orders.createdAt));

  return result;
});
