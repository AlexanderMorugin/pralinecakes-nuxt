import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(pastry)
    .set({
      price: body.price,
      discount: body.discount,
      discount_price: body.discount_price,
    })
    .where(eq(pastry.id, body.id));

  return result;
});
