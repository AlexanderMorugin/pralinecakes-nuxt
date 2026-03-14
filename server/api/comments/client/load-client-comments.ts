import { eq, desc } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db
    .select()
    .from(comments)
    .where(eq(comments.visibility, true))
    .orderBy(desc(comments.createdAt));

  return result;
});
