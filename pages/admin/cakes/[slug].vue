<template>
  <ProductCardAdminManage :type="cakesStore.cake[0].type" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const cakesStore = useCakesStore();
await cakesStore.getCake(route.params.slug);
</script>
