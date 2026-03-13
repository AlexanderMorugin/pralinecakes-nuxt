<template>
  <ButtonAddProduct
    v-if="userStore.user && userStore.user.user_role === 'admin'"
    type="pastry"
  />
  <ProductList
    v-if="adminPastryStore.adminPastries.length"
    type="pastry"
    :products="adminPastryStore.adminPastries"
    place="admin"
  />
  <ProductListEmpty v-else title="Продукция не найдена..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const userStore = useUserStore();
const adminPastryStore = useAdminPastryStore();
await adminPastryStore.loadAdminPastries();
</script>
