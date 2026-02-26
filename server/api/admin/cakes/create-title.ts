import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const cakeTitle = {
    type: body.type,
    slug: body.slug.toLowerCase(),
    title: body.title,
    description_short: body.description_short,
  };

  const result = await db
    .insert(cakes)
    .values({ ...cakeTitle })
    .returning();

  return result;
});
