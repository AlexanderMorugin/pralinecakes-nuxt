import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import type { IUser } from "~/types/user";

export const useUserStore = defineStore("userStore", () => {
  const users = ref<IUser[] | any>([]);
  const user = ref<IUser | any>(null);

  const loadUsers = async () => {
    try {
      const result = await useFetch("/api/users/load-users", {
        baseURL: process.env.BASE_URL,
        key: "users",
        method: "GET",
      });

      // console.log(result);

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
  };

  const getUser = async (userId: string) => {
    const result = await useFetch("/api/users/get-user", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        user_id: userId,
      },
    });

    // console.log(result);

    if (result.status.value === "success") {
      user.value = result.data.value;
    }

    return result;
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

    return result;
  };

  return { users, user, loadUsers, getUser, createUser, loginUser, deleteUser };
});
