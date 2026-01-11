<template>
  <!-- <WrapperPadding> -->
  <WrapperPage>
    <ProductCard :product="cakesStore.cake" />
  </WrapperPage>
  <!-- </WrapperPadding> -->
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cakesStore = useCakesStore();

await cakesStore.getCake(useRoute().params.slug);
</script>
