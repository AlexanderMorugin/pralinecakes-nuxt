import { db } from "~/server";
import { settings } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
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
      message: "Некоторые данные тела отсутствуют",
    });
  }

  const newSettings = {
    id: 1,
    min_order_sum: body.min_order_sum,
    delivery_sum: body.delivery_sum,
    samovyvoz_bonus: body.samovyvoz_bonus,
  };

  const result = await db.insert(settings).values({ ...newSettings });

  return result;
});
