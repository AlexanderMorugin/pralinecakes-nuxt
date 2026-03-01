import { desc } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db.select().from(orders).orderBy(desc(orders.createdAt));

  return result;
});
