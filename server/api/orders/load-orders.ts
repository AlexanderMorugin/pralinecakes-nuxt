import { desc } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
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

  const result = await db
    .select({
      id: orders.id,
      order_number: orders.order_number,
      order_date: orders.order_date,
      delivery_type: orders.delivery_type,
      total_cart_count: orders.total_cart_count,
      total_order_sum: orders.total_order_sum,
      user_name: orders.user_name,
      user_phone: orders.user_phone,
      status_accept: orders.status_accept,
      status_delivery: orders.status_delivery,
      status_complete: orders.status_complete,
    })
    .from(orders)
    .orderBy(desc(orders.createdAt));

  return result;
});
