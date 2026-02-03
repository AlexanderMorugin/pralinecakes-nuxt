import { eq, desc } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db
    .select()
    .from(cakes)
    .where(eq(cakes.visibility, true))
    .orderBy(desc(cakes.createdAt));

  return result;
});
