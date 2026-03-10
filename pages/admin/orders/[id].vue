<template>
  <div class="orderPage page-padding-x">
    <OrderCard :order="orderStore.order" />
    <OrderManager />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
const route = useRoute();
const orderStore = useOrderStore();
await orderStore.getOrder(route.params.id);
</script>

<style lang="scss" scoped>
.orderPage {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
