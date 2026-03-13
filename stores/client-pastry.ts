import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const useClientPastryStore = defineStore("clientPastryStore", () => {
  const clientPastries = ref<IProduct[] | any>([]);
  const clientPastry = ref<IProduct | any>(null);

  const loadClientPastries = async () => {
    try {
      const result = await useFetch("/api/pastry/client/load-client-pastries", {
        baseURL: process.env.BASE_URL,
        key: "client-pastries",
        method: "GET",
      });
      if (result.status.value === "success") {
        clientPastries.value = result.data.value;
      }
      return result;
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const getClientPastry = async (productSlug: string) => {
    const result = await useFetch("/api/pastry/client/get-client-pastry", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        slug: productSlug,
      },
    });

    if (result.status.value === "success") {
      clientPastry.value = result.data.value;
    }

    return result;
  };

  return {
    clientPastries,
    clientPastry,
    loadClientPastries,
    getClientPastry,
  };
});
