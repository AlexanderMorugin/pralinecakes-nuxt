<template>
  <div class="orderPage">
    <!-- <OrderCard :order="orderStore.order" />
    <OrderManager /> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
// const route = useRoute();
// const orderStore = useOrdersStore();
// await orderStore.getOrder(route.params.id);
</script>

<style lang="scss" scoped>
.orderPage {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
