<template>
  <div class="productBadge">
    <span class="productBadge__text">{{ title }}</span>
  </div>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.productBadge {
  position: absolute;
  top: 18px;
  left: 0;
  z-index: 2;
  background: var(--red-primary);
  padding: 5px 12px;

  &__text {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 18px;
    color: var(--white-primary);
    letter-spacing: 2px;

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
}
</style>
