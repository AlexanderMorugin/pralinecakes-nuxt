import { eq } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { id: orderId } = await readBody(event);

  const deletedOrder = await db.delete(orders).where(eq(orders.id, orderId));

  return deletedOrder;
});
