<template>
  <ul class="productRating">
    <li v-for="i in 5" :key="i">
      <IconStar
        :class="[
          'productRating__star',
          i <= rating ? 'productRating__star_active' : '',
        ]"
      />
    </li>
  </ul>
</template>

<script setup>
const { rating } = defineProps(["rating"]);
</script>

<style lang="scss" scoped>
.productRating {
  display: flex;
  align-items: center;
  gap: 1px;

  &__star {
    width: 16px;
    height: 16px;
    color: var(--mask-white-primary);

    &_active {
      color: var(--red-primary);
      fill: var(--red-primary);
    }
  }
}
</style>
