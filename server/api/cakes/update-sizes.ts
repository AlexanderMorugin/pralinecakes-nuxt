import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.weight || !body?.width || !body?.height || !body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID или данные продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      weight: body.weight,
      width: body.width,
      height: body.height,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
