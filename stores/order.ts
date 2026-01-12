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
  product: TProduct[];
  delivery_type: string;
  // userComment: string;
}

export const useOrderStore = defineStore("orderStore", () => {
  const order = ref<IOrder | null>(null);

  const setOrder = (orderData: IOrder) => {
    order.value = orderData;

    console.log("orderStore - ", order.value);
  };

  return {
    order,
    setOrder,
  };
});
