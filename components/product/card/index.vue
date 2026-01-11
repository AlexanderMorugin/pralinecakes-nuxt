<template>
  <div class="productCard page-padding-x">
    <div class="productCard__grid">
      <ProductCardImage :product="product" />

      <div class="productCard__details">
        <ProductCardTitle :product="product" />

        <ProductCardDetails :product="product" />
      </div>
    </div>

    <ProductCardOptions v-if="!isScreenMedium" :product="product" />

    <ProductCardOptionsMobile v-if="isScreenMedium" :product="product" />
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

const { isScreenMedium } = useResizeMedium();
const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.productCard {
  // position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 100px;

  @media (max-width: 1920px) {
    padding-top: 60px;
  }

  @media (max-width: 767px) {
    padding-top: 20px;
  }

  border: 1px solid red;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;

    @media (max-width: 1600px) {
      column-gap: 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      row-gap: 40px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
