import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const cookie = parseCookies(event);

  const decodeAccess = await decodeAccessToken(cookie.access_token);

  if (!decodeAccess) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  const result = (
    await db.select().from(users).where(eq(users.id, decodeAccess.userId))
  )[0];

  return transformUser(result);
});
