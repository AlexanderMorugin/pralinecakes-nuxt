<template>
  <WrapperPage>
    <ProductCard />
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
