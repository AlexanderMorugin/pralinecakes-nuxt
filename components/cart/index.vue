<template>
  <div class="page-padding-x">
    <div class="cart">
      <CartList />
      <OrderBlock
        :isOrderContinue="isOrderContinue"
        @continueOrder="isOrderContinue = true"
      />
    </div>
    <div v-if="isOrderContinue" class="cart__orderDetails">
      <FormOrder />
    </div>
  </div>
</template>

<script setup>
const isOrderContinue = ref(false);

const continueOrder = () => (isOrderContinue.value = true);
</script>

<style lang="scss" scoped>
.cart {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;

  // border: 1px solid red;

  @media (max-width: 1600px) {
    gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  @media (max-width: 767px) {
    gap: 40px;
  }

  &__orderDetails {
    border-radius: var(--border-radius-m);
    background: var(--gradient-product-blue-primary);
    margin-top: 40px;
    padding: 40px 20px;
    overflow: hidden;
    animation: slide-to-top 0.3s ease;

    @media (max-width: 576px) {
      padding: 20px 10px;
    }
  }
}
</style>
