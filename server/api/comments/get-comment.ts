import { eq } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID отзыва отсутствует",
    });
  }

  const result = await db
    .select()
    .from(comments)
    .where(eq(comments.id, body.id));

  return result;
});
