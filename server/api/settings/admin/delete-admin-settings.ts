import { eq } from "drizzle-orm";
import { db } from "~/server";
import { settings } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  const result = await db.delete(settings).where(eq(settings.id, 1));

  return result;
});
