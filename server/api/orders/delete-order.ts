import { eq } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID заказа отсутствуют",
    });
  }

  const result = await db.delete(orders).where(eq(orders.id, body.id));

  return result;
});
