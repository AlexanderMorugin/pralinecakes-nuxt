<template>
  <div class="productCardDetails">
    <ul class="productCardDetails__list">
      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Вес:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">{{ product.weigth }} гр</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Размеры:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">d 18 см, h 12 см</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Срок годности:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">72 часа</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Температура хранения:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">от 4 до 6°C</span>
      </li>
    </ul>

    <ul class="productCardDetails__list">
      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Вес:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">{{ product.weigth }} гр</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Размеры:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">d 18 см, h 12 см</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Срок годности:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">72 часа</span>
      </li>

      <li class="productCardDetails__listItem">
        <span class="productCardDetails__text">Температура хранения:</span>
        <div class="productCardDetails__line" />
        <span class="productCardDetails__text">от 4 до 6°C</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardDetails {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // max-width: 300px;
  }

  &__listItem {
    display: flex;
    justify-content: space-between;
    // width: 100%;
  }

  &__line {
    width: 100%;
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
