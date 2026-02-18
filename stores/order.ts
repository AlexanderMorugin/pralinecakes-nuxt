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

const config = useRuntimeConfig();

export const useOrderStore = defineStore("orderStore", () => {
  const order = ref<IOrder | null>(null);

  const createOrder = async (formData: IOrder) => {
    const result = await useFetch(
      `${config.public.baseUrl}/api/orders/create-order`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (result.status.value === "success") {
      order.value = formData;

      const response = await useFetch(
        `${config.public.baseUrl}/api/message/send`,
        {
          method: "POST",
          body: {
            subject: `Заказ ${formData.order_number}`,
            // message: `Новый заказ ${formData.order_number}, проверить на https://praline-crm-nuxt.vercel.app/orders/`,
          },
        },
      );

      // console.log(response.data.value);

      // if (data) return result;

      return result;
    }
  };

  const deleteOrder = async (orderId: number) => {
    const result = await useFetch("/api/orders/delete-order", {
      method: "DELETE",
      body: {
        id: orderId,
      },
    });

    return result;
  };

  const cleanOrder = () => (order.value = null);

  return {
    order,
    createOrder,
    deleteOrder,
    cleanOrder,
  };
});
