<template>
  <div class="productCardDetails">
    <ul class="productCardDetails__list">
      <li v-if="product.weight" class="productCardDetails__listItem">
        <span class="productCardDetails__text">Вес:</span>
        <div class="line-dashed" />
        <span class="productCardDetails__text">{{ product.weight }} гр</span>
      </li>

      <li v-if="product.width" class="productCardDetails__listItem">
        <span class="productCardDetails__text">Ширина:</span>
        <div class="line-dashed" />
        <span class="productCardDetails__text">{{ product.width }} см</span>
      </li>

      <li v-if="product.height" class="productCardDetails__listItem">
        <span class="productCardDetails__text">Высота:</span>
        <div class="line-dashed" />
        <span class="productCardDetails__text">{{ product.height }} см</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Срок годности:</span>
        <div class="line-dashed" />
        <span class="productCardDetails__text">72 часа</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Температура хранения:</span>
        <div class="line-dashed" />
        <span class="productCardDetails__text">от 4 до 8°C</span>
      </li>
    </ul>

    <ProductCardCart v-if="product.price" :product="product" />
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardDetails {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px;

    @media (max-width: 576px) {
      max-width: 100%;
    }
  }

  &__listItem {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    color: var(--white-primary);
    opacity: 0.9;
    white-space: nowrap;
  }
}
</style>
