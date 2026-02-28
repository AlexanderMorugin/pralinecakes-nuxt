import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

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
