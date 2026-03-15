import { defineStore } from "pinia";
import type { IComment } from "~/types/comment";

export const useAdminCommentStore = defineStore("adminCommentStore", () => {
  const adminComments = ref<IComment[] | any>([]);
  const adminComment = ref<IComment | any>(null);

  const userStore = useUserStore();

  const loadAdminComments = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/comments/admin/load-admin-comments",
          {
            baseURL: process.env.BASE_URL,
            key: "admin-comments",
            method: "GET",
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminComments.value = result.data.value;
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

  const getAdminComment = async (commentId: number) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/comments/admin/get-admin-comment", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            id: commentId,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminComment.value = result.data.value;
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

  const updateAdminVisibility = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/comments/admin/update-admin-comment",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminComment.value[0].id,
              visibility: !adminComment.value[0].visibility,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminComment.value[0].visibility = !adminComment.value[0].visibility;
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

  const deleteAdminComment = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/comments/admin/delete-admin-comment",
          {
            baseURL: process.env.BASE_URL,
            method: "DELETE",
            body: {
              id: adminComment.value[0].id,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminComments.value = adminComments.value.filter(
            (item: IComment) => item.id !== adminComment.value[0].id,
          );
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

  return {
    adminComments,
    adminComment,
    loadAdminComments,
    getAdminComment,
    updateAdminVisibility,
    deleteAdminComment,
  };
});
