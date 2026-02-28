import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const result = await db.delete(pastry).where(eq(pastry.id, id));

  return result;
});
