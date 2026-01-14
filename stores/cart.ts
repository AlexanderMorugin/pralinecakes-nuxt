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

  const deliveryCost = ref(DELIVERY_SUM);
  const samovyvozBonus = ref(0);
  const deliveryType = ref("Доставка");

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

  const deliverySum = computed(() => {
    let data = null;

    // data =
    //   totalCartSum.value >= MIN_ORDER_SUM
    //     ? 0
    //     : totalCartSum.value <= MIN_ORDER_SUM
    //     ? DELIVERY_SUM
    //     : DELIVERY_SUM;

    // data =
    //   totalCartSum.value >= MIN_ORDER_SUM
    //     ? 0
    //     : totalCartSum.value <= MIN_ORDER_SUM
    //     ? deliveryCost.value
    //     : deliveryCost.value;

    data =
      totalCartSum.value >= MIN_ORDER_SUM
        ? 0
        : totalCartSum.value <= MIN_ORDER_SUM
        ? deliveryCost.value
        : deliveryCost.value;

    if (data <= 0) {
      data = 0;
    }
    return data;
  });

  const totalOrderSum = computed(() => {
    let data = null;

    data =
      samovyvozBonus.value > 0
        ? totalCartSum.value - samovyvozBonus.value
        : totalCartSum.value + deliverySum.value;

    return data;
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
      samovyvozBonus.value = cartSamovyvozBonus.value;
      deliveryType.value = "Самовывоз";
    }
  };

  const cartBonus = computed(() => {
    let data = null;

    data = Math.round(totalCartSum.value * USER_BONUS);

    return data;
  });

  const cartSamovyvozBonus = computed(() => {
    let data = null;

    data = Math.round((totalCartSum.value * SAMOVYVOZ_BONUS) / 100);

    return data;
  });

  const cleanCart = () => (cart.value = []);

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
