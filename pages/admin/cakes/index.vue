<template>
  <ButtonAddProduct
    v-if="userStore.user && userStore.user.user_role === 'admin'"
    type="cakes"
  />
  <ProductList
    v-if="cakesStore.cakes.length"
    type="cakes"
    :products="cakesStore.cakes"
    place="admin"
  />
  <ProductListEmpty v-else title="Продукция не найдена..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const cakesStore = useCakesStore();
await cakesStore.loadAdminCakes();

const commentsStore = useCommentsStore();
await commentsStore.loadComments();

const userStore = useUserStore();
</script>
