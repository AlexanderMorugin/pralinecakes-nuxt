import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import type { IUser } from "~/types/user";
import type { IOrder } from "~/types/order";
import type { IComment } from "~/types/comment";

export const useUserStore = defineStore("userStore", () => {
  const user = ref<IUser | any>(null);
  const userOrders = ref<IOrder[] | any>([]);
  const userComments = ref<IComment[] | any>([]);

  const createUser = async (formData: IUser) => {
    const result = await useFetch("/api/users/client/create-client-user", {
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
      await getUser();
    }

    return result;
  };

  const getUser = async () => {
    const result = await useFetch("/api/users/client/get-client-user", {
      baseURL: process.env.BASE_URL,
      method: "GET",
    });

    if (result.status.value === "success") {
      user.value = result.data.value;
    }

    return result;
  };

  const loginUser = async (formData: IUser) => {
    const result = await useFetch("/api/users/client/login-client-user", {
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

  const loadUserOrders = async () => {
    const result = await useFetch("/api/users/client/load-client-user-orders", {
      baseURL: process.env.BASE_URL,
      key: "user-orders",
      method: "POST",
      body: {
        user_id: user.value.id,
      },
    });

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

    if (result.status.value === "success") {
      userOrders.value = result.data.value;
    }
    return result;
  };

  const loadUserComments = async () => {
    const result = await useFetch(
      "/api/users/client/load-client-user-comments",
      {
        baseURL: process.env.BASE_URL,
        key: "user-comments",
        method: "POST",
        body: {
          user_id: user.value.id,
        },
      },
    );

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

    if (result.status.value === "success") {
      userComments.value = result.data.value;
    }
    return result;
  };

  const setAuthUser = (userData: IUser) => {
    user.value = null;
    user.value = userData;
  };

  const logoutAuthUser = () => {
    user.value = null;
  };

  return {
    user,
    userOrders,
    userComments,
    createUser,
    getUser,
    loginUser,
    loadUserOrders,
    loadUserComments,
    setAuthUser,
    logoutAuthUser,
  };
});
