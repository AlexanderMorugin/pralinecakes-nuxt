import { desc } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db
    .select()
    .from(comments)
    .orderBy(desc(comments.createdAt));

  return result;
});
