import { defineStore } from "pinia";
import type { ISetting } from "~/types/setting";

export const useSettingStore = defineStore("settingStore", () => {
  const settings = ref<ISetting | any>(null);
  // const settings = ref(null);

  const userStore = useUserStore();

  const loadSettings = async () => {
    try {
      const result = await useFetch("/api/settings/load-settings", {
        baseURL: process.env.BASE_URL,
        key: "settings",
        method: "GET",
      });

      // console.log(result.data.value);

      if (result.status.value === "success") {
        settings.value = result.data.value;
      }

      return result;
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const createAdminSettings = async (formData: ISetting) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/settings/create-settings", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            // id: formData.id,
            min_order_sum: formData.min_order_sum,
            delivery_sum: formData.delivery_sum,
            samovyvoz_bonus: formData.samovyvoz_bonus,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          settings.value = formData;
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

  const updateAdminSettings = async (formData: ISetting) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      // console.log(settings.value.length ? settings.value : "null");

      try {
        // if (!settings.value.length) {
        //   await createAdminSettings(formData);
        // } else {
        const result = await useFetch("/api/settings/update-settings", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            // id: formData.id,
            min_order_sum: formData.min_order_sum,
            delivery_sum: formData.delivery_sum,
            samovyvoz_bonus: formData.samovyvoz_bonus,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          settings.value = formData;
        }

        return result;
        // }
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
    settings,
    loadSettings,
    createAdminSettings,
    updateAdminSettings,
  };
});
