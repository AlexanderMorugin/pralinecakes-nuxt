import { db } from "~/server";
import { pastry } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.type || !body?.slug || !body?.title || !body?.description_short) {
    throw createError({
      statusCode: 422,
      message: "ID или данные продукта отсутствуют",
    });
  }

  const productTitle = {
    type: body.type,
    slug: body.slug.toLowerCase(),
    title: body.title,
    description_short: body.description_short,
  };

  const result = await db.insert(pastry).values({ ...productTitle });

  return result;
});
