<template>
  <div
    class="orderBlock"
    :class="place === 'modalCart' && 'orderBlock_modalCart'"
  >
    <TitleBlock
      :title="
        place === 'modalCart' ? 'Перейти к оформлению' : 'Оформление заказа'
      "
    />
    <OrderSum v-if="place !== 'modalCart'" />
    <!-- <div :class="place === 'modalCart' ? 'orderBlock__buttonBox' : ''"> -->
    <ButtonOrder
      v-if="!isOrderContinue"
      :place="place"
      :title="place === 'modalCart' ? 'Далее' : 'Оформить'"
      @continueOrder="$emit('continueOrder')"
      @closeModal="$emit('closeModal')"
      :class="place === 'modalCart' ? 'orderBlock__button' : ''"
    />
    <!-- </div> -->
  </div>
</template>

<script setup>
const { isOrderContinue, place } = defineProps(["isOrderContinue", "place"]);

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
  // align-items: flex-end;
  gap: 20px;
  width: 100%;
  // max-width: 600px;
  height: fit-content;
  background: var(--gradient-product-blue-primary);
  // border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-s);
  padding: 20px;

  @media (max-width: 576px) {
    padding: 20px 10px 10px 10px;
  }

  &_modalCart {
    // display: flex;
    align-items: center;
    // width: 100%;
  }

  &__button {
    width: 100%;
    max-width: 350px;
  }
}
</style>
