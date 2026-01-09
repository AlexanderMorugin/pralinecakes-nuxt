import { defineStore } from "pinia";

export interface ICart extends ICake {
  discount_price: number;
  count: number;
  total_product_price: number;
}

export const cartProduct = (product: ICart) => {
  const hasProduct = {
    id: product.id,
    type: product.type,
    slug: product.slug,
    image_list_card: product.image_list_card,
    name: product.name,
    price: product.price,
    discount: product.discount,
    discount_price: computed(() =>
      product.discount
        ? product.price - (product.price * product.discount) / 100
        : null
    ),
    weigth: product.weigth,
    count: 1,
    total_product_price: computed(() => product.price * product.count),
    // product.discount
    //   ? product.discount_price * product.count
    //   : product.price * product.count
  };

  return hasProduct;
};

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref<ICart[]>([]);

  const addCartItem = (product: ICart) => {
    // Если в корзине есть продукт с таким id, то останавливаем операцию
    // Иначе добавляем продукт в корзину
    if (cart.value.find((el) => el.id === product.id)) {
      return;
    } else {
      cart.value.push(product);
    }
  };

  const incrementCartItem = (productId: Number) => {
    cart.value = cart.value.map((item) =>
      item.id === productId ? { ...item, count: item.count + 1 } : item
    );
  };

  const decrementCartItem = (productId: Number) => {
    const currentItem = cart.value.find((item) => item.id === productId);

    if (currentItem?.count === 1) {
      deleteCartItem(productId);
    } else {
      cart.value = cart.value.map((item) =>
        item.id === productId ? { ...item, count: item.count - 1 } : item
      );
    }
  };

  const deleteCartItem = (productId: Number) => {
    const currentItem = cart.value.find((item) => item.id === productId);

    cart.value = cart.value.filter((item) => item !== currentItem);
  };

  const totalCartCount = computed(() =>
    cart.value.map((item) => item.count).reduce((a, b) => a + b)
  );

  const totalCartSum = computed(() => {
    let data = null;

    data = cart.value.map((item) =>
      item.discount ? item.discount_price * item.count : item.price * item.count
    );

    return data.reduce((a, b) => a + b);
  });

  return {
    cart,
    addCartItem,
    incrementCartItem,
    decrementCartItem,
    deleteCartItem,
    totalCartCount,
    totalCartSum,
  };
});
