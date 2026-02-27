<template>
  <ProductCardAdminManage :product="cakesStore.cake" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const cakesStore = useCakesStore();
await cakesStore.getCake(route.params.slug);
</script>
