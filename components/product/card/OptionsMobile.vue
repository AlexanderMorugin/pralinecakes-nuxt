<template>
  <section class="productCardOptionsMobile">
    <div class="productCardOptionsMobile__container">
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
          :comments="comments.length"
          @toggleOption="toggleOption(4)"
        />
        <ProductCardComments
          v-if="commentRef"
          :product="product"
          :comments="comments"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { product, comments } = defineProps(["product", "comments"]);

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
  // padding-left: 5px;
  // padding-right: 5px;

  &__container {
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-s);
    overflow: hidden;
  }

  &__block {
    height: 60px;
    background: var(--gradient-product-blue-primary);
    border-bottom: 1px solid var(--border-primary);
    overflow: hidden;

    &:last-child {
      border-bottom: none;
    }

    &_active {
      height: 100%;
    }
  }

  &__content {
    // font-family: "Montserrat-Regular", sans-serif;
    // font-size: 16px;
    line-height: 26px;
    color: var(--white-primary);
    padding-bottom: 10px;
  }
}
</style>
