import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";
import { transformUser } from "~/server/utils/transform-user";

export default defineEventHandler(async (event) => {
  const cookieTokenRefresh = getCookie(event, "refresh_token");

  if (!cookieTokenRefresh) {
    return {
      user: null,
    };
  }

  const decodeCookieTokenRefresh = await decodeRefreshToken(cookieTokenRefresh);

  if (!decodeCookieTokenRefresh) {
    return {
      user: null,
    };
  }

  const existUser = (
    await db
      .select()
      .from(users)
      .where(eq(users.refresh_token, cookieTokenRefresh))
      .limit(1)
  )[0];

  if (!existUser) {
    return {
      user: null,
    };
  }

  const rToken = await decodeRefreshToken(existUser.refresh_token);

  if (!rToken) {
    return {
      user: null,
    };
  }

  return {
    user: transformUser(existUser),
  };
});
