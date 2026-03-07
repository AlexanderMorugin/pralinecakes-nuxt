import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.user_id) {
    throw createError({
      statusCode: 422,
      message: "ID пользователя отсутствует",
    });
  }

  const result = (
    await db.select().from(users).where(eq(users.id, body.user_id))
  )[0];

  console.log(result);

  return transformUser(result);
});
