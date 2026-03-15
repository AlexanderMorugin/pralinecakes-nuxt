import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

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
      message: "ID или данные продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      price: body.price,
      discount: body.discount,
      discount_price: body.discount_price,
    })
    .where(eq(cakes.id, body.id));

  return result;
});
