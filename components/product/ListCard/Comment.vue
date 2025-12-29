<template>
  <div class="productListCardComment">
    <IconComment class="productListCardComment__icon" />
    <span class="productListCardComment__count">{{ comments }}</span>
  </div>
</template>

<script setup>
const { comments } = defineProps(["comments"]);
</script>

<style lang="scss" scoped>
.productListCardComment {
  display: flex;
  align-items: center;
  gap: 5px;

  &__icon {
    width: 20px;
    height: 20px;
    fill: var(--mask-white-primary);
  }

  &__count {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 12px;
    color: var(--mask-white-primary);
  }
}
</style>
