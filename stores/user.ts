import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import type { IUser } from "~/types/user";
import type { IOrder } from "~/types/order";
import type { IComment } from "~/types/comment";

export const useUserStore = defineStore("userStore", () => {
  const users = ref<IUser[] | any>([]);
  const user = ref<IUser | any>(null);
  const userOrders = ref<IOrder[] | any>([]);
  const userComments = ref<IComment[] | any>([]);

  const loadUsers = async () => {
    if (user.value) {
      try {
        const result = await useFetch("/api/users/load-users", {
          baseURL: process.env.BASE_URL,
          key: "users",
          method: "GET",
        });

        // if (result.error.value) {
        //   return navigateTo("/auth-page");
        // }

        if (result.status.value === "success") {
          users.value = result.data.value;
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

  const getUser = async (userId: string) => {
    if (user.value) {
      try {
        const result = await useFetch("/api/users/get-user", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            user_id: userId,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          user.value = result.data.value;
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

  const createUser = async (formData: IUser) => {
    const result = await useFetch("/api/users/create-user", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        id: uuidv4(),
        // user_role: "admin",
        // user_role: "manager",
        user_role: "client",
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_password: formData.user_password,
      },
    });

    if (result.status.value === "success") {
      user.value = result.data.value;

      console.log("createUser - ", user.value);
    }

    return result;
  };

  const loginUser = async (formData: IUser) => {
    const result = await useFetch("/api/users/login-user", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        user_email: formData.user_email,
        user_password: formData.user_password,
      },
    });

    if (result.status.value === "success") {
      user.value = result.data.value;
    }

    return result;
  };

  const deleteUser = async () => {
    const result = await useFetch("/api/users/delete-user", {
      baseURL: process.env.BASE_URL,
      method: "DELETE",
      body: {
        user_id: user.value.id,
      },
    });

    // if (result.error.value) {
    //   return navigateTo("/auth-page");
    // }

    return result;
  };

  const loadUserOrders = async () => {
    if (user.value) {
      try {
        const result = await useFetch("/api/users/load-user-orders", {
          baseURL: process.env.BASE_URL,
          key: "user-orders",
          method: "POST",
          body: {
            user_id: user.value.id,
          },
        });

        // if (result.error.value) {
        //   return navigateTo("/auth-page");
        // }

        if (result.status.value === "success") {
          userOrders.value = result.data.value;
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

  const loadUserComments = async () => {
    if (user.value) {
      try {
        const result = await useFetch("/api/users/load-user-comments", {
          baseURL: process.env.BASE_URL,
          key: "user-comments",
          method: "POST",
          body: {
            user_id: user.value.id,
          },
        });

        // if (result.error.value) {
        //   return navigateTo("/auth-page");
        // }

        if (result.status.value === "success") {
          userComments.value = result.data.value;
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

  const setAuthUser = (userData: IUser) => {
    user.value = null;

    user.value = userData;
  };

  const logoutAuthUser = () => {
    user.value = null;
  };

  return {
    users,
    user,
    userOrders,
    userComments,
    loadUsers,
    getUser,
    createUser,
    loginUser,
    deleteUser,
    setAuthUser,
    logoutAuthUser,
    loadUserOrders,
    loadUserComments,
  };
});
