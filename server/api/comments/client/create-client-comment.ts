import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body) {
    throw createError({
      statusCode: 422,
      message: "Некоторые данные отсутствуют",
    });
  }

  const commentData = {
    date: body.date,
    user_id: body.user_id,
    user_name: body.user_name,
    user_rating: body.user_rating,
    user_comment: body.user_comment,
    product_id: body.product_id,
    product_image: body.product_image,
    product_title: body.product_title,
  };

  const result = await db.insert(comments).values({ ...commentData });

  return result;
});
