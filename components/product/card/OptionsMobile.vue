<template>
  <section class="productCardOptionsMobile">
    <div
      :class="[
        'productCardOptionsMobile__block',
        { productCardOptionsMobile__block_active: aboutRef },
      ]"
    >
      <button @click="toggleOption(1)" class="productCardOptionsMobile__button">
        <h2
          :class="[
            'productCardOptionsMobile__title',
            { productCardOptionsMobile__title_active: aboutRef },
          ]"
        >
          О продукте
        </h2>
        <IconArrowChevron
          :class="[
            'productCardOptionsMobile__icon',
            { productCardOptionsMobile__icon_active: aboutRef },
          ]"
        />
      </button>
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
        { productCardOptionsMobile__block_active: ingredientRef },
      ]"
    >
      <button @click="toggleOption(2)" class="productCardOptionsMobile__button">
        <h2
          :class="[
            'productCardOptionsMobile__title',
            { productCardOptionsMobile__title_active: ingredientRef },
          ]"
        >
          Состав
        </h2>
        <IconArrowChevron
          :class="[
            'productCardOptionsMobile__icon',
            { productCardOptionsMobile__icon_active: ingredientRef },
          ]"
        />
      </button>
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
        { productCardOptionsMobile__block_active: paymentRef },
      ]"
    >
      <button @click="toggleOption(3)" class="productCardOptionsMobile__button">
        <h2
          :class="[
            'productCardOptionsMobile__title',
            { productCardOptionsMobile__title_active: paymentRef },
          ]"
        >
          Оплата и доставка
        </h2>
        <IconArrowChevron
          :class="[
            'productCardOptionsMobile__icon',
            { productCardOptionsMobile__icon_active: paymentRef },
          ]"
        />
      </button>
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
      <button @click="toggleOption(4)" class="productCardOptionsMobile__button">
        <h2
          :class="[
            'productCardOptionsMobile__title',
            { productCardOptionsMobile__title_active: commentRef },
          ]"
        >
          Отзывы
        </h2>
        <IconArrowChevron
          :class="[
            'productCardOptionsMobile__icon',
            { productCardOptionsMobile__icon_active: commentRef },
          ]"
        />
      </button>
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
    // transition: height 1.3s ease;

    &_active {
      height: 100%;
    }
  }

  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
  }

  &__title {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 16px;
    // line-height: 30px;
    color: var(--white-primary);
    letter-spacing: 2px;
    opacity: 0.8;

    &_active {
      color: var(--orange-primary);
      opacity: 1;
    }
  }

  &__icon {
    width: 26px;
    height: 26px;
    fill: var(--white-primary);
    opacity: 0.8;
    transform: rotate(90deg);
    transition: 0.5s ease;

    &_active {
      transform: rotate(270deg);
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
