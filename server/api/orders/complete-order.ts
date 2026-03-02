import { StatusCodes } from "http-status-codes";
import { eq } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.id || (!body?.status && body?.status !== null)) {
    throw createError({
      statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
      message: "ID или STATUS заказа отсутствуют",
    });
  }

  const result = await db
    .update(orders)
    .set({ status_complete: body.status })
    .where(eq(orders.id, body.id));

  return result;
});
