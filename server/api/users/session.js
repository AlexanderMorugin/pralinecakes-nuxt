import { eq } from "drizzle-orm";
import { db } from "~/server";
import { users } from "~/server/database/schema";
import { transformUser } from "~/server/utils/transform-user";

// для перезагрузки страницы
export default defineEventHandler(async (event) => {
  // const refreshToken = getCookie(event, "refresh_token");
  const cookie = parseCookies(event);

  // console.log("session-cookie-refreshToken", refreshToken);

  // если refresh в куках не найден
  if (!cookie.refresh_token) {
    deleteCookie(event, "refresh_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    deleteCookie(event, "access_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return {
      user: null,
    };
  }

  // если куки в наличии
  const decodeRefresh = await decodeRefreshToken(cookie.refresh_token);

  // console.log("session-decodeRefresh", decodeRefresh);

  // если рефреш просрочен
  if (!decodeRefresh) {
    deleteCookie(event, "refresh_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    deleteCookie(event, "access_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return {
      user: null,
    };
  }

  // если рефреш действующий, ищем в базе пользователя по нему
  const existUser = (
    await db
      .select()
      .from(users)
      .where(eq(users.refresh_token, cookie.refresh_token))
      .limit(1)
  )[0];

  // console.log("session-existUser", existUser);

  // если такого пользователя согласно рефрешу из кук нет
  if (!existUser) {
    deleteCookie(event, "refresh_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    deleteCookie(event, "access_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return {
      user: null,
    };
  }

  // если пользователь в базе найден, декодируем его рефреш
  const rToken = await decodeRefreshToken(existUser.refresh_token);

  // console.log("session-rToken", rToken);

  // если рефреш пользователя из базы не декодировался
  if (!rToken) {
    deleteCookie(event, "refresh_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    deleteCookie(event, "access_token", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return {
      user: null,
    };
  }

  // console.log("session-transformUser", transformUser(existUser));

  return {
    user: transformUser(existUser),
  };
});
