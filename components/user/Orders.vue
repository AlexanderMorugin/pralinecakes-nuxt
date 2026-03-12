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

const ordersLimit = ref(4);

// const setUnlimit = async () => {
//   await userStore.loadUserOrders(1000);
// };

const userStore = useUserStore();
// await userStore.getUser();
await userStore.loadUserOrders();
</script>

<!-- <style lang="scss" scoped></style> -->
