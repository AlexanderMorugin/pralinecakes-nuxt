import type { IUser } from "~/types/user";

export const transformUser = (userData: IUser | any) => {
  const hasUser = {
    id: userData.id,
    user_name: userData.user_name,
    user_email: userData.user_email,
    user_bonus: userData.user_bonus,
  };

  return hasUser;
};
