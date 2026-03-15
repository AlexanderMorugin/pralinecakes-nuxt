import { eq } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.slug) {
    throw createError({
      statusCode: 422,
      message: "slug продукта отсутствует",
    });
  }

  const result = await db.select().from(cakes).where(eq(cakes.slug, body.slug));

  return result;
});
