import { desc } from "drizzle-orm";
import { db } from "~/server";
import { pastry } from "~/server/database/schema";

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
      id: pastry.id,
      type: pastry.type,
      slug: pastry.slug,
      title: pastry.title,
      description_short: pastry.description_short,
      image_1_small: pastry.image_1_small,
      price: pastry.price,
      discount: pastry.discount,
      discount_price: pastry.discount_price,
      badge: pastry.badge,
      rating: pastry.rating,
      visibility: pastry.visibility,
    })
    .from(pastry)
    .orderBy(desc(pastry.createdAt));

  return result;
});
