<template>
  <div class="productDiscount">
    <span class="productDiscount__number">-{{ discount }}%</span>
  </div>
</template>

<script setup>
const { discount } = defineProps(["discount"]);
</script>

<style lang="scss" scoped>
.productDiscount {
  position: absolute;
  top: 70px;
  left: 10px;
  z-index: 2;
  background: var(--mask-black-secondary);
  border-radius: var(--border-radius-l);
  padding: 10px 14px;

  &__number {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    color: var(--white-primary);
    letter-spacing: 1px;
  }
}
</style>
