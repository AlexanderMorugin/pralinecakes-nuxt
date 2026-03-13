<template>
  <UserListEmpty
    v-if="!userStore.userOrders.length"
    title="Заказы не найдены..."
    :place="place"
  />
  <UserOrderList v-else :orders="userStore.userOrders" :place="place" />

  <!-- <button @click="setUnlimit">Показать все</button> -->
</template>

<script setup>
const { place } = defineProps(["place"]);

const userStore = useUserStore();
await userStore.loadUserOrders();

console.log(userStore.userOrders.length);
</script>

<!-- <style lang="scss" scoped></style> -->
