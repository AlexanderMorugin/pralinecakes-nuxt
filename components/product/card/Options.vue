<template>
  <section class="productCardOptions">
    <div class="productCardOptions__buttons">
      <ButtonProductCardOption
        title="О продукте"
        :buttonRef="aboutRef"
        @toggleOption="toggleOption(1)"
      />
      <ButtonProductCardOption
        title="Состав"
        :buttonRef="ingredientRef"
        @toggleOption="toggleOption(2)"
      />
      <ButtonProductCardOption
        title="Оплата и доставка"
        :buttonRef="paymentRef"
        @toggleOption="toggleOption(3)"
      />
      <!-- <ButtonProductCardOption
        title="Отзывы"
        :comments="product.comments.length"
        :buttonRef="commentRef"
        @toggleOption="toggleOption(4)"
      /> -->
    </div>

    <div class="productCardOptions__block">
      <ProductCardAbout v-if="aboutRef" :product="product" />
      <ProductCardIngredients v-if="ingredientRef" :product="product" />
      <!-- <div v-if="paymentRef">Оплата и доставка</div>
      <ProductCardComments v-if="commentRef" :product="product" /> -->
    </div>
  </section>
</template>

<script setup>
const { product } = defineProps(["product"]);

const aboutRef = ref(true);
const ingredientRef = ref(false);
const paymentRef = ref(false);
const commentRef = ref(false);

const toggleOption = (number) => {
  if (number === 1) {
    aboutRef.value = true;
    ingredientRef.value = false;
    paymentRef.value = false;
    commentRef.value = false;
  }
  if (number === 2) {
    aboutRef.value = false;
    ingredientRef.value = true;
    paymentRef.value = false;
    commentRef.value = false;
  }
  if (number === 3) {
    aboutRef.value = false;
    ingredientRef.value = false;
    paymentRef.value = true;
    commentRef.value = false;
  }
  if (number === 4) {
    aboutRef.value = false;
    ingredientRef.value = false;
    paymentRef.value = false;
    commentRef.value = true;
  }
};
</script>

<style lang="scss" scoped>
.productCardOptions {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 40px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  &__block {
    border-radius: var(--border-radius-m);
    background: var(--gradient-product-blue-primary);
    padding: 40px 20px;
    overflow: hidden;
  }
}
</style>
