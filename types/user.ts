export interface IUser {
  id?: string;
  user_name?: string;
  user_email?: string;
  user_password?: string;
  user_role?: string;
  user_bonus?: number;
  refresh_token?: string;

  createdAt?: any;
  updatedAt?: any;
}
