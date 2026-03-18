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

  const plusBonusToUser = async () => {
    try {
      const result = await useFetch("/api/users/client/update-client-bonus", {
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

  const minusBonusFromUser = async (bonusForMinus: number) => {
    try {
      const result = await useFetch("/api/users/client/update-client-bonus", {
        baseURL: process.env.BASE_URL,
        method: "PATCH",
        body: {
          user_id: order.value[0].user_id,
          user_bonus: userStore.user.user_bonus - bonusForMinus,
        },
      });

      if (result.status.value === "success") {
        userStore.user.user_bonus = userStore.user.user_bonus - bonusForMinus;
      }
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const createOrder = async (formData: IOrder) => {
    // console.log("createOrder", formData);

    const result = await useFetch("/api/orders/client/create-client-order", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: formData,
    });

    if (result.status.value === "success") {
      order.value = result.data.value;
      localStorage.setItem("order", JSON.stringify([formData]));

      // прибавляем пользователю новый бонус
      if (userStore.user) {
        await plusBonusToUser();
      }

      if (userStore.user && formData.user_spend_bonus) {
        await minusBonusFromUser(formData.user_spend_bonus);
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

  const cleanOrder = () => {
    order.value = null;
    localStorage.setItem("order", JSON.stringify(order.value));
  };

  return {
    orders,
    order,
    createOrder,
    cleanOrder,
  };
});
