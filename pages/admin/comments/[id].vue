<template>
  <div>
    <!-- <CommentCard :comment="commentsStore.comment[0]" /> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const route = useRoute();

// const commentsStore = useCommentsStore();
// await commentsStore.getComment(route.params.id);
</script>
