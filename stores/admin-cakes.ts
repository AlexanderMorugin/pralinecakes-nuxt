import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const useAdminCakesStore = defineStore("adminCakesStore", () => {
  const adminCakes = ref<IProduct[] | any>([]);
  const adminCake = ref<IProduct | any>(null);

  const loadAdminCakes = async () => {
    const {
      data: adminCakesData,
      status: adminCakesStatus,
      // pending: adminCakesPending,
      pending,
    } = await useFetch("/api/admin/cakes/load-cakes", {
      baseURL: process.env.BASE_URL,
      key: "admin-cakes",
      method: "GET",
    });

    if (adminCakesStatus.value === "success") {
      adminCakes.value = adminCakesData.value;
    }

    return { adminCakesData, adminCakesStatus, pending };
  };

  const createAdminCakeTitle = async (formData: IProduct) => {
    const result = await useFetch("/api/admin/cakes/create-title", {
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
