import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await db
    .update(cakes)
    .set({
      image_1_small: body.image_1_small,
      image_1_big: body.image_1_big,
      image_2_small: body.image_2_small,
      image_2_big: body.image_2_big,
      image_3_small: body.image_3_small,
      image_3_big: body.image_3_big,
      image_4_small: body.image_4_small,
      image_4_big: body.image_4_big,
      image_5_small: body.image_5_small,
      image_5_big: body.image_5_big,
      image_6_small: body.image_6_small,
      image_6_big: body.image_6_big,
    })
    .where(eq(cakes.id, body.id))
    .returning();

  return result;
});
