import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const usePastryStore = defineStore("pastryStore", () => {
  const pastries = ref<IProduct[] | any>([]);
  const pastry = ref<IProduct | any>(null);

  const loadPastries = async () => {
    try {
      const result = await useFetch("/api/pastry/load-pastries", {
        baseURL: process.env.BASE_URL,
        key: "pastries",
        method: "GET",
      });
      if (result.status.value === "success") {
        pastries.value = result.data.value;
      }
      return result;
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const loadAdminPastries = async () => {
    try {
      const result = await useFetch("/api/pastry/load-admin-pastries", {
        baseURL: process.env.BASE_URL,
        method: "GET",
      });

      if (result.status.value === "success") {
        pastries.value = result.data.value;
      }

      return result;
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const getPastry = async (productSlug: string) => {
    const result = await useFetch("/api/pastry/get-pastry", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        slug: productSlug,
      },
    });

    if (result.status.value === "success") {
      pastry.value = result.data.value;
    }

    return result;
  };

  const createPastryTitle = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/create-title", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        type: "pastry",
        slug: formData.slug,
        title: formData.title,
        description_short: formData.description_short,
      },
    });

    return result;
  };

  const updatePastryTitle = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-title", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        title: formData.title,
        description_short: formData.description_short,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
          ? {
              ...item,
              title: formData.title,
              description_short: formData.description_short,
            }
          : item,
      );
    }
  };

  return {
    pastries,
    pastry,
    loadPastries,
    loadAdminPastries,
    getPastry,
    createPastryTitle,
    updatePastryTitle,
  };
});
