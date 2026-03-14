import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const cookie = parseCookies(event);

  const decodeRefresh = await decodeRefreshToken(cookie.refresh_token);

  if (!decodeRefresh) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  const result = (
    await db.select().from(users).where(eq(users.id, decodeRefresh.userId))
  )[0];

  return transformUser(result);
});
