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

  if (!body) {
    throw createError({
      statusCode: 422,
      message: "ID или описания продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    })
    .where(eq(cakes.id, body.id));

  return result;
});
