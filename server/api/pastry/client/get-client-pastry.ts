import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.slug) {
    throw createError({
      statusCode: 422,
      message: "slug продукта отсутствует",
    });
  }

  const result = await db
    .select()
    .from(pastry)
    .where(eq(pastry.slug, body.slug));

  return result;
});
