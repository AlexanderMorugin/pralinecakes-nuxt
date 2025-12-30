<template>
  <WrapperPadding>
    <ProductCard :product="cakesStore.cake" />
  </WrapperPadding>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cakesStore = useCakesStore();

await cakesStore.getCake(useRoute().params.slug);
</script>
