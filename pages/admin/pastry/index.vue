<template>
  <ButtonAddProduct type="pastry" />
  <ProductList
    v-if="pastryStore.pastries.length"
    type="pastry"
    :products="pastryStore.pastries"
    place="admin"
  />
  <ProductListEmpty v-else title="Продукция не найдена..." place="admin" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const pastryStore = usePastryStore();
await pastryStore.loadAdminPastries();
</script>
