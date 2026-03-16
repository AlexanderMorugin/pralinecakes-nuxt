import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";
import {
  DELIVERY_SUM,
  MIN_ORDER_SUM,
  SAMOVYVOZ_BONUS,
  USER_BONUS,
  PAY_USER_BONUS_ABLE,
} from "~/utils/constants/info";

export interface ICart extends IProduct {
  // user_id: string;
  price: number;
  discount_price: number;
  count: number;
  total_product_price: number;
}

export const cartProduct = (product: ICart) => {
  const hasProduct = {
    id: product.id,
    type: product.type,
    slug: product.slug,
    image: product.image_1_small,
    title: product.title,
    price: product.price,
    discount: product.discount,
    discount_price: product.discount_price,
    weight: product.weight,
    count: 1,
    total_product_price: computed(() => product.discount_price * product.count),
  };

  return hasProduct;
};

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref<ICart[]>([]);
  const deliveryCost = ref<number>(DELIVERY_SUM);
  const samovyvozBonus = ref(0);
  const deliveryType = ref<string>("Доставка");
  const isUserBonusForPay = ref(false);

  const userStore = useUserStore();

  const setCart = (cartData: any) => {
    if (cartData) {
      cart.value = cartData;
    }
  };

  const addCartItem = (product: ICart) => {
    // Если в корзине есть продукт с таким id, то останавливаем операцию
    // Иначе добавляем продукт в корзину
    if (cart.value.find((el) => el.id === product.id)) {
      return;
    } else {
      cart.value.push(product);

      // console.log(cart.value);

      localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  };

  const incrementCartItem = (productId: Number) => {
    cart.value = cart.value.map((item) =>
      item.id === productId ? { ...item, count: item.count + 1 } : item,
    );
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const decrementCartItem = (productId: Number) => {
    const currentItem = cart.value.find((item) => item.id === productId);

    if (currentItem?.count === 1) {
      deleteCartItem(productId);
    } else {
      cart.value = cart.value.map((item) =>
        item.id === productId ? { ...item, count: item.count - 1 } : item,
      );
      localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  };

  const deleteCartItem = (productId: Number) => {
    const currentItem = cart.value.find((item) => item.id === productId);

    cart.value = cart.value.filter((item) => item !== currentItem);
    localStorage.setItem("cart", JSON.stringify(cart.value));
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

  const userBonusForPay = computed(() => {
    let payBonus = null;

    if (totalCartSum.value) {
      let data = Math.round(totalCartSum.value * PAY_USER_BONUS_ABLE);

      payBonus =
        data < userStore.user.user_bonus ? data : userStore.user.user_bonus;
    }

    return payBonus;
  });

  const totalCartSumMinusUserBonus = computed(() => {
    let data = null;

    if (
      userStore.user &&
      userStore.user.user_bonus &&
      userBonusForPay.value &&
      totalCartSum.value
    ) {
      data = totalCartSum.value - userBonusForPay.value;
    }

    return data;
  });

  const deliverySum = computed(() => {
    let data = 0;

    if (totalCartSum.value && totalCartSumMinusUserBonus.value) {
      data =
        (isUserBonusForPay.value
          ? totalCartSumMinusUserBonus.value
          : totalCartSum.value) >= MIN_ORDER_SUM
          ? 0
          : (isUserBonusForPay.value
                ? totalCartSumMinusUserBonus.value
                : totalCartSum.value) <= MIN_ORDER_SUM
            ? deliveryCost.value
            : deliveryCost.value;

      return data;
    }
  });

  const totalOrderSum = computed(() => {
    let data = null;

    if (
      totalCartSum.value &&
      cartSamovyvozBonus.value &&
      totalCartSumMinusUserBonus.value
    ) {
      data =
        samovyvozBonus.value > 0
          ? (isUserBonusForPay.value
              ? totalCartSumMinusUserBonus.value
              : totalCartSum.value) - cartSamovyvozBonus.value
          : deliverySum.value
            ? (isUserBonusForPay.value
                ? totalCartSumMinusUserBonus.value
                : totalCartSum.value) + deliverySum.value
            : isUserBonusForPay.value
              ? totalCartSumMinusUserBonus.value
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

    if (totalCartSum.value && totalCartSumMinusUserBonus.value) {
      data = Math.round(
        ((isUserBonusForPay.value
          ? totalCartSum.value
          : totalCartSumMinusUserBonus.value) *
          SAMOVYVOZ_BONUS) /
          100,
      );

      return data;
    }
  });

  const cleanCart = () => {
    cart.value = [];
    deliveryCost.value = DELIVERY_SUM;
    samovyvozBonus.value = 0;
    deliveryType.value = "Доставка";
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const useUserBonusForPay = () => {
    isUserBonusForPay.value = !isUserBonusForPay.value;

    console.log(isUserBonusForPay.value);
  };

  return {
    cart,
    setCart,
    addCartItem,
    incrementCartItem,
    decrementCartItem,
    deleteCartItem,
    cleanCart,
    setDeliveryCost,
    useUserBonusForPay,
    // setUserBonusForPay,

    totalCartCount,
    totalCartSum,
    deliverySum,
    deliveryCost,
    deliveryType,
    totalOrderSum,
    cartBonus,
    cartSamovyvozBonus,
    userBonusForPay,
    totalCartSumMinusUserBonus,
    isUserBonusForPay,
  };
});
