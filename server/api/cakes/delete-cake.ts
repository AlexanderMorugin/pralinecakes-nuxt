import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID продукта отсутствует",
    });
  }

  const result = await db.delete(cakes).where(eq(cakes.id, body.id));

  return result;
});
