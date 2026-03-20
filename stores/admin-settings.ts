import { defineStore } from "pinia";
import type { ISetting } from "~/types/setting";

export const useAdminSettingStore = defineStore("adminSettingStore", () => {
  const adminSettings = ref<ISetting | any>([]);

  const userStore = useUserStore();

  const loadAdminSettings = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/settings/admin/load-admin-settings",
          {
            baseURL: process.env.BASE_URL,
            key: "admin-settings",
            method: "GET",
          },
        );

        if (result.status.value === "success") {
          adminSettings.value = result.data.value;
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

  // const createAdminSettings = async (formData: ISetting) => {
  //   if (userStore.user && userStore.user.user_role !== "client") {
  //     try {
  //       const result = await useFetch("/api/settings/admin/create-admin-settings", {
  //         baseURL: process.env.BASE_URL,
  //         method: "POST",
  //         body: {
  //           // id: formData.id,
  //           min_order_sum: formData.min_order_sum,
  //           delivery_sum: formData.delivery_sum,
  //           samovyvoz_bonus: formData.samovyvoz_bonus,
  // cart_product_bonus: formData.cart_product_bonus,
  //         },
  //       });

  //       if (result.error.value) {
  //         return navigateTo("/auth-page");
  //       }

  //       if (result.status.value === "success") {
  //         settings.value = formData;
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

  const updateAdminSettings = async (formData: ISetting) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/settings/admin/update-admin-settings",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              min_order_sum: formData.min_order_sum,
              delivery_sum: formData.delivery_sum,
              samovyvoz_bonus: formData.samovyvoz_bonus,
              cart_product_bonus: formData.cart_product_bonus,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminSettings.value = formData;
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
    adminSettings,
    loadAdminSettings,
    // createAdminSettings,
    updateAdminSettings,
  };
});
