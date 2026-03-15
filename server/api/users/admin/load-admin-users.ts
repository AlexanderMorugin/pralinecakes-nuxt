import { desc } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  const result = await db.select().from(users).orderBy(desc(users.createdAt));

  return result.map((user) => transformUser(user));
});
