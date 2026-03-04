import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.type || !body?.slug || !body?.title || !body?.description_short) {
    throw createError({
      statusCode: 422,
      message: "Некоторые данные отсутствуют",
    });
  }

  const productTitle = {
    type: body.type,
    slug: body.slug.toLowerCase(),
    title: body.title,
    description_short: body.description_short,
  };

  const result = await db.insert(cakes).values({ ...productTitle });

  return result;
});
