import { defineStore } from "pinia";
import type { IUser } from "~/types/user";
import type { IOrder } from "~/types/order";
import type { IComment } from "~/types/comment";

export const useAdminUserStore = defineStore("adminUserStore", () => {
  const adminUsers = ref<IUser[] | any>([]);
  const adminUser = ref<IUser | any>(null);
  const adminUserOrders = ref<IOrder[] | any>([]);
  const adminUserComments = ref<IComment[] | any>([]);

  const userStore = useUserStore();

  const loadAdminUsers = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/users/admin/load-admin-users", {
          baseURL: process.env.BASE_URL,
          key: "admin-users",
          method: "GET",
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminUsers.value = result.data.value;
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

  const getAdminUser = async (clientUserId: number) => {
    // console.log(clientUserId);

    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/users/admin/get-admin-user", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            id: clientUserId,
          },
        });

        if (result === null) {
          adminUser.value = null;
          // return navigateTo("/auth-page");
        }

        if (result.error.value) {
          // adminUser.value = null;
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminUser.value = result.data.value;
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

  const deleteAdminUser = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/users/admin/delete-admin-user", {
          baseURL: process.env.BASE_URL,
          method: "DELETE",
          body: {
            user_id: adminUser.value.id,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
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

  const loadAdminUserOrders = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/users/admin/load-admin-user-orders",
          {
            baseURL: process.env.BASE_URL,
            key: "admin-user-orders",
            method: "POST",
            body: {
              user_id: adminUser.value.id,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminUserOrders.value = result.data.value;
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

  const loadAdminUserComments = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/users/admin/load-admin-user-comments",
          {
            baseURL: process.env.BASE_URL,
            key: "admin-user-comments",
            method: "POST",
            body: {
              user_id: adminUser.value.id,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminUserComments.value = result.data.value;
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
    adminUsers,
    adminUser,
    adminUserOrders,
    adminUserComments,
    loadAdminUsers,
    getAdminUser,
    deleteAdminUser,
    loadAdminUserOrders,
    loadAdminUserComments,
  };
});
