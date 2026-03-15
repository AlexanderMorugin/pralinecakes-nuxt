import { defineStore } from "pinia";
import type { IOrder } from "~/types/order";

export const useAdminOrderStore = defineStore("adminOrderStore", () => {
  const adminOrders = ref<IOrder[] | any>([]);
  const adminOrder = ref<IOrder | any>(null);

  const userStore = useUserStore();

  const loadAdminOrders = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/orders/admin/load-admin-orders", {
          baseURL: process.env.BASE_URL,
          key: "admin-orders",
          method: "GET",
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminOrders.value = result.data.value;
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

  const getAdminOrder = async (orderId: number) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/orders/admin/get-admin-order", {
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
          adminOrder.value = result.data.value;
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

  const updateAdminStatusAcceptOrder = async (date: string) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/orders/admin/accept-admin-order", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminOrder.value[0].id,
            status: date,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminOrder.value[0].status_accept = date;

          adminOrders.value = adminOrders.value.map((item: any) =>
            item.id === adminOrder.value.id
              ? { ...item, status_accept: date }
              : item,
          );
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

  const updateAdminStatusDeliveryOrder = async (date: string) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/orders/admin/delivery-admin-order",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminOrder.value[0].id,
              status: date,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminOrder.value[0].status_delivery = date;

          adminOrders.value = adminOrders.value.map((item: any) =>
            item.id === adminOrder.value.id
              ? { ...item, status_delivery: date }
              : item,
          );
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

  const updateAdminStatusCompleteOrder = async (date: string) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/orders/admin/complete-admin-order",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminOrder.value[0].id,
              status: date,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminOrder.value[0].status_complete = date;

          adminOrders.value = adminOrders.value.map((item: any) =>
            item.id === adminOrder.value.id
              ? { ...item, status_complete: date }
              : item,
          );
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

  const deleteAdminOrder = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/orders/admin/delete-admin-order", {
          baseURL: process.env.BASE_URL,
          method: "DELETE",
          body: {
            id: adminOrder.value[0].id,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
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

  return {
    adminOrders,
    adminOrder,
    loadAdminOrders,
    getAdminOrder,
    updateAdminStatusAcceptOrder,
    updateAdminStatusDeliveryOrder,
    updateAdminStatusCompleteOrder,
    deleteAdminOrder,
  };
});
