import { eq } from "drizzle-orm";
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

  if (
    !body?.description_one ||
    !body?.description_two ||
    !body?.description_three ||
    !body?.id
  ) {
    throw createError({
      statusCode: 422,
      message: "ID или описание продукта отсутствуют",
    });
  }

  const result = await db
    .update(cakes)
    .set({
      description_one: body.description_one,
      description_two: body.description_two,
      description_three: body.description_three,
    })
    .where(eq(cakes.id, body.id));
  // .returning();

  return result;
});
