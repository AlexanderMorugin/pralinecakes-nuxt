import { defineStore } from "pinia";

export type TProduct = {
  id: number;
  type: string;
  slug: string;
  image_list_card: string;
  price: number;
  weigth: number;
  count: number;
};

export interface IOrder {
  delivery_type: string;
  total_cart_count: number;
  total_cart_sum: number;
  cart_samovyvoz_bonus: number;
  total_order_sum: number;
  cart_list: TProduct[];
  user_bonus: number;
  user_comment: string;
}

export const useOrderStore = defineStore("orderStore", () => {
  const order = ref<IOrder | null>(null);

  const addOrder = (orderData: IOrder) => {
    order.value = orderData;

    console.log("orderStore - ", order.value);
  };

  return {
    order,
    addOrder,
  };
});
