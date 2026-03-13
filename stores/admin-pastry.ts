import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const useAdminPastryStore = defineStore("adminPastryStore", () => {
  const adminPastries = ref<IProduct[] | any>([]);
  const adminPastry = ref<IProduct | any>(null);

  const userStore = useUserStore();

  const loadAdminPastries = async () => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/load-admin-pastries", {
          baseURL: process.env.BASE_URL,
          method: "GET",
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = result.data.value;
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

  const getAdminPastry = async (productSlug: string) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/get-admin-pastry", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            slug: productSlug,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastry.value = result.data.value;
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

  const createAdminPastryTitle = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/create-admin-title", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            type: "pastry",
            slug: formData.slug,
            title: formData.title,
            description_short: formData.description_short,
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

  const updateAdminPastryTitle = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/update-admin-title", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminPastry.value[0].id,
            title: formData.title,
            description_short: formData.description_short,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  title: formData.title,
                  description_short: formData.description_short,
                }
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

  const updateAdminPastryDescription = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch(
          "/api/pastry/admin/update-admin-description",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminPastry.value[0].id,
              description_one: formData.description_one,
              description_two: formData.description_two,
              description_three: formData.description_three,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  title: formData.title,
                  description_short: formData.description_short,
                }
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

  const updateAdminPastryImages = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/update-admin-images", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminPastry.value[0].id,
            image_1_small: formData.image_1_small,
            image_1_big: formData.image_1_big,
            image_2_small: formData.image_2_small,
            image_2_big: formData.image_2_big,
            image_3_small: formData.image_3_small,
            image_3_big: formData.image_3_big,
            image_4_small: formData.image_4_small,
            image_4_big: formData.image_4_big,
            image_5_small: formData.image_5_small,
            image_5_big: formData.image_5_big,
            image_6_small: formData.image_6_small,
            image_6_big: formData.image_6_big,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  price: formData.price,
                  discount: formData.discount,
                  discount_price: formData.discount_price,
                }
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

  const updateAdminProductMeta = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/update-admin-meta", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminPastry.value[0].id,
            meta_title: formData.meta_title,
            meta_description: formData.meta_description,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  meta_title: formData.meta_title,
                  meta_description: formData.meta_description,
                }
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

  const updateAdminProductSizes = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/update-admin-sizes", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminPastry.value[0].id,
            weight: formData.weight,
            width: formData.width,
            height: formData.height,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  weight: formData.weight,
                  width: formData.width,
                  height: formData.height,
                }
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

  const updateAdminProductPrice = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/update-admin-price", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminPastry.value[0].id,
            price: formData.price,
            discount: formData.discount,
            discount_price: formData.discount_price,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  price: formData.price,
                  discount: formData.discount,
                  discount_price: formData.discount_price,
                }
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

  const updateAdminProductIngredients = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch(
          "/api/pastry/admin/update-admin-ingredients",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminPastry.value[0].id,
              ingredients: formData.ingredients,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  ingredients: formData.ingredients,
                }
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

  const updateAdminProductNutritional = async (formData: IProduct) => {
    if (userStore.user) {
      try {
        const result = await useFetch(
          "/api/pastry/admin/update-admin-nutritional",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminPastry.value[0].id,
              calories: formData.calories,
              protein: formData.protein,
              fat: formData.fat,
              carbohydrates: formData.carbohydrates,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  calories: formData.calories,
                  protein: formData.protein,
                  fat: formData.fat,
                  carbohydrates: formData.carbohydrates,
                }
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

  const updateAdminProductRating = async (rating: number) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/update-admin-rating", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminPastry.value[0].id,
            rating: rating,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  rating: rating,
                }
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

  const updateAdminProductBadge = async (badge: number) => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/update-admin-badge", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminPastry.value[0].id,
            badge: badge,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  badge: badge,
                }
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

  const updateAdminProductVisibility = async (visibility: boolean) => {
    if (userStore.user) {
      try {
        const result = await useFetch(
          "/api/pastry/admin/update-admin-visibility",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminPastry.value[0].id,
              visibility: visibility,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminPastries.value = adminPastries.value.map((item: IProduct) =>
            item.id === adminPastry.value[0].id
              ? {
                  ...item,
                  visibility: visibility,
                }
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

  const deleteAdminPastry = async () => {
    if (userStore.user) {
      try {
        const result = await useFetch("/api/pastry/admin/delete-admin-pastry", {
          baseURL: process.env.BASE_URL,
          method: "DELETE",
          body: {
            id: adminPastry.value[0].id,
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
    adminPastries,
    adminPastry,
    loadAdminPastries,
    getAdminPastry,
    createAdminPastryTitle,
    updateAdminPastryTitle,
    updateAdminPastryDescription,
    updateAdminPastryImages,
    updateAdminProductMeta,
    updateAdminProductSizes,
    updateAdminProductPrice,
    updateAdminProductIngredients,
    updateAdminProductNutritional,
    updateAdminProductRating,
    updateAdminProductBadge,
    updateAdminProductVisibility,
    deleteAdminPastry,
  };
});
