import { defineStore } from "pinia";
import type { ISetting } from "~/types/setting";

export const useClientSettingStore = defineStore("clientSettingStore", () => {
  const clientSettings = ref<ISetting | any>([]);

  const loadClientSettings = async () => {
    try {
      const result = await useFetch(
        "/api/settings/client/load-client-settings",
        {
          baseURL: process.env.BASE_URL,
          key: "client-settings",
          method: "GET",
        },
      );

      if (result.status.value === "success") {
        clientSettings.value = result.data.value;
      }

      return result;
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  return {
    clientSettings,
    loadClientSettings,
  };
});
