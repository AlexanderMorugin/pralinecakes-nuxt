import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

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

  if (!body?.slug) {
    throw createError({
      statusCode: 422,
      message: "slug продукта отсутствует",
    });
  }

  const result = await db
    .select()
    .from(pastry)
    .where(eq(pastry.slug, body.slug));

  return result;
});
