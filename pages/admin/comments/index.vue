<template>
  <CommentList
    v-if="commentsStore.comments.length"
    :comments="commentsStore.comments"
  />
  <ProductListEmpty v-else title="Отзывов пока нет..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const commentsStore = useCommentsStore();
await commentsStore.loadAdminComments();
</script>
