<template>
  <!-- <LoaderPage v-if="pending" /> -->
  <ProductAdminAddBlock />
  <ProductAdminList
    v-if="adminCakesStore.adminCakes.length"
    :products="adminCakesStore.adminCakes"
  />
  <ProductAdminListEmpty v-else title="Тортов пока нет..." />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const adminCakesStore = useAdminCakesStore();
await adminCakesStore.loadAdminCakes();
</script>
