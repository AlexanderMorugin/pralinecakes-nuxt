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

  const getUser = async (userId: number) => {
    const result = await useFetch("/api/users/get-user", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        user_id: userId,
      },
    });

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
        user_role: "admin",
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_password: formData.user_password,
      },
    });

    return result;
  };

  return { users, user, loadUsers, getUser, createUser };
});
