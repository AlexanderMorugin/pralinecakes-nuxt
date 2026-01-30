import { defineStore } from "pinia";
import {
  DELIVERY_SUM,
  MIN_ORDER_SUM,
  SAMOVYVOZ_BONUS,
  USER_BONUS,
} from "~/utils/constants/info";

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
    image_800: product.image_800[0],
    name: product.name,
    price: product.price,
    discount: product.discount,
    discount_price: computed(() =>
      product.discount
        ? product.price - (product.price * product.discount) / 100
        : null,
    ),
    weigth: product.weigth,
    count: 1,
    total_product_price: computed(() => product.price * product.count),
  };

  return hasProduct;
};

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref<ICart[]>([]);

  const deliveryCost = ref<number>(DELIVERY_SUM);
  const samovyvozBonus = ref(0);
  const deliveryType = ref<string>("Доставка");

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
      item.id === productId ? { ...item, count: item.count + 1 } : item,
    );
  };

  const decrementCartItem = (productId: Number) => {
    const currentItem = cart.value.find((item) => item.id === productId);

    if (currentItem?.count === 1) {
      deleteCartItem(productId);
    } else {
      cart.value = cart.value.map((item) =>
        item.id === productId ? { ...item, count: item.count - 1 } : item,
      );
    }
  };

  const deleteCartItem = (productId: Number) => {
    const currentItem = cart.value.find((item) => item.id === productId);

    cart.value = cart.value.filter((item) => item !== currentItem);
  };

  const totalCartCount = computed(
    () =>
      cart.value.length &&
      cart.value.map((item) => item.count).reduce((a, b) => a + b),
  );

  const totalCartSum = computed(() => {
    let data = null;

    if (cart.value.length) {
      data = cart.value.map((item) =>
        item.discount
          ? item.discount_price * item.count
          : item.price * item.count,
      );

      return data.reduce((a, b) => a + b);
    }

    return data;
  });

  const deliverySum = computed(() => {
    let data = 0;

    if (totalCartSum.value) {
      data =
        totalCartSum.value >= MIN_ORDER_SUM
          ? 0
          : totalCartSum.value <= MIN_ORDER_SUM
            ? deliveryCost.value
            : deliveryCost.value;

      return data;
    }
  });

  const totalOrderSum = computed(() => {
    let data = null;

    if (totalCartSum.value && cartSamovyvozBonus.value) {
      data =
        samovyvozBonus.value > 0
          ? totalCartSum.value - cartSamovyvozBonus.value
          : deliverySum.value
            ? totalCartSum.value + deliverySum.value
            : totalCartSum.value;

      return data;
    }
  });

  const setDeliveryCost = (data: number) => {
    deliveryCost.value = data;

    if (data === 1) {
      deliveryCost.value = DELIVERY_SUM;
      samovyvozBonus.value = 0;
      deliveryType.value = "Доставка";
    }
    if (data === 0) {
      deliveryCost.value = 0;
      samovyvozBonus.value = cartSamovyvozBonus.value || 0;
      deliveryType.value = "Самовывоз";
    }
  };

  const cartBonus = computed(() => {
    let data = null;

    if (totalCartSum.value) {
      data = Math.round(totalCartSum.value * USER_BONUS);

      return data;
    }
  });

  const cartSamovyvozBonus = computed(() => {
    let data = null;

    if (totalCartSum.value) {
      data = Math.round((totalCartSum.value * SAMOVYVOZ_BONUS) / 100);

      return data;
    }
  });

  const cleanCart = () => {
    cart.value = [];
    deliveryCost.value = DELIVERY_SUM;
    samovyvozBonus.value = 0;
    deliveryType.value = "Доставка";
  };

  return {
    cart,
    addCartItem,
    incrementCartItem,
    decrementCartItem,
    deleteCartItem,
    cleanCart,
    setDeliveryCost,
    totalCartCount,
    totalCartSum,
    deliverySum,
    deliveryCost,
    deliveryType,
    totalOrderSum,
    cartBonus,
    cartSamovyvozBonus,
  };
});
