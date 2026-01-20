import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db.select().from(orders);

  return result;
});
