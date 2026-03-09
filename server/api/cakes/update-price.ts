import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

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

  if (!body?.price || !body?.discount || !body?.discount_price || !body?.id) {
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
  // .returning();

  return result;
});
