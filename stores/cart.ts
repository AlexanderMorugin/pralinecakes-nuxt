import { defineStore } from "pinia";
import type { IProduct } from "~/types/product";
// import {
//   // DELIVERY_SUM,
//   // MIN_ORDER_SUM,
//   // SAMOVYVOZ_BONUS,
//   // USER_BONUS,
//   PAY_USER_BONUS_ABLE,
// } from "~/utils/constants/info";

export interface ICart extends IProduct {
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
  // const deliveryCost = ref<number>(DELIVERY_SUM);
  const samovyvozBonus = ref<number>(0);
  const deliveryType = ref<string>("Доставка");
  const isUserBonusForPay = ref<boolean>(false);

  const userStore = useUserStore();
  const clientSettingStore = useClientSettingStore();
  // clientSettingStore.loadClientSettings();

  // console.log(clientSettingStore.clientSettings[0].min_order_sum);

  // const deliveryCost = ref(
  //   clientSettingStore.clientSettings[0].delivery_sum | 0,
  // );
  const deliveryCost = ref<number>(0);

  // console.log(clientSettingStore.clientSettings[0].delivery_sum);

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
      localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  };

  const incrementCartItem = (productId: Number) => {
    isUserBonusForPay.value = false;

    cart.value = cart.value.map((item) =>
      item.id === productId ? { ...item, count: item.count + 1 } : item,
    );

    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const decrementCartItem = (productId: Number) => {
    isUserBonusForPay.value = false;

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

  const useUserBonusForPay = () => {
    isUserBonusForPay.value = !isUserBonusForPay.value;
  };

  const totalCartSum = computed(() => {
    let data = null;

    if (cart.value.length) {
      data = cart.value.map((item) =>
        item.discount
          ? item.discount_price * item.count
          : item.price * item.count,
      );
    }

    if (!isUserBonusForPay.value && data) {
      return data.reduce((a, b) => a + b);
    }

    if (isUserBonusForPay.value && data) {
      return data.reduce((a, b) => a + b) - userBonusForPay.value;
    }

    return data;
  });

  const userBonusForPay = computed(() => {
    let payBonus = null;

    // if (!isUserBonusForPay.value) {
    //   payBonus = 0;
    // }

    if (userStore.user && totalCartSum.value) {
      payBonus = Math.round(
        (totalCartSum.value as number) *
          (clientSettingStore.clientSettings[0].pay_user_bonus / 100),
      );

      payBonus =
        payBonus < userStore.user.user_bonus
          ? payBonus
          : userStore.user.user_bonus;
    }

    return payBonus;
  });

  const deliverySum = computed(() => {
    // let data = 0;
    let data = clientSettingStore.clientSettings[0].delivery_sum;

    // console.log(data);

    if (totalCartSum.value) {
      data =
        // (totalCartSum.value as number) >= MIN_ORDER_SUM
        totalCartSum.value >= clientSettingStore.clientSettings[0].min_order_sum
          ? 0
          : // : (totalCartSum.value as number) <= MIN_ORDER_SUM
            totalCartSum.value <=
              clientSettingStore.clientSettings[0].min_order_sum
            ? // ? deliveryCost.value
              // : deliveryCost.value;
              clientSettingStore.clientSettings[0].delivery_sum
            : clientSettingStore.clientSettings[0].delivery_sum;

      return data;
    }
  });

  const totalOrderSum = computed(() => {
    let data = null;

    if (totalCartSum.value && cartSamovyvozBonus.value) {
      data =
        samovyvozBonus.value > 0
          ? (totalCartSum.value as number) - cartSamovyvozBonus.value
          : deliverySum.value
            ? (totalCartSum.value as number) + deliverySum.value
            : totalCartSum.value;

      return data;
    }
  });

  const setDeliveryCost = (data: number) => {
    // console.log(data);
    // deliveryCost.value = data;

    if (data === 1) {
      // deliveryCost.value = DELIVERY_SUM;
      deliveryCost.value = clientSettingStore.clientSettings[0].delivery_sum;
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
      data = Math.round(
        (totalCartSum.value as number) *
          // USER_BONUS,
          (clientSettingStore.clientSettings[0].cart_product_bonus / 100),
      );

      return data;
    }
  });

  const cartSamovyvozBonus = computed(() => {
    let data = null;

    if (totalCartSum.value) {
      data = Math.round(
        // ((totalCartSum.value as number) * SAMOVYVOZ_BONUS) / 100,
        ((totalCartSum.value as number) *
          clientSettingStore.clientSettings[0].samovyvoz_bonus) /
          100,
      );

      return data;
    }
  });

  const cleanCart = () => {
    cart.value = [];
    // deliveryCost.value = DELIVERY_SUM;
    deliveryCost.value = clientSettingStore.clientSettings[0].delivery_sum;
    samovyvozBonus.value = 0;
    deliveryType.value = "Доставка";
    isUserBonusForPay.value = false;
    localStorage.setItem("cart", JSON.stringify(cart.value));
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
    totalCartCount,
    totalCartSum,
    deliverySum,
    deliveryCost,
    deliveryType,
    totalOrderSum,
    cartBonus,
    cartSamovyvozBonus,
    userBonusForPay,
    isUserBonusForPay,
  };
});
