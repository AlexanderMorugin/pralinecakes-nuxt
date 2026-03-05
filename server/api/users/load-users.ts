import { desc } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db.select().from(users).orderBy(desc(users.createdAt));

  return result;
});
