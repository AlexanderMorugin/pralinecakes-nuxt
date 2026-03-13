<template>
  <ButtonAddProduct
    v-if="userStore.user && userStore.user.user_role === 'admin'"
    type="cakes"
  />
  <ProductList
    v-if="adminCakeStore.adminCakes.length"
    type="cakes"
    :products="adminCakeStore.adminCakes"
    place="admin"
  />
  <ProductListEmpty v-else title="Продукция не найдена..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const adminCakeStore = useAdminCakeStore();
await adminCakeStore.loadAdminCakes();

// const commentsStore = useCommentsStore();
// await commentsStore.loadComments();

const userStore = useUserStore();
</script>
