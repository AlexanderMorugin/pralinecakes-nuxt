import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

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

  if (!body?.ingredients || !body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID или ингредиенты продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      ingredients: body.ingredients,
    })
    .where(eq(cakes.id, body.id));

  return result;
});
