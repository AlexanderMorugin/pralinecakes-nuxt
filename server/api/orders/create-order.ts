import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const order = {
    order_number: body.order_number,
    order_date: body.order_date,
    delivery_type: body.delivery_type,
    total_cart_count: body.total_cart_count,
    total_cart_sum: body.total_cart_sum,
    cart_samovyvoz_bonus: body.cart_samovyvoz_bonus,
    total_order_sum: body.total_order_sum,
    delivery_sum: body.delivery_sum,

    user_bonus: body.user_bonus,
    user_name: body.user_name,
    user_phone: body.user_phone,
    user_city: body.user_city,
    user_street: body.user_street,
    user_building: body.user_building,
    user_entrance: body.user_entrance,
    user_flat: body.user_flat,
    user_floor: body.user_floor,
    user_comment: body.user_comment,

    cart_list: body.cart_list,
  };

  const result = await db
    .insert(orders)
    .values({ ...order })
    .returning();

  return result;
});
