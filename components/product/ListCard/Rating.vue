<template>
  <ul class="productListCardRating">
    <li v-for="i in 5" :key="i">
      <IconStar
        :class="[
          'productListCardRating__star',
          i <= rating ? 'productListCardRating__star_active' : '',
        ]"
      />
    </li>
  </ul>
</template>

<script setup>
const { rating } = defineProps(["rating"]);
</script>

<style lang="scss" scoped>
.productListCardRating {
  display: flex;
  align-items: center;
  gap: 1px;

  &__star {
    width: 16px;
    height: 16px;
    color: var(--mask-white-primary);

    &_active {
      color: var(--orange-primary);
      fill: var(--orange-primary);
    }
  }
}
</style>
