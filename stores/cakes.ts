import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

const config = useRuntimeConfig();

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref<IProduct[] | any>([]);
  const cake = ref<IProduct | any>(null);

  const loadCakes = async () => {
    const result = await useFetch("/api/cakes/load-cakes", {
      // server: true,
      // lazy: false,
      method: "GET",
    });

    if (result.status.value === "success") {
      cakes.value = result.data.value;
    }

    return result;
  };

  const getCake = async (cakeSlug: string) => {
    const result = await useFetch("/api/cakes/get-cake", {
      method: "POST",
      body: {
        slug: cakeSlug,
      },
    });

    if (result.status.value === "success") {
      cake.value = result.data.value;
    }

    return result;
  };

  return {
    cakes,
    cake,
    loadCakes,
    getCake,
  };
});
