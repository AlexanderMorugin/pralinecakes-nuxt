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

  const updateBonus = async () => {
    try {
      const result = await useFetch("/api/users/update-bonus", {
        baseURL: process.env.BASE_URL,
        method: "PATCH",
        body: {
          user_id: order.value[0].user_id,
          user_bonus: userStore.user.user_bonus + order.value[0].user_bonus,
        },
      });

      if (result.status.value === "success") {
        userStore.user.user_bonus =
          userStore.user.user_bonus + order.value[0].user_bonus;
      }
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const createOrder = async (formData: IOrder) => {
    const result = await useFetch("/api/orders/client/create-client-order", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: formData,
    });

    if (result.status.value === "success") {
      order.value = result.data.value;
      localStorage.setItem("order", JSON.stringify(formData));

      if (userStore.user) {
        await updateBonus();
      }

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

  // for admin app
  // const loadAdminOrders = async () => {
  //   if (userStore.user && userStore.user.user_role !== "client") {
  //     try {
  //       const result = await useFetch("/api/orders/admin/load-admin-orders", {
  //         baseURL: process.env.BASE_URL,
  //         key: "admin-orders",
  //         method: "GET",
  //       });

  //       if (result.error.value) {
  //         return navigateTo("/auth-page");
  //       }

  //       if (result.status.value === "success") {
  //         orders.value = result.data.value;
  //       }

  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  // // for admin app
  // const getAdminOrder = async (orderId: number) => {
  //   if (userStore.user && userStore.user.user_role !== "client") {
  //     try {
  //       const result = await useFetch("/api/orders/admin/get-admin-order", {
  //         baseURL: process.env.BASE_URL,
  //         method: "POST",
  //         body: {
  //           id: orderId,
  //         },
  //       });

  //       if (result.error.value) {
  //         return navigateTo("/auth-page");
  //       }

  //       if (result.status.value === "success") {
  //         order.value = result.data.value;
  //       }

  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  // const updateAdminStatusAcceptOrder = async (date: string) => {
  //   if (userStore.user && userStore.user.user_role !== "client") {
  //     try {
  //       const result = await useFetch("/api/orders/admin/accept-admin-order", {
  //         baseURL: process.env.BASE_URL,
  //         method: "PATCH",
  //         body: {
  //           id: order.value[0].id,
  //           status: date,
  //         },
  //       });

  //       if (result.error.value) {
  //         return navigateTo("/auth-page");
  //       }

  //       if (result.status.value === "success") {
  //         order.value[0].status_accept = date;

  //         orders.value = orders.value.map((item: any) =>
  //           item.id === order.value.id
  //             ? { ...item, status_accept: date }
  //             : item,
  //         );
  //       }

  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  // const updateAdminStatusDeliveryOrder = async (date: string) => {
  //   if (userStore.user && userStore.user.user_role !== "client") {
  //     try {
  //       const result = await useFetch(
  //         "/api/orders/admin/delivery-admin-order",
  //         {
  //           baseURL: process.env.BASE_URL,
  //           method: "PATCH",
  //           body: {
  //             id: order.value[0].id,
  //             status: date,
  //           },
  //         },
  //       );

  //       if (result.error.value) {
  //         return navigateTo("/auth-page");
  //       }

  //       if (result.status.value === "success") {
  //         order.value[0].status_delivery = date;

  //         orders.value = orders.value.map((item: any) =>
  //           item.id === order.value.id
  //             ? { ...item, status_delivery: date }
  //             : item,
  //         );
  //       }

  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  // const updateAdminStatusCompleteOrder = async (date: string) => {
  //   if (userStore.user && userStore.user.user_role !== "client") {
  //     try {
  //       const result = await useFetch(
  //         "/api/orders/admin/complete-admin-order",
  //         {
  //           baseURL: process.env.BASE_URL,
  //           method: "PATCH",
  //           body: {
  //             id: order.value[0].id,
  //             status: date,
  //           },
  //         },
  //       );

  //       if (result.error.value) {
  //         return navigateTo("/auth-page");
  //       }

  //       if (result.status.value === "success") {
  //         order.value[0].status_complete = date;

  //         orders.value = orders.value.map((item: any) =>
  //           item.id === order.value.id
  //             ? { ...item, status_complete: date }
  //             : item,
  //         );
  //       }

  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  // const deleteAdminOrder = async () => {
  //   if (userStore.user && userStore.user.user_role !== "client") {
  //     try {
  //       const result = await useFetch("/api/orders/admin/delete-admin-order", {
  //         baseURL: process.env.BASE_URL,
  //         method: "DELETE",
  //         body: {
  //           id: order.value[0].id,
  //         },
  //       });

  //       if (result.error.value) {
  //         return navigateTo("/auth-page");
  //       }

  //       return result;
  //     } catch (error) {
  //       throw createError({
  //         status: 404,
  //         statusText: "Данные не найдены",
  //       });
  //     }
  //   } else {
  //     return navigateTo("/");
  //   }
  // };

  // for client app
  const cleanOrder = () => {
    order.value = null;
    localStorage.setItem("order", JSON.stringify(order.value));
  };

  return {
    orders,
    order,
    // loadAdminOrders,
    // getAdminOrder,
    createOrder,
    // updateAdminStatusAcceptOrder,
    // updateAdminStatusDeliveryOrder,
    // updateAdminStatusCompleteOrder,
    // deleteAdminOrder,
    cleanOrder,
  };
});
