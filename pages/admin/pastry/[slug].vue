<template>
  <ProductCardAdminManage
    v-if="adminPastryStore.adminPastry"
    :type="adminPastryStore.adminPastry[0].type"
  />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const route = useRoute();
const adminPastryStore = useAdminPastryStore();
await adminPastryStore.getAdminPastry(route.params.slug);
</script>
