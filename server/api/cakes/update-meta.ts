import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(cakes)
    .set({
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
