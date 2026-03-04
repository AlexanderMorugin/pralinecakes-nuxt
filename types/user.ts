export interface IUser {
  id?: number;
  date?: string;

  user_name?: string;
  user_email?: string;
  user_password?: string;
  user_role?: string;
  user_bonus?: number;

  createdAt?: any;
  updatedAt?: any;
}
