<template>
  <div class="orderDetails">
    <WrapperText class="orderDetails__title line-dashed"
      >Заказ № {{ orderStore.order[0].order_number }} от
      {{ orderStore.order[0].order_date }}</WrapperText
    >

    <OrderUser />
    <div class="line-solid" />
    <OrderList />
    <div class="line-solid" />
    <OrderTotal />

    <!-- {{ orderStore.order }} -->
  </div>
</template>

<script setup>
const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
.orderDetails {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__title {
    width: fit-content;
  }
}
</style>
