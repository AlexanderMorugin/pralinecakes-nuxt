<template>
  <ProductAdminAddBlock />
  <ProductList
    v-if="adminCakesStore.adminCakes.length"
    type="cakes"
    :products="adminCakesStore.adminCakes"
    place="admin"
  />
  <ProductListEmpty v-else title="Продукция не найдена..." place="admin" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const adminCakesStore = useAdminCakesStore();
await adminCakesStore.loadAdminCakes();
</script>
