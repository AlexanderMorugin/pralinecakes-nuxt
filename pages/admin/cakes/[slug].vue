<template>
  <ProductCardAdminManage
    v-if="adminCakeStore.adminCake"
    :type="adminCakeStore.adminCake[0].type"
  />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const route = useRoute();
const adminCakeStore = useAdminCakeStore();
await adminCakeStore.getAdminCake(route.params.slug);
</script>
