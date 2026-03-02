import { defineStore } from "pinia";
import type { IOrder } from "~/types/order";

export const useOrderStore = defineStore("orderStore", () => {
  const orders = ref<IOrder[] | any>([]);
  const order = ref<IOrder | any>(null);

  const localStorageOrder = computed(() => localStorage.getItem("order"));

  if (localStorageOrder.value) {
    order.value = JSON.parse(localStorageOrder.value);
  }

  const loadOrders = async () => {
    const result = await useFetch("/api/orders/load-orders", {
      baseURL: process.env.BASE_URL,
      key: "orders",
      method: "GET",
    });

    if (result.status.value === "success") {
      orders.value = result.data.value;
    }

    return result;
  };

  const getOrder = async (orderId: number) => {
    const result = await useFetch("/api/orders/get-order", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        id: orderId,
      },
    });

    if (result.status.value === "success") {
      order.value = result.data.value;
    }

    return result;
  };

  const createOrder = async (formData: IOrder) => {
    const result = await useFetch("/api/orders/create-order", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: formData,
    });

    console.log(result.data.value);

    if (result.status.value === "success") {
      order.value = result.data.value;
      localStorage.setItem("order", JSON.stringify(formData));

      const response = await useFetch("/api/message/send", {
        baseURL: process.env.BASE_URL,
        method: "POST",
        body: {
          subject: `Заказ ${formData.order_number}`,
          message: `Новый заказ ${formData.order_number}, проверить на https://pralineshop.ru/admin/orders/`,
        },
      });

      if (response.status.value === "success") return response;
    }
  };

  const deleteOrder = async (orderId: number) => {
    const result = await useFetch("/api/orders/delete-order", {
      baseURL: process.env.BASE_URL,
      method: "DELETE",
      body: {
        id: orderId,
      },
    });

    return result;
  };

  const cleanOrder = () => {
    order.value = null;
    localStorage.setItem("order", JSON.stringify(order.value));
  };

  return {
    orders,
    order,
    loadOrders,
    getOrder,
    createOrder,
    deleteOrder,
    cleanOrder,
  };
});
