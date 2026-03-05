<template>
  <!-- <ProductCardAdminManage :type="cakesStore.cake[0].type" /> -->
  <div>{{ userStore.user }}</div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const userStore = useUserStore();
await userStore.getUser(route.params.id);
</script>
