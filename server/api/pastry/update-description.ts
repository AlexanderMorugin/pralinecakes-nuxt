import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(pastry)
    .set({
      description_one: body.description_one,
      description_two: body.description_two,
      description_three: body.description_three,
    })
    .where(eq(pastry.id, body.id));

  return result;
});
