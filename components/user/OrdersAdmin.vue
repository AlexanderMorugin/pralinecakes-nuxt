<template>
  <UserListEmpty
    v-if="!adminUserStore.adminUserOrders.length"
    title="Заказы не найдены..."
    :place="place"
  />
  <UserOrderList
    v-else
    :orders="adminUserStore.adminUserOrders"
    :place="place"
  />
</template>

<script setup>
const { place } = defineProps(["place"]);

const adminUserStore = useAdminUserStore();
await adminUserStore.loadAdminUserOrders();
</script>
