<template>
  <OrderListAdmin v-if="orderStore.orders.length" :orders="orderStore.orders" />
  <ProductListEmpty v-else title="Заказы не найдены..." place="admin" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const orderStore = useOrderStore();
await orderStore.loadOrders();
</script>
