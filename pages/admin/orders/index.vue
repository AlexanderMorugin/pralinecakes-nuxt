<template>
  <OrderListAdmin
    v-if="adminOrderStore.adminOrders.length"
    :orders="adminOrderStore.adminOrders"
  />
  <ProductListEmpty v-else title="Заказы не найдены..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const adminOrderStore = useAdminOrderStore();
await adminOrderStore.loadAdminOrders();
</script>
