import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.ingredients || !body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID или ингредиенты продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      ingredients: body.ingredients,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
