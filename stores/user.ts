import { defineStore } from "pinia";
import type { IUser } from "~/types/user";

export const useUserStore = defineStore("userStore", () => {
  const users = ref<IUser[] | any>([]);
  const user = ref<IUser | any>(null);

  const createUser = async (formData: IUser) => {
    const result = await useFetch("/api/users/create-user", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        user_role: "admin",
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_password: formData.user_password,
      },
    });

    return result;
  };

  return { users, user, createUser };
});
