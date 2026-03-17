<template>
  <div class="orderPage page-padding-x">
    <OrderCard
      v-if="adminOrderStore.adminOrder"
      :order="adminOrderStore.adminOrder[0]"
    />
    <OrderManager v-if="adminOrderStore.adminOrder" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
const route = useRoute();
const adminOrderStore = useAdminOrderStore();
await adminOrderStore.getAdminOrder(route.params.id);
</script>

<style lang="scss" scoped>
.orderPage {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
