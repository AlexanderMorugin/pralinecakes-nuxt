import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref<IProduct[] | any>([]);
  const cake = ref<IProduct | any>(null);

  const loadCakes = async () => {
    try {
      const result = await useFetch("/api/cakes/load-cakes", {
        baseURL: process.env.BASE_URL, // автоматически устанавливается перед /api/cakes/load-cakes
        // timeout: 10000, // прерывание запроса через 10 сек
        // key: "cakes", // ключ для кеша - на стороне клиента, работает до перезагрузки страницы
        // server: true, // запрос выполняется на стороне сервера, если false - то на стороне клиента
        // lazy: false,
        // immediate: false, // запрос автоматически не запускается, а только по кнопке
        // transform: (cakes) => cakes.map((item) => item.title), // возвращаем только тайтлы
        method: "GET",
      });

      if (result.status.value === "success") {
        cakes.value = result.data.value;
      }

      return result;
    } catch (error) {
      throw createError({
        status: 404,
        statusText: "Данные не найдены",
      });
    }
  };

  const getCake = async (cakeSlug: string) => {
    const result = await useFetch("/api/cakes/get-cake", {
      baseURL: process.env.BASE_URL,
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

  const createCakeTitle = async (formData: IProduct) => {
    const result = await useFetch("/api/cakes/create-title", {
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

  const updateCakeTitle = async (formData: IProduct) => {
    const result = await useFetch("/api/cakes/update-title", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        title: formData.title,
        description_short: formData.description_short,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: IProduct) =>
        item.id === cake.value[0].id
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

  const updateCakeDescription = async (formData: IProduct) => {
    const result = await useFetch("/api/cakes/update-description", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        description_one: formData.description_one,
        description_two: formData.description_two,
        description_three: formData.description_three,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: IProduct) =>
        item.id === cake.value[0].id
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

  const updateProductImages = async (formData: IProduct) => {
    const result = await useFetch("/api/cakes/update-images", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
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
      cakes.value = cakes.value.map((item: IProduct) =>
        item.id === cake.value[0].id
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

  const deleteCake = async () => {
    const result = await useFetch("/api/cakes/delete-cake", {
      method: "DELETE",
      body: {
        id: cake.value[0].id,
      },
    });

    return result;
  };

  return {
    cakes,
    cake,
    loadCakes,
    getCake,
    createCakeTitle,
    updateCakeTitle,
    updateCakeDescription,
    updateProductImages,
    deleteCake,
  };
});
