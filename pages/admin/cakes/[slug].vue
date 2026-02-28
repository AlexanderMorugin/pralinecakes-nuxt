<template>
  <ProductCardAdminManage :product="cakesStore.cake" type="cakes" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const cakesStore = useCakesStore();
await cakesStore.getCake(route.params.slug);
</script>
