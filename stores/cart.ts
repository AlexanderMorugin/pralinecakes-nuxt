import { defineStore } from "pinia";

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

  const incrementCartItem = (product: ICart) => {
    cart.value = cart.value.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
  };

  const decrementCartItem = (product: ICart) => {
    const currentItem = cart.value.find((item) => item.id === product.id);

    if (currentItem?.count === 1) {
      deleteCartItem(product);
    } else {
      cart.value = cart.value.map((item) =>
        item.id === product.id ? { ...item, count: item.count - 1 } : item
      );
    }
  };

  const deleteCartItem = (product: ICart) => {
    const currentItem = cart.value.find((item) => item.id === product.id);

    cart.value = cart.value.filter((item) => item !== currentItem);
  };

  return {
    cart,
    addCartItem,
    incrementCartItem,
    decrementCartItem,
    deleteCartItem,
  };
});
