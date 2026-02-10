export interface IProduct {
  id?: any;
  type?: string;
  slug?: string;
  title?: string;
  description_short?: string;
  description_one?: string;
  description_two?: string;
  description_three?: string;

  image_1_small?: string;
  image_1_big?: string;
  image_2_small?: string;
  image_2_big?: string;
  image_3_small?: string;
  image_3_big?: string;
  image_4_small?: string;
  image_4_big?: string;
  image_5_small?: string;
  image_5_big?: string;
  image_6_small?: string;
  image_6_big?: string;

  meta_title?: string;
  meta_description?: string;
  // meta_сanonical_url?: string;

  weight?: number;
  width?: number;
  height?: number;

  price?: number;
  discount?: number;
  discount_price?: number;

  ingredients?: string;
  protein?: string;
  fat?: string;
  carbohydrates?: string;
  calories?: string;

  visibility: boolean;

  createdAt?: any;
  updatedAt?: any;
}
