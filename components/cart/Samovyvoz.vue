<template>
  <div class="cartSamovyvoz">
    <span
      >Адрес производства для самовывоза + телефон + месенджер + часы
      работы</span
    >

    <form @submit.prevent="submitOrder">
      <div class="cartSamovyvoz__container">
        <FormTextarea
          label="Комментарий к заказу"
          placeholder="Ваши пожелания"
          v-model:value="commentField"
          @clearInput="commentField = null"
        />

        <FormSubmit title="Заказать" />
      </div>
    </form>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const orderStore = useOrderStore();

const commentField = ref(null);

const submitOrder = () => {
  try {
    const orderData = {
      delivery_type: cartStore.deliveryType,
      total_cart_count: cartStore.totalCartCount,
      total_cart_sum: cartStore.totalCartSum,
      cart_samovyvoz_bonus: cartStore.cartSamovyvozBonus,
      total_order_sum: cartStore.totalOrderSum,
      cart_list: cartStore.cart,
      user_bonus: cartStore.cartBonus,
      user_comment: commentField.value?.trim(),
    };

    orderStore.addOrder(orderData);
  } catch (error) {
    console.log(error);
  } finally {
  }
  // orderStore.setOrder(cartStore.cart);

  // console.log(selectDelivery.value);
  // console.log("totalCartCount - ", cartStore.totalCartCount);
  // console.log("deliveryType - ", cartStore.deliveryType);
  // console.log("deliverySum - ", cartStore.deliverySum);
  // console.log("totalOrderSum - ", cartStore.totalOrderSum);
  // console.log("cartBonus - ", cartStore.cartBonus);
};
</script>

<style lang="scss" scoped>
.cartSamovyvoz {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;
  animation: slide-to-top 0.8s ease;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-self: flex-end;
    gap: 30px;
    width: 100%;
    max-width: 480px;
    padding-left: 20px;
  }
}
</style>
