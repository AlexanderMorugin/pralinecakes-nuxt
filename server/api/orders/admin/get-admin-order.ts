import { eq } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID заказа отсутствует",
    });
  }

  const result = await db.select().from(orders).where(eq(orders.id, body.id));

  return result;
});
