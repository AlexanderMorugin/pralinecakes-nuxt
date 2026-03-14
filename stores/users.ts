import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import type { IUser } from "~/types/user";
import type { IOrder } from "~/types/order";
import type { IComment } from "~/types/comment";

export const useUserStore = defineStore("userStore", () => {
  // for client app
  const user = ref<IUser | any>(null);
  // for admin app
  const adminUsers = ref<IUser[] | any>([]);
  const adminUser = ref<IUser | any>(null);

  const userOrders = ref<IOrder[] | any>([]);
  const userComments = ref<IComment[] | any>([]);

  // for client app
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
      await getUser();
    }

    return result;
  };

  const getUser = async () => {
    const result = await useFetch("/api/users/get-user", {
      baseURL: process.env.BASE_URL,
      method: "GET",
    });

    if (result.status.value === "success") {
      user.value = result.data.value;
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

  // for admin app
  const loadAdminUsers = async () => {
    if (user.value && user.value.user_role !== "client") {
      try {
        const result = await useFetch("/api/users/admin/load-admin-users", {
          baseURL: process.env.BASE_URL,
          key: "users",
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
    // console.log("clientUserId", clientUserId);

    if (user.value && user.value.user_role !== "client") {
      try {
        const result = await useFetch("/api/users/admin/get-admin-user", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            id: clientUserId,
          },
        });

        if (result.error.value) {
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

  const setAuthUser = (userData: IUser) => {
    user.value = null;

    user.value = userData;
  };

  const logoutAuthUser = () => {
    user.value = null;
  };

  return {
    user,
    adminUsers,
    adminUser,
    createUser,
    getUser,
    loginUser,
    loadAdminUsers,
    getAdminUser,
    // deleteUser,
    setAuthUser,
    logoutAuthUser,
    // loadUserOrders,
    // loadUserComments,
  };
});
