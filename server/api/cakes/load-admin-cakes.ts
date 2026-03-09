import { desc } from "drizzle-orm";
import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
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

  const result = await db
    .select({
      id: cakes.id,
      type: cakes.type,
      slug: cakes.slug,
      title: cakes.title,
      description_short: cakes.description_short,
      image_1_small: cakes.image_1_small,
      price: cakes.price,
      discount: cakes.discount,
      discount_price: cakes.discount_price,
      badge: cakes.badge,
      rating: cakes.rating,
      visibility: cakes.visibility,
    })
    .from(cakes)
    .orderBy(desc(cakes.createdAt));

  return result;
});
