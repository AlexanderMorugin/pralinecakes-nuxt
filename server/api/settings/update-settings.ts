import { eq } from "drizzle-orm";
import { db } from "~/server";
import { settings } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // console.log(body);

  const cookie = parseCookies(event);

  if (!cookie.access_token || !cookie.refresh_token) {
    throw createError({
      statusCode: 422,
      message: "Токены отсутствуют",
    });
  }

  if (!body) {
    throw createError({
      statusCode: 422,
      message: "Данные отсутствуют",
    });
  }

  const result = await db
    .update(settings)
    .set({
      min_order_sum: body.min_order_sum,
      delivery_sum: body.delivery_sum,
      samovyvoz_bonus: body.samovyvoz_bonus,
    })
    .where(eq(settings.id, 1));

  return result;
});
