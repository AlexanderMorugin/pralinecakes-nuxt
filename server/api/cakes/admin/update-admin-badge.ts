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

  if (!body?.badge || !body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID или значёк продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      badge: body.badge,
    })
    .where(eq(cakes.id, body.id));

  return result;
});
