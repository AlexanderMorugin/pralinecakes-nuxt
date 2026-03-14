<template>
  <CommentList
    v-if="adminCommentStore.adminComments.length"
    :comments="adminCommentStore.adminComments"
  />
  <ProductListEmpty v-else title="Отзывов пока нет..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const adminCommentStore = useAdminCommentStore();
await adminCommentStore.loadAdminComments();
</script>
