<template>
  <ButtonAddProduct type="pastry" />
  <ProductList
    v-if="pastryStore.pastries.length"
    type="pastry"
    :products="pastryStore.pastries"
    place="admin"
  />
  <ProductListEmpty v-else title="Продукция не найдена..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const pastryStore = usePastryStore();
await pastryStore.loadAdminPastries();

const commentsStore = useCommentsStore();
await commentsStore.loadComments();
</script>
