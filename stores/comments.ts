import { defineStore } from "pinia";
import type { IComment } from "~/types/comment";

export const useCommentsStore = defineStore("commentsStore", () => {
  const comments = ref<IComment[] | any>([]);
  const comment = ref<IComment | any>(null);
  const productComments = ref<IComment[] | any>([]);

  const userStore = useUserStore();

  const loadComments = async () => {
    const result = await useFetch("/api/comments/load-comments", {
      baseURL: process.env.BASE_URL,
      key: "comments",
      method: "GET",
    });

    if (result.status.value === "success") {
      comments.value = result.data.value;
    }

    return result;
  };

  const loadAdminComments = async () => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/comments/load-admin-comments", {
          baseURL: process.env.BASE_URL,
          method: "GET",
        });

        if (result.error.value) {
          return navigateTo("/");
        }

        if (result.status.value === "success") {
          comments.value = result.data.value;
        }

        return result;
      } catch (error) {
        throw createError({
          status: 404,
          statusText: "Данные не найдены",
        });
      }
    } else {
      return navigateTo("/");
    }
  };

  const getComment = async (commentId: number) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/comments/get-comment", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            id: commentId,
          },
        });

        if (result.error.value) {
          return navigateTo("/");
        }

        if (result.status.value === "success") {
          comment.value = result.data.value;
        }

        return result;
      } catch (error) {
        throw createError({
          status: 404,
          statusText: "Данные не найдены",
        });
      }
    } else {
      return navigateTo("/");
    }
  };

  const getProductComments = async (productId: number) => {
    const result = await useFetch("/api/comments/get-product-comments", {
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

  const createComment = async (formData: IComment) => {
    const result = await useFetch("/api/comments/create-comment", {
      baseURL: process.env.BASE_URL,
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

  const updateVisibility = async () => {
    const result = await useFetch("/api/comments/update-comment", {
      baseURL: process.env.BASE_URL,
      method: "PATCH",
      body: {
        id: comment.value[0].id,
        visibility: !comment.value[0].visibility,
      },
    });

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

    if (result.status.value === "success") {
      comment.value[0].visibility = !comment.value[0].visibility;
    }

    return result;
  };

  const deleteComment = async () => {
    const result = await useFetch("/api/comments/delete-comment", {
      baseURL: process.env.BASE_URL,
      method: "DELETE",
      body: {
        id: comment.value[0].id,
      },
    });

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

    if (result.status.value === "success") {
      comments.value = comments.value.filter(
        (item: IComment) => item.id !== comment.value[0].id,
      );
    }

    return result;
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
    loadAdminComments,
    getComment,
    getProductComments,
    createComment,
    updateVisibility,
    deleteComment,
    filterCommentsByProductId,
  };
});
