import { eq, desc, and } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.product_id) {
    throw createError({
      statusCode: 422,
      message: "ID продукта отсутствует",
    });
  }

  const result = await db
    .select()
    .from(comments)
    .where(
      and(
        eq(comments.product_id, body.product_id),
        eq(comments.visibility, true),
      ),
    )
    .orderBy(desc(comments.createdAt));

  return result;
});
