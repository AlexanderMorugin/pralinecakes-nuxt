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

  if (!body?.meta_title || !body?.meta_description || !body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID или описания продукта отсутствуют",
    });
  }

  const result = await db
    .update(pastry)
    .set({
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    })
    .where(eq(pastry.id, body.id));

  return result;
});
