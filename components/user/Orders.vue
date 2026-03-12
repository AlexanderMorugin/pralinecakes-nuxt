<template>
  <ProductListEmpty
    v-if="!userStore.userOrders.length"
    title="Заказы не найдены..."
    :place="place"
  />
  <UserOrderList :orders="userStore.userOrders" :place="place" />

  <!-- <button @click="setUnlimit">Показать все</button> -->
</template>

<script setup>
const { place } = defineProps(["place"]);

const userStore = useUserStore();
await userStore.loadUserOrders();
</script>

<!-- <style lang="scss" scoped></style> -->
