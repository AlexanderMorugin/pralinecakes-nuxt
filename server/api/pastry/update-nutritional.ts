import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (
    !body?.calories ||
    !body?.protein ||
    !body?.fat ||
    !body?.carbohydrates ||
    !body?.id
  ) {
    throw createError({
      statusCode: 422,
      message: "ID или данные продукта отсутствуют",
    });
  }

  const result = await db
    .update(pastry)
    .set({
      calories: body.calories,
      protein: body.protein,
      fat: body.fat,
      carbohydrates: body.carbohydrates,
    })
    .where(eq(pastry.id, body.id));

  return result;
});
