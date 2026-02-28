<template>
  <ButtonAddProduct />
  <ProductList
    v-if="cakesStore.cakes.length"
    type="cakes"
    :products="cakesStore.cakes"
    place="admin"
  />
  <ProductListEmpty v-else title="Продукция не найдена..." place="admin" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const cakesStore = useCakesStore();
await cakesStore.loadAdminCakes();
</script>
