import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.ingredients || !body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID или ингредиенты продукта отсутствуют",
    });
  }

  const result = await db
    .update(pastry)
    .set({
      ingredients: body.ingredients,
    })
    .where(eq(pastry.id, body.id));

  return result;
});
