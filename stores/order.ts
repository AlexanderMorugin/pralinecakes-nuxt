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
  order_number: string;
  order_date: any;
  delivery_type: string;
  delivery_sum: number;
  total_cart_count: number;
  total_cart_sum: number;
  cart_samovyvoz_bonus: number;
  total_order_sum: number;
  cart_list: TProduct[];
  user_bonus: number;
  user_comment: string;
  user_name: string;
  user_phone: number;
  user_city: string;
  user_street: string;
  user_building: number;
  user_entrance: number;
  user_flat: number;
  user_floor: number;
}

export const useOrderStore = defineStore("orderStore", () => {
  const order = ref<IOrder | null>(null);

  const addOrder = (orderData: IOrder) => {
    order.value = orderData;

    console.log("orderStore - ", order.value.order_number);
  };

  const cleanOrder = () => (order.value = null);

  return {
    order,
    addOrder,
    cleanOrder,
  };
});
