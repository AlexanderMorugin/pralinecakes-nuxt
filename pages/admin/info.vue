<template>
  <!-- <div> -->
  <div>PAGE INFO</div>
  <!-- </div> -->
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const cakesStore = useCakesStore();
await cakesStore.loadAdminCakes();
</script>
