<template>
  <section class="productCardOptionsMobile">
    <div
      :class="[
        'productCardOptionsMobile__block',
        { productCardOptionsMobile__block_active: aboutRef },
      ]"
    >
      <ButtonProductCardOptionMobile
        title="О продукте"
        :buttonRef="aboutRef"
        @toggleOption="toggleOption(1)"
      />
      <ProductCardAbout v-if="aboutRef" :product="product" />
    </div>

    <div
      :class="[
        'productCardOptionsMobile__block',
        { productCardOptionsMobile__block_active: ingredientRef },
      ]"
    >
      <ButtonProductCardOptionMobile
        title="Состав"
        :buttonRef="ingredientRef"
        @toggleOption="toggleOption(2)"
      />
      <ProductCardIngredients v-if="ingredientRef" :product="product" />
    </div>
    <div
      :class="[
        'productCardOptionsMobile__block',
        { productCardOptionsMobile__block_active: paymentRef },
      ]"
    >
      <ButtonProductCardOptionMobile
        title="Оплата и доставка"
        :buttonRef="paymentRef"
        @toggleOption="toggleOption(3)"
      />
      <div class="productCardOptionsMobile__content">
        Вся продукция доставляется в замороженном виде, а наши автомобили
        оборудованы специальными морозильными камерами. Мы соблюдаем
        температурный режим транспортировки и несём полную гарантию качества
        своей продукции.
      </div>
    </div>
    <div
      :class="[
        'productCardOptionsMobile__block',
        { productCardOptionsMobile__block_active: commentRef },
      ]"
    >
      <ButtonProductCardOptionMobile
        title="Отзывы"
        :buttonRef="commentRef"
        @toggleOption="toggleOption(4)"
      />
      <div class="productCardOptionsMobile__content">
        Вся продукция доставляется в замороженном виде, а наши автомобили
        оборудованы специальными морозильными камерами. Мы соблюдаем
        температурный режим транспортировки и несём полную гарантию качества
        своей продукции.
      </div>
    </div>
  </section>
</template>

<script setup>
const { product } = defineProps(["product"]);

const aboutRef = ref(false);
const ingredientRef = ref(false);
const paymentRef = ref(false);
const commentRef = ref(false);

const toggleOption = (number) => {
  if (number === 1) {
    aboutRef.value = !aboutRef.value;
  }
  if (number === 2) {
    ingredientRef.value = !ingredientRef.value;
  }
  if (number === 3) {
    paymentRef.value = !paymentRef.value;
  }
  if (number === 4) {
    commentRef.value = !commentRef.value;
  }
};
</script>

<style lang="scss" scoped>
.productCardOptionsMobile {
  display: flex;
  flex-direction: column;

  &__block {
    height: 44px;
    border-bottom: 1px solid var(--border-primary);
    overflow: hidden;

    &_active {
      height: 100%;
    }
  }

  &__content {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    line-height: 26px;
    color: var(--white-primary);
    padding-bottom: 10px;
  }
}
</style>
