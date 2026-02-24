import { defineStore } from "pinia";

export interface IComment {
  id?: number;
  date?: string;

  product_id?: number;
  product_image?: string;
  product_title?: string;

  user_name?: string;
  user_rating?: number;
  user_comment?: string;

  visibility?: boolean;

  createdAt?: any;
  updatedAt?: any;
}

export const useCommentsStore = defineStore("commentsStore", () => {
  const comments = ref<IComment[] | any>([]);
  const comment = ref<IComment | any>(null);
  const productComments = ref<IComment[] | any>([]);

  const loadComments = async () => {
    const result = await useFetch("/api/comments/load-comments", {
      method: "GET",
    });

    if (result.status.value === "success") {
      comments.value = result.data.value;
    }

    return result;
  };

  const getProductComments = async (productId: number) => {
    const result = await useFetch("/api/comments/get-product-comments", {
      method: "POST",
      body: {
        product_id: productId,
      },
    });

    if (result.status.value === "success") {
      productComments.value = result.data.value;
    }

    return result;
  };

  const createComment = async (formData: IComment) => {
    const result = await useFetch("/api/comments/create-comment", {
      method: "POST",
      body: {
        date: formData.date,
        user_name: formData.user_name,
        user_rating: formData.user_rating,
        user_comment: formData.user_comment,
        product_id: formData.product_id,
        product_image: formData.product_image,
        product_title: formData.product_title,
      },
    });

    if (result.status.value === "success") {
      const response = await useFetch("/api/message/send", {
        method: "POST",
        body: {
          subject: `Отзыв ${formData.user_name}`,
          message: `Новый отзыв ${formData.user_name}, проверить на https://praline-crm-nuxt.vercel.app/comments/`,
        },
      });

      if (response.data.value) return response;
    }
  };

  const filterCommentsByProductId = (productId: number) => {
    return comments.value.filter(
      (item: IComment) => item.product_id === productId,
    );
  };

  return {
    comments,
    comment,
    productComments,
    loadComments,
    getProductComments,
    createComment,
    filterCommentsByProductId,
  };
});
