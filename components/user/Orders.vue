<template>
  <ProductListEmpty
    v-if="!userStore.userOrders.length"
    title="Заказы не найдены..."
    :place="place"
  />
  <UserOrderList :orders="userStore.userOrders" />
</template>

<script setup>
const { place } = defineProps(["place"]);

const userStore = useUserStore();
// await userStore.getUser();
await userStore.loadUserOrders();
</script>

<!-- <style lang="scss" scoped></style> -->
