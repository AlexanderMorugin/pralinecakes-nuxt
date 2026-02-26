import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const useAdminCakesStore = defineStore("adminCakesStore", () => {
  const adminCakes = ref<IProduct[] | any>([]);
  const adminCake = ref<IProduct | any>(null);

  const loadAdminCakes = async () => {
    const result = await useFetch("/api/admin/cakes/admin-load-cakes", {
      baseURL: process.env.BASE_URL,
      key: "admin-cakes",
      method: "GET",
    });

    if (result.status.value === "success") {
      adminCakes.value = result.data.value;
    }

    return result;
  };

  const createAdminCakeTitle = async (formData: IProduct) => {
    const result = await useFetch("/api/admin/cakes/admin-create-title", {
      baseURL: process.env.BASE_URL,
      method: "POST",
      body: {
        type: "cakes",
        slug: formData.slug,
        title: formData.title,
        description_short: formData.description_short,
      },
    });

    return result;
  };

  return {
    adminCakes,
    adminCake,
    loadAdminCakes,
    createAdminCakeTitle,
  };
});
