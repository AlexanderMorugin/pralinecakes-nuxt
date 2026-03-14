import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  const decodeAccess = await decodeAccessToken(cookie.access_token);

  if (!decodeAccess) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  // console.log(body.user_id);

  if (!body?.user_id) {
    throw createError({
      statusCode: 422,
      message: "ID клиента отсутствует",
    });
  }

  const result = await db.delete(users).where(eq(users.id, body.user_id));

  return result;
});
