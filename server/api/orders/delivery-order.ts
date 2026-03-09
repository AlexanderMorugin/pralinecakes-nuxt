import { eq } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

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

  if (!body?.id || (!body?.status && body?.status !== null)) {
    throw createError({
      statusCode: 422,
      message: "ID или STATUS заказа отсутствуют",
    });
  }

  const result = await db
    .update(orders)
    .set({ status_delivery: body.status })
    .where(eq(orders.id, body.id));

  return result;
});
