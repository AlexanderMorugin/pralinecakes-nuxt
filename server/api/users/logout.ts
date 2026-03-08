export default defineEventHandler((event) => {
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
});
