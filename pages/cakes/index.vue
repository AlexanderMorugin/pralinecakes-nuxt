<template>
  <WrapperPage>
    <TitlePage title="Торты" />
    <ProductList v-if="cakesStore.cakes.length" type="cakes" />
    <ProductListEmpty v-else />
  </WrapperPage>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cakesStore = useCakesStore();
await cakesStore.loadCakes();

const commentsStore = useCommentsStore();
await commentsStore.loadComments();
</script>
