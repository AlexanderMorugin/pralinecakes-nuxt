import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.id) {
    throw createError({
      statusCode: 422,
      message: "ID клиента отсутствует",
    });
  }

  const result = (
    await db.select().from(users).where(eq(users.id, body.id))
  )[0];

  // console.log(result);
  if (result) return transformUser(result);

  if (!result) return { result: null };

  // return result;
});
