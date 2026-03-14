import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import type { IUser } from "~/types/user";
import type { IOrder } from "~/types/order";
import type { IComment } from "~/types/comment";

export const useClientUserStore = defineStore("clientUserStore", () => {
  // const clientUsers = ref<IUser[] | any>([]);
  const clientUser = ref<IUser | any>(null);
  const clientUserOrders = ref<IOrder[] | any>([]);
  const clientUserComments = ref<IComment[] | any>([]);

  const createClientUser = async (formData: IUser) => {
    const result = await useFetch("/api/users/client/create-client-user", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        id: uuidv4(),
        user_role: "client",
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_password: formData.user_password,
      },
    });

    if (result.status.value === "success") {
      await getClientUser();
    }

    return result;
  };

  const getClientUser = async () => {
    const result = await useFetch("/api/users/client/get-client-user", {
      baseURL: process.env.BASE_URL,
      method: "GET",
    });

    if (result.status.value === "success") {
      clientUser.value = result.data.value;
    }

    return result;
  };

  // const loginUser = async (formData: IUser) => {
  //   const result = await useFetch("/api/users/login-user", {
  //     baseURL: process.env.BASE_URL,
  //     method: "POST",
  //     body: {
  //       user_email: formData.user_email,
  //       user_password: formData.user_password,
  //     },
  //   });

  //   if (result.status.value === "success") {
  //     user.value = result.data.value;
  //   }

  //   return result;
  // };

  // const deleteUser = async () => {
  //   const result = await useFetch("/api/users/delete-user", {
  //     baseURL: process.env.BASE_URL,
  //     method: "DELETE",
  //     body: {
  //       user_id: user.value.id,
  //     },
  //   });

  //   // if (result.error.value) {
  //   //   return navigateTo("/auth-page");
  //   // }

  //   return result;
  // };

  // const loadUserOrders = async () => {
  //   if (user.value) {
  //     try {
  //       const result = await useFetch("/api/users/load-user-orders", {
  //         baseURL: process.env.BASE_URL,
  //         key: "user-orders",
  //         method: "POST",
  //         body: {
  //           user_id: user.value.id,
  //         },
  //       });

  //       // if (result.error.value) {
  //       //   return navigateTo("/auth-page");
  //       // }

  //       if (result.status.value === "success") {
  //         userOrders.value = result.data.value;
  //       }
  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  // const loadUserComments = async () => {
  //   if (user.value) {
  //     try {
  //       const result = await useFetch("/api/users/load-user-comments", {
  //         baseURL: process.env.BASE_URL,
  //         key: "user-comments",
  //         method: "POST",
  //         body: {
  //           user_id: user.value.id,
  //         },
  //       });

  //       // if (result.error.value) {
  //       //   return navigateTo("/auth-page");
  //       // }

  //       if (result.status.value === "success") {
  //         userComments.value = result.data.value;
  //       }
  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  const setAuthClientUser = (userData: IUser) => {
    clientUser.value = null;

    clientUser.value = userData;
  };

  const logoutAuthClientUser = () => {
    clientUser.value = null;
  };

  return {
    // clientUsers,
    clientUser,
    clientUserOrders,
    clientUserComments,
    // loadUsers,
    // getUser,
    createClientUser,
    getClientUser,
    // loginUser,
    // deleteUser,
    setAuthClientUser,
    logoutAuthClientUser,
    // loadUserOrders,
    // loadUserComments,
  };
});
