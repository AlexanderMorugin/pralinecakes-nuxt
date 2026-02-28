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

    return result;
  };

  const updatePastryDescription = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-description", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        description_one: formData.description_one,
        description_two: formData.description_two,
        description_three: formData.description_three,
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

    return result;
  };

  const updatePastryImages = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-images", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
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

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
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
  };

  const updateProductMeta = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-meta", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
          ? {
              ...item,
              meta_title: formData.meta_title,
              meta_description: formData.meta_description,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductSizes = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-sizes", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        weight: formData.weight,
        width: formData.width,
        height: formData.height,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
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
  };

  const updateProductPrice = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-price", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        price: formData.price,
        discount: formData.discount,
        discount_price: formData.discount_price,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
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
  };

  const updateProductIngredients = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-ingredients", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        ingredients: formData.ingredients,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
          ? {
              ...item,
              ingredients: formData.ingredients,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductNutritional = async (formData: IProduct) => {
    const result = await useFetch("/api/pastry/update-nutritional", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        calories: formData.calories,
        protein: formData.protein,
        fat: formData.fat,
        carbohydrates: formData.carbohydrates,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
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
  };

  const updateProductRating = async (rating: number) => {
    const result = await useFetch("/api/pastry/update-rating", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        rating: rating,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
          ? {
              ...item,
              rating: rating,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductBadge = async (badge: number) => {
    const result = await useFetch("/api/pastry/update-badge", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        badge: badge,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
          ? {
              ...item,
              badge: badge,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductVisibility = async (visibility: boolean) => {
    const result = await useFetch("/api/pastry/update-visibility", {
      method: "PATCH",
      body: {
        id: pastry.value[0].id,
        visibility: visibility,
      },
    });

    if (result.status.value === "success") {
      pastries.value = pastries.value.map((item: IProduct) =>
        item.id === pastry.value[0].id
          ? {
              ...item,
              visibility: visibility,
            }
          : item,
      );
    }

    return result;
  };

  const deletePastry = async () => {
    const result = await useFetch("/api/pastry/delete-pastry", {
      method: "DELETE",
      body: {
        id: pastry.value[0].id,
      },
    });

    return result;
  };

  return {
    pastries,
    pastry,
    loadPastries,
    loadAdminPastries,
    getPastry,
    createPastryTitle,
    updatePastryTitle,
    updatePastryDescription,
    updatePastryImages,
    updateProductMeta,
    updateProductSizes,
    updateProductPrice,
    updateProductIngredients,
    updateProductNutritional,
    updateProductRating,
    updateProductBadge,
    updateProductVisibility,
    deletePastry,
  };
});
