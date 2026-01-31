<template>
  <div class="productCardIngredients">
    <WrapperText
      v-if="product.ingredients"
      class="productCardIngredients__main"
      >{{ product.ingredients }}</WrapperText
    >

    <div v-if="product.calories" class="productCardIngredients__nutritionBlock">
      <h3 class="productCardIngredients__nutritionTitle">
        Пищевая ценность на 100 гр
      </h3>
      <ul class="productCardIngredients__nutrition">
        <li class="productCardIngredients__item">
          <span class="productCardIngredients__name">Белки</span>
          <div>
            <span class="productCardIngredients__count">{{
              product.protein
            }}</span
            ><span class="productCardIngredients__countSpan"> гр</span>
          </div>
        </li>
        <li class="productCardIngredients__item">
          <span class="productCardIngredients__name">Жиры</span>
          <div>
            <span class="productCardIngredients__count">{{ product.fat }}</span
            ><span class="productCardIngredients__countSpan"> гр</span>
          </div>
        </li>
        <li class="productCardIngredients__item">
          <span class="productCardIngredients__name">Углеводы</span>
          <div>
            <span class="productCardIngredients__count">{{
              product.carbohydrates
            }}</span
            ><span class="productCardIngredients__countSpan"> гр</span>
          </div>
        </li>
        <li class="productCardIngredients__item">
          <span class="productCardIngredients__name">Калории</span>
          <div>
            <span class="productCardIngredients__count">{{
              product.calories
            }}</span
            ><span class="productCardIngredients__countSpan"> ккал</span>
          </div>
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
    padding: 10px 10px 20px 10px;
  }

  &__main {
    animation: slide-to-right 0.5s ease-in-out;
  }

  &__nutritionBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: slide-to-top 0.5s ease-in-out;
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
    margin: 0 auto;

    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
      width: 90%;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: var(--border-radius-l);
    border: 1px solid var(--border-primary);
    padding: 20px;

    @media (max-width: 576px) {
      gap: 10px;
      padding: 12px;
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

  &__countSpan {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--orange-primary);

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>
