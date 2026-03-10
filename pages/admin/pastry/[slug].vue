<template>
  <ProductCardAdminManage :type="pastryStore.pastry[0].type" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const route = useRoute();
const pastryStore = usePastryStore();
await pastryStore.getPastry(route.params.slug);
</script>
