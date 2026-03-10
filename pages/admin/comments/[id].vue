<template>
  <CommentCard
    v-if="commentsStore.comment"
    :comment="commentsStore.comment[0]"
  />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
const route = useRoute();

const commentsStore = useCommentsStore();
await commentsStore.getComment(route.params.id);
</script>
