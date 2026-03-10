import jwt from "jsonwebtoken";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  // Находим в куках токены
  const cookieTokenAccess = getCookie(event, "access_token");
  const refreshCookieToken = getCookie(event, "refresh_token");

  // Валидируем их
  const decodeAccess = decodeAccessToken(cookieTokenAccess);
  const decodeRefresh = decodeRefreshToken(refreshCookieToken);

  // Если access истек, но refresh действует, переиздаем access и передаем в куки
  if (!decodeAccess && decodeRefresh) {
    const accessToken = jwt.sign(
      { userId: decodeRefresh.userId },
      config.public.jwtAccessSecret,
      {
        expiresIn: "10m",
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
