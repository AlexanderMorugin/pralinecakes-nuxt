<template>
  <div class="productCardComments">
    <div v-if="product.comments.length" class="productCardComments__list">
      <CommentProduct
        v-for="comment in product.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <WrapperText v-else>Отзывов пока нет.</WrapperText>

    <FormComment />
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardComments {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    padding: 10px 5px 20px 5px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
