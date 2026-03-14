<template>
  <div class="userCommentList">
    <UserSubtitle
      :subtitle="place === 'admin' ? 'Отзывы:' : 'Ваши отзывы:'"
      :place="place"
    />
    <div class="userCommentList__items">
      <CommentProduct
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :place="place"
      />
    </div>
  </div>
</template>

<script setup>
const { comments, place } = defineProps(["comments", "place"]);
</script>

<style lang="scss" scoped>
.userCommentList {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
