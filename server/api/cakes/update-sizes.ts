import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(cakes)
    .set({
      weight: body.weight,
      width: body.width,
      height: body.height,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
