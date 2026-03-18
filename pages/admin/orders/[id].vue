<template>
  <div class="orderPage page-padding-x">
    <OrderCard
      v-if="adminOrderStore.adminOrder"
      :order="adminOrderStore.adminOrder[0]"
    />
    <OrderManager v-if="adminOrderStore.adminOrder" />

    <!-- <UserOrdersAdmin v-if="adminUserStore.adminUser" place="admin" /> -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
const route = useRoute();
const adminOrderStore = useAdminOrderStore();
// const adminUserStore = useAdminUserStore();
await adminOrderStore.getAdminOrder(route.params.id);
// await adminUserStore.getAdminUser(order.user_id);
</script>

<style lang="scss" scoped>
.orderPage {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
