import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

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

  if (!body) {
    throw createError({
      statusCode: 422,
      message: "ID или данные продукта отсутствуют",
    });
  }

  const result = await db
    .update(pastry)
    .set({
      description_one: body.description_one,
      description_two: body.description_two,
      description_three: body.description_three,
    })
    .where(eq(pastry.id, body.id));

  return result;
});
