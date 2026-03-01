import { eq } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db.delete(comments).where(eq(comments.id, body.id));

  return result;
});
