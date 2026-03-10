<template>
  <ProductCardAdminManage
    v-if="cakesStore.cake"
    :type="cakesStore.cake[0].type"
  />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const route = useRoute();
const cakesStore = useCakesStore();
await cakesStore.getAdminCake(route.params.slug);
</script>
