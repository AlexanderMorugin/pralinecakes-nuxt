<template>
  <ProductCardAdminManage
    v-if="pastryStore.pastry"
    :type="pastryStore.pastry[0].type"
  />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const route = useRoute();
const pastryStore = usePastryStore();
await pastryStore.getAdminPastry(route.params.slug);
</script>
