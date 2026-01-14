<template>
  <div class="orderBlock">
    <TitleBlock title="Оформление заказа" />
    <OrderSum />
    <ButtonOrder
      v-if="!isOrderContinue"
      title="Продолжить"
      @continueOrder="$emit('continueOrder')"
    />
  </div>
</template>

<script setup>
const { isOrderContinue } = defineProps(["isOrderContinue"]);

const emit = defineEmits(["closeModal", "continueOrder"]);

const cartStore = useCartStore();
const orderStore = useOrderStore();

const addOrder = () => {
  orderStore.setOrder(cartStore.cart);

  // console.log(selectDelivery.value);
  console.log("totalCartCount - ", cartStore.totalCartCount);
  console.log("deliveryType - ", cartStore.deliveryType);
  console.log("deliverySum - ", cartStore.deliverySum);
  console.log("totalOrderSum - ", cartStore.totalOrderSum);
  console.log("cartBonus - ", cartStore.cartBonus);
};
</script>

<style lang="scss" scoped>
.orderBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: fit-content;
  background: var(--gradient-product-blue-primary);
  border-radius: var(--border-radius-s);
  padding: 20px;

  @media (max-width: 576px) {
    padding: 20px 10px 10px 10px;
  }

  // &_modalCart {
  //   // display: flex;
  //   align-items: center;
  //   // width: 100%;
  // }

  // &__button {
  //   width: 100%;
  //   max-width: 350px;
  // }
}
</style>
