<template>
  <WrapperPage>
    <ProductCard :product="cakesStore.cake" />
  </WrapperPage>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cakesStore = useCakesStore();

await cakesStore.getCake(useRoute().params.slug);
</script>
