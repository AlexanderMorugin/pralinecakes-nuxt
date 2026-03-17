<template>
  <div class="orderDetails">
    <!-- <ClientOnly> -->
    <WrapperText class="orderDetails__title line-dashed"
      >Заказ № {{ order.order_number }} от {{ order.order_date }}</WrapperText
    >

    <OrderUser :order="order" />
    <div class="line-solid" />
    <OrderList :orderList="order.cart_list" />
    <div class="line-solid" />
    <OrderTotal :order="order" />
    <!-- </ClientOnly> -->
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
// const orderStore = useOrderStore();

// console.log(order);
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
