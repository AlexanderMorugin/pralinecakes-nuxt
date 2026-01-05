<template>
  <div class="commentProduct">
    <div class="commentProduct__titleBox">
      <div class="commentProduct__title">
        <span class="commentProduct__name">{{ comment.name }}</span>
        <span class="commentProduct__date">{{ comment.date }}</span>
      </div>

      <ProductListCardRating :rating="comment.rating" />
    </div>
  </div>

  <!-- name: "Лев Давидович",
          rating: 2,
          date: "Март 30, 2025",
          comment: "Никогда не пробовала ничего подобного. Благодарю!", -->
</template>

<script setup>
const { comment } = defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.commentProduct {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid red;

  &__titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    border: 1px solid red;
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid red;
  }

  &__name {
  }

  &__date {
  }
}
</style>
