<template>
  <CommentCard
    v-if="adminCommentStore.adminComment"
    :comment="adminCommentStore.adminComment[0]"
  />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
const route = useRoute();

const adminCommentStore = useAdminCommentStore();
await adminCommentStore.getAdminComment(route.params.id);
</script>
