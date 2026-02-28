<template>
  <ProductCardAdminManage :product="pastryStore.pastry" type="pastry" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const pastryStore = usePastryStore();
await pastryStore.getPastry(route.params.slug);

console.log(pastryStore.pastry);
</script>
