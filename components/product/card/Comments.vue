<template>
  <div class="productCardComments">
    <div v-if="comments.length" class="productCardComments__list">
      <CommentProduct
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <WrapperText v-else>Отзывов пока нет.</WrapperText>

    <FormComment :product="product" />
  </div>
</template>

<script setup>
const { product, comments } = defineProps(["product", "comments"]);
</script>

<style lang="scss" scoped>
.productCardComments {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 40%;
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }

  @media (max-width: 767px) {
    padding: 10px 10px 20px 10px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
