import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const useClientCakeStore = defineStore("clientCakeStore", () => {
  const clientCakes = ref<IProduct[] | any>([]);
  const clientCake = ref<IProduct | any>(null);

  const loadClientCakes = async () => {
    try {
      const result = await useFetch("/api/cakes/client/load-client-cakes", {
        baseURL: process.env.BASE_URL,
        key: "client-cakes",
        method: "GET",
      });

      if (result.status.value === "success") {
        clientCakes.value = result.data.value;
      }

      return result;
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const getClientCake = async (productSlug: string) => {
    const result = await useFetch("/api/cakes/client/get-client-cake", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        slug: productSlug,
      },
    });

    if (result.status.value === "success") {
      clientCake.value = result.data.value;
    }

    return result;
  };

  return {
    clientCakes,
    clientCake,
    loadClientCakes,
    getClientCake,
  };
});
