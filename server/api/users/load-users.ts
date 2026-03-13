import { desc } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  // const accessToken = getCookie(event, "access_token");
  // const refreshToken = getCookie(event, "refresh_token");

  // const decodeAccess = await decodeAccessToken(accessToken);
  // const decodeRefresh = await decodeRefreshToken(refreshToken);

  // if (!decodeAccess || !decodeRefresh) {
  //   throw createError({
  //     statusCode: 422,
  //     message: "Токены отсутствуют",
  //   });
  // }

  const result = await db.select().from(users).orderBy(desc(users.createdAt));

  return result.map((user) => transformUser(user));
});
