<template>
  <div class="orderBlock">
    <TitleBlock title="Оформление заказа" />
    <OrderSum />
    <ButtonOrder title="Оформить" @addOrder="addOrder" />
  </div>
</template>

<script setup>
// const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.orderBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  height: fit-content;
  background: var(--gradient-product-blue-primary);
  // border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-s);
  padding: 20px;

  @media (max-width: 576px) {
    padding: 20px 10px 10px 10px;
  }
}
</style>
