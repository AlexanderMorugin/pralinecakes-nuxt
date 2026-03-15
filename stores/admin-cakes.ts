import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const useAdminCakeStore = defineStore("adminCakeStore", () => {
  const adminCakes = ref<IProduct[] | any>([]);
  const adminCake = ref<IProduct | any>(null);

  const userStore = useUserStore();

  const loadAdminCakes = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/load-admin-cakes", {
          baseURL: process.env.BASE_URL,
          key: "admin-cakes",
          method: "GET",
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = result.data.value;
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

  const getAdminCake = async (productSlug: string) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/get-admin-cake", {
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
          adminCake.value = result.data.value;
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

  const createAdminCakeTitle = async (formData: IProduct) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/create-admin-title", {
          baseURL: process.env.BASE_URL,
          method: "POST",
          body: {
            type: "cakes",
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

  const updateAdminCakeTitle = async (formData: IProduct) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/update-admin-title", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminCake.value[0].id,
            title: formData.title,
            description_short: formData.description_short,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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

  const updateAdminCakeDescription = async (formData: IProduct) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/cakes/admin/update-admin-description",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminCake.value[0].id,
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
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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

  const updateAdminProductImages = async (formData: IProduct) => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/update-admin-images", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminCake.value[0].id,
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
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/update-admin-meta", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminCake.value[0].id,
            meta_title: formData.meta_title,
            meta_description: formData.meta_description,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/update-admin-sizes", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminCake.value[0].id,
            weight: formData.weight,
            width: formData.width,
            height: formData.height,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/update-admin-price", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminCake.value[0].id,
            price: formData.price,
            discount: formData.discount,
            discount_price: formData.discount_price,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/cakes/admin/update-admin-ingredients",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminCake.value[0].id,
              ingredients: formData.ingredients,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/cakes/admin/update-admin-nutritional",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminCake.value[0].id,
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
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/update-admin-rating", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminCake.value[0].id,
            rating: rating,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/update-admin-badge", {
          baseURL: process.env.BASE_URL,
          method: "PATCH",
          body: {
            id: adminCake.value[0].id,
            badge: badge,
          },
        });

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch(
          "/api/cakes/admin/update-admin-visibility",
          {
            baseURL: process.env.BASE_URL,
            method: "PATCH",
            body: {
              id: adminCake.value[0].id,
              visibility: visibility,
            },
          },
        );

        if (result.error.value) {
          return navigateTo("/auth-page");
        }

        if (result.status.value === "success") {
          adminCakes.value = adminCakes.value.map((item: IProduct) =>
            item.id === adminCake.value[0].id
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

  const deleteAdminCake = async () => {
    if (userStore.user && userStore.user.user_role !== "client") {
      try {
        const result = await useFetch("/api/cakes/admin/delete-admin-cake", {
          baseURL: process.env.BASE_URL,
          method: "DELETE",
          body: {
            id: adminCake.value[0].id,
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
    adminCakes,
    adminCake,
    loadAdminCakes,
    getAdminCake,
    createAdminCakeTitle,
    updateAdminCakeTitle,
    updateAdminCakeDescription,
    updateAdminProductImages,
    updateAdminProductMeta,
    updateAdminProductSizes,
    updateAdminProductPrice,
    updateAdminProductIngredients,
    updateAdminProductNutritional,
    updateAdminProductRating,
    updateAdminProductBadge,
    updateAdminProductVisibility,
    deleteAdminCake,
  };
});
