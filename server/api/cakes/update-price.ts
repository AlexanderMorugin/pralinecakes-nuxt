import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(cakes)
    .set({
      price: body.price,
      discount: body.discount,
      discount_price: body.discount_price,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
