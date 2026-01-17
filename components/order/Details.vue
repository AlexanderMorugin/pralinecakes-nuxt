<template>
  <div class="orderDetails">
    <WrapperText class="orderDetails__title line-dashed"
      >Заказ № 203 от 14.02.2026 16:30</WrapperText
    >

    <OrderUser />

    <div class="line-solid" />

    <OrderList />

    <div class="line-solid" />

    <OrderTotal />
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
