<template>
  <ul class="commentList page-padding-x">
    <li v-for="comment in comments" :key="comment.id">
      <CommentListCard :comment="comment" />
    </li>
  </ul>
</template>

<script setup>
const { comments } = defineProps(["comments"]);
</script>

<style lang="scss" scoped>
.commentList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
