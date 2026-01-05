<template>
  <div class="productCardDetails">
    <ul class="productCardDetails__list">
      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Вес:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">{{ product.weigth }} гр</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Ширина:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">{{ product.width }} см</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Высота:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">{{ product.height }} см</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Срок годности:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text"
          >{{ product.expirationDate }} часа</span
        >
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Температура хранения:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text"
          >от {{ product.storageTemperature[0] }} до
          {{ product.storageTemperature[1] }}°C</span
        >
      </li>
    </ul>

    <ProductCardCart :product="product" />
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
    padding-left: 5px;
    padding-right: 5px;
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

  &__line {
    width: 100%;
    min-width: 20px;
    border-bottom: 1px dashed var(--border-primary);
  }

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    color: var(--white-primary);
    opacity: 0.9;
    white-space: nowrap;
  }
}
</style>
