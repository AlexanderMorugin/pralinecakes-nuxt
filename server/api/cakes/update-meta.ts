import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.meta_title || !body?.meta_description || !body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID или описания продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
