import { desc } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
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
