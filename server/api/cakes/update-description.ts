import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(cakes)
    .set({
      description_one: body.description_one,
      description_two: body.description_two,
      description_three: body.description_three,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
