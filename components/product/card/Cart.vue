<template>
  <div class="productCardCart">
    <ProductCardPrice :product="product" />

    <div class="productCardCart__buttonCartBlock">
      <ButtonCartBlock :product="product" />
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardCart {
  // position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 360px;
  border-radius: var(--border-radius-s);
  border: 1px solid var(--border-primary);
  // padding: 10px;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 400px;
    gap: 20px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
  }

  &__buttonCartBlock {
    padding: 10px;
  }
}
</style>
