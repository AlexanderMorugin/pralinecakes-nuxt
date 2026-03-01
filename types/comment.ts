export interface IComment {
  id?: number;
  date?: string;

  product_id?: number;
  product_image?: string;
  product_title?: string;

  user_name?: string;
  user_rating?: number;
  user_comment?: string;

  visibility?: boolean;

  createdAt?: any;
  updatedAt?: any;
}
