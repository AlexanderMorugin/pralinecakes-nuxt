import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const result = await db.delete(cakes).where(eq(cakes.id, id));

  return result;
});
