<template>
  <div class="productCard">
    <div class="productCard__grid">
      <ProductCardImage :image="product.image" :name="product.name" />

      <div class="productCard__details">
        <ProductCardTitle :product="product" />

        <ProductCardDetails :product="product" />
      </div>

      <!-- <div class="productCard__weigth">Вес: {{ product.weigth }} гр</div>
      <div class="productCard__prices">
        <span v-if="product.discount" class="productCard__priceOld"
          >{{ product.price }} &#8381;</span
        >
        <span class="productCard__price"
          >Цена:
          {{
            product.discount
              ? product.price - (product.price * product.discount) / 100
              : product.price
          }}
          &#8381;</span
        >
      </div> -->

      <!-- <ButtonCartBlock :product="product" /> -->
    </div>
    <section class="productCard__options">
      <div>О продукте</div>
      <div>Состав</div>
      <div>Доставка</div>
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
  gap: 60px;
  padding-top: 80px;

  // border: 1px solid red;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    height: 500px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  // &__titleBlock {
  //   display: flex;
  //   justify-content: space-between;
  //   // align-items: center;
  //   gap: 20px;
  //   // border: 1px solid red;
  // }

  // &__ratingBlock {
  //   display: flex;
  //   align-items: center;
  //   width: fit-content;
  //   height: fit-content;
  //   gap: 20px;
  // }

  // &__prices {
  //   display: flex;
  //   flex-direction: column;
  //   // border: 1px solid red;
  // }

  &__options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    column-gap: 40px;
    // border: 1px solid red;
  }

  // &__cartButtons {
  //   display: grid;
  //   grid-template-columns: 1fr;
  //   column-gap: 10px;
  //   width: 100%;
  //   max-width: 300px;
  //   height: 50px;
  //   // margin-top: 10px;

  //   &_active {
  //     max-width: 500px;
  //     grid-template-columns: 60% 40%;
  //   }
  // }
}
</style>
