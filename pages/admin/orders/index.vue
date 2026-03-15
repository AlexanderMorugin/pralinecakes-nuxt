<template>
  <OrderListAdmin v-if="orderStore.orders.length" :orders="orderStore.orders" />
  <ProductListEmpty v-else title="Заказы не найдены..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const orderStore = useOrderStore();
await orderStore.loadAdminOrders();
</script>
