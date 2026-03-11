import { defineStore } from "pinia";
import type { IOrder } from "~/types/order";

export const useOrderStore = defineStore("orderStore", () => {
  const orders = ref<IOrder[] | any>([]);
  const order = ref<IOrder | any>(null);

  const userStore = useUserStore();

  const localStorageOrder = computed(() => localStorage.getItem("order"));

  if (localStorageOrder.value) {
    order.value = JSON.parse(localStorageOrder.value);
  }

  const loadOrders = async () => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/orders/load-orders", {
          baseURL: process.env.BASE_URL,
          key: "orders",
          method: "GET",
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          orders.value = result.data.value;
        }

        return result;
      } catch (error) {
        throw createError({
          status: 404,
          statusText: "Данные не найдены",
        });
      }
    } else {
      return navigateTo("/");
    }
  };

  const getOrder = async (orderId: number) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/orders/get-order", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            id: orderId,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          order.value = result.data.value;
        }

        return result;
      } catch (error) {
        throw createError({
          status: 404,
          statusText: "Данные не найдены",
        });
      }
    } else {
      return navigateTo("/");
    }
  };

  const createOrder = async (formData: IOrder) => {
    const result = await useFetch("/api/orders/create-order", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: formData,
    });

    if (result.status.value === "success") {
      order.value = result.data.value;

      console.log("order.value ", order.value);

      localStorage.setItem("order", JSON.stringify(formData));

      // console.log(result.data.value[0].user_bonus);
      const res = await useFetch("/api/users/update-bonus", {
        baseURL: process.env.BASE_URL,
        method: "PATCH",
        body: {
          user_id: order.value.user_id,
          user_bonus: order.value.user_bonus,
        },
      });

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

  const updateStatusAcceptOrder = async (date: string) => {
    const result = await useFetch("/api/orders/accept-order", {
      baseURL: process.env.BASE_URL,
      method: "PATCH",
      body: {
        id: order.value[0].id,
        status: date,
      },
    });

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

    if (result.status.value === "success") {
      order.value[0].status_accept = date;

      orders.value = orders.value.map((item: any) =>
        item.id === order.value.id ? { ...item, status_accept: date } : item,
      );
    }

    return result;
  };

  const updateStatusDeliveryOrder = async (date: string) => {
    const result = await useFetch("/api/orders/delivery-order", {
      baseURL: process.env.BASE_URL,
      method: "PATCH",
      body: {
        id: order.value[0].id,
        status: date,
      },
    });

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

    if (result.status.value === "success") {
      order.value[0].status_delivery = date;

      orders.value = orders.value.map((item: any) =>
        item.id === order.value.id ? { ...item, status_delivery: date } : item,
      );
    }

    return result;
  };

  const updateStatusCompleteOrder = async (date: string) => {
    const result = await useFetch("/api/orders/complete-order", {
      baseURL: process.env.BASE_URL,
      method: "PATCH",
      body: {
        id: order.value[0].id,
        status: date,
      },
    });

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

    if (result.status.value === "success") {
      order.value[0].status_complete = date;

      orders.value = orders.value.map((item: any) =>
        item.id === order.value.id ? { ...item, status_complete: date } : item,
      );
    }

    return result;
  };

  const deleteOrder = async (orderId: number) => {
    const result = await useFetch("/api/orders/delete-order", {
      baseURL: process.env.BASE_URL,
      method: "DELETE",
      body: {
        id: order.value[0].id,
      },
    });

    if (result.error.value) {
      return navigateTo("/auth-page");
    }

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
    updateStatusAcceptOrder,
    updateStatusDeliveryOrder,
    updateStatusCompleteOrder,
    deleteOrder,
    cleanOrder,
  };
});
