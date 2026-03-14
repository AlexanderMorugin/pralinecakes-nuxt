import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const cookie = parseCookies(event);

  if (!cookie.refresh_token || !cookie.access_token) {
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
  }

  const decodeAccess = await decodeAccessToken(cookie.access_token);
  const decodeRefresh = await decodeRefreshToken(cookie.refresh_token);

  // console.log(decodeAccess);
  // console.log(decodeRefresh);

  // Если access истек, но refresh действует, переиздаем access и передаем в куки
  if (!decodeAccess && decodeRefresh) {
    const accessToken = jwt.sign(
      { userId: decodeRefresh.userId },
      config.public.jwtAccessSecret,
      {
        // expiresIn: "10m",
        expiresIn: "1m",
      },
    );
    setCookie(event, "access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
  }

  // Если refresh истек, удаляем все куки
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
  }
});
