<template>
  <WrapperPage>
    <ProductCard :product="cakesStore.cake[0]" />
  </WrapperPage>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const route = useRoute();
const cakesStore = useCakesStore();

await cakesStore.getCake(route.params.slug);
</script>
