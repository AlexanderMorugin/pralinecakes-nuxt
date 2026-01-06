<template>
  <div class="commentProduct">
    <div class="commentProduct__titleBox">
      <div class="commentProduct__title">
        <span class="commentProduct__name">{{ comment.name }}</span>
        <span class="commentProduct__date">{{ comment.date }}</span>
      </div>
      <ProductListCardRating :rating="comment.rating" />
    </div>

    <WrapperText class="commentProduct__comment">{{
      comment.comment
    }}</WrapperText>
  </div>
</template>

<script setup>
const { comment } = defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.commentProduct {
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(15px) grayscale(50%);
  border-radius: var(--border-radius-l);
  border: 1px solid var(--border-primary);
  overflow: hidden;

  &__titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 10px;
  }

  &__title {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0;
    }
  }

  &__date {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: var(--mask-white-primary);
  }

  &__comment {
    background: var(--deep-blue-fourthly);
    padding: 20px;
  }
}
</style>
