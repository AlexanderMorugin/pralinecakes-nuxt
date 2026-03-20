import { db } from "~/server";
import { settings } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const result = await db.select().from(settings);

  return result;
});
