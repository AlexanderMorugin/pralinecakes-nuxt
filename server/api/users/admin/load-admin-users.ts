import { desc } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const cookie = parseCookies(event);

  const decodeAccess = await decodeAccessToken(cookie.access_token);
  const decodeRefresh = await decodeRefreshToken(cookie.refresh_token);

  if (!decodeAccess || !decodeRefresh) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  const result = await db.select().from(users).orderBy(desc(users.createdAt));

  return result.map((user) => transformUser(user));
});
