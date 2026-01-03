<template>
  <div class="productCard">
    <div class="productCard__grid">
      <ProductCardImageOld :product="product" />

      <div class="productCard__details">
        <ProductCardTitle :product="product" />

        <ProductCardDetails :product="product" />
      </div>
    </div>
    <section class="productCard__options">
      <div>О продукте</div>
      <div>Состав</div>
      <div>Оплата и доставка</div>
      <div>Отзывы</div>
    </section>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.productCard {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 20px;
  // border: 1px solid red;

  // border: 1px solid red;

  // @media (max-width: 767px) {
  //   gap: 20px;
  // }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    // height: 500px;
    // border: 1px solid red;

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

    // @media (max-width: 576px) {
    //   gap: 40px;
    // }
  }

  &__options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 40px;
    // border: 1px solid red;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 0;
      // row-gap: 40px;
    }
  }
}
</style>
