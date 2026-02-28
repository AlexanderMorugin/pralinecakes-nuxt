import { eq, desc } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db
    .select()
    .from(pastry)
    .where(eq(pastry.visibility, true))
    .orderBy(desc(pastry.createdAt));

  return result;
});
