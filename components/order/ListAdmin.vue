<template>
  <ul class="orderList page-padding-x">
    <li v-for="order in orders" :key="order.id">
      <OrderListCard :order="order" />
    </li>
  </ul>
</template>

<script setup>
const { orders } = defineProps(["orders"]);
</script>

<style lang="scss" scoped>
.orderList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
