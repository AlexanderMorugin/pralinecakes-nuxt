import { defineStore } from "pinia";
import type { IComment } from "~/types/comment";

export const useClientCommentStore = defineStore("clientCommentStore", () => {
  const clientComments = ref<IComment[] | any>([]);
  const clientComment = ref<IComment | any>(null);
  const productComments = ref<IComment[] | any>([]);

  const userStore = useUserStore();

  const loadClientComments = async () => {
    const result = await useFetch("/api/comments/client/load-client-comments", {
      baseURL: process.env.BASE_URL,
      key: "client-comments",
      method: "GET",
    });

    if (result.status.value === "success") {
      clientComments.value = result.data.value;
    }

    return result;
  };

  const getProductComments = async (productId: number) => {
    const result = await useFetch("/api/comments/client/get-product-comments", {
      baseURL: process.env.BASE_URL,
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

  const createClientComment = async (formData: IComment) => {
    const result = await useFetch(
      "/api/comments/client/create-client-comment",
      {
        baseURL: process.env.BASE_URL,
        method: "POST",
        body: {
          date: formData.date,
          user_id: userStore.user ? userStore.user.id : null,
          user_name: formData.user_name,
          user_rating: formData.user_rating,
          user_comment: formData.user_comment,
          product_id: formData.product_id,
          product_image: formData.product_image,
          product_title: formData.product_title,
        },
      },
    );

    if (result.status.value === "success") {
      const response = await useFetch("/api/message/send", {
        baseURL: process.env.BASE_URL,
        method: "POST",
        body: {
          subject: `Отзыв ${formData.user_name}`,
          message: `Новый отзыв ${formData.user_name}, проверить на https://pralineshop.ru/admin/comments`,
        },
      });

      if (response.data.value) return response;
    }
  };

  const filterCommentsByProductId = (productId: number) => {
    return clientComments.value.filter(
      (item: IComment) => item.product_id === productId,
    );
  };

  return {
    clientComments,
    clientComment,
    productComments,
    loadClientComments,
    getProductComments,
    createClientComment,
    filterCommentsByProductId,
  };
});
