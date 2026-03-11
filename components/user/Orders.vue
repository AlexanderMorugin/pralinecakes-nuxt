<template>
  <ProductListEmpty title="Заказы не найдены..." :place="place" />
  {{ userStore.userOrders }}
</template>

<script setup>
const { place } = defineProps(["place"]);

const userStore = useUserStore();
await userStore.loadUserOrders();
</script>

<!-- <style lang="scss" scoped></style> -->
