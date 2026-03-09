import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const accessToken = getCookie(event, "access_token");
  const refreshToken = getCookie(event, "refresh_token");

  const decodeAccess = await decodeAccessToken(accessToken);
  const decodeRefresh = await decodeRefreshToken(refreshToken);

  if (!decodeAccess || !decodeRefresh) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body?.type || !body?.slug || !body?.title || !body?.description_short) {
    throw createError({
      statusCode: 422,
      message: "Некоторые данные отсутствуют",
    });
  }

  const productTitle = {
    type: body.type,
    slug: body.slug.toLowerCase(),
    title: body.title,
    description_short: body.description_short,
  };

  const result = await db.insert(cakes).values({ ...productTitle });

  return result;
});
