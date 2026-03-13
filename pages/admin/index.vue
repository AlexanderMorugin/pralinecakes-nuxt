<template>
  <div>PAGE CONTENT</div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

// const cakesStore = useCakesStore();
// await cakesStore.loadAdminCakes();

// const commentsStore = useCommentsStore();
// await commentsStore.loadComments();
</script>
