<template>
  <div class="productCardIngredients">
    <WrapperText>{{ product.ingredients }}</WrapperText>

    <div class="productCardIngredients__nutritionBlock">
      <h3 class="productCardIngredients__nutritionTitle">
        Пищевая ценность на 100 гр
      </h3>
      <ul class="productCardIngredients__nutrition">
        <li
          v-for="item in product.nutrition"
          :key="item.name"
          class="productCardIngredients__item"
        >
          <span class="productCardIngredients__name">{{ item.name }}</span>
          <span class="productCardIngredients__count">{{ item.count }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardIngredients {
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 767px) {
    padding: 10px 5px 20px 5px;
  }

  &__nutritionBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
    // width: fit-content;
    // margin: 0 auto;
  }

  &__nutritionTitle {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--orange-primary);
    letter-spacing: 1px;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
    }
  }

  &__nutrition {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: var(--border-radius-l);
    border: 2px solid var(--border-primary);
    padding: 20px;

    @media (max-width: 576px) {
      gap: 10px;
      padding: 10px;
    }
  }

  &__name {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    color: var(--white-primary);
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__count {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 24px;
    color: var(--orange-primary);
    letter-spacing: 2px;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}
</style>
