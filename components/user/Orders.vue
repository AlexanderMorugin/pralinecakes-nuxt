<template>
  <UserListEmpty
    v-if="!userStore.adminUserOrders.length"
    title="Заказы не найдены..."
    :place="place"
  />
  <UserOrderList v-else :orders="userStore.adminUserOrders" :place="place" />
</template>

<script setup>
const { place } = defineProps(["place"]);

const userStore = useUserStore();
await userStore.loadAdminUserOrders();
</script>
