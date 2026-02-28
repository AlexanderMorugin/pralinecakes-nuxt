import { eq } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(pastry)
    .set({
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    })
    .where(eq(pastry.id, body.id));

  return result;
});
