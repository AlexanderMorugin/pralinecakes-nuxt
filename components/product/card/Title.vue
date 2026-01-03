<template>
  <section class="productCardTitle">
    <div class="productCardTitle__titleBlock">
      <h1 class="productCardTitle__name">
        {{ product.name }}
      </h1>

      <div class="productCardTitle__ratingBlock">
        <ProductListCardRating :rating="product.rating" />
        <ButtonWithIcon name="favorite" :isFavorite="product.isFavorite" />
      </div>
    </div>

    <span class="productCardTitle__description">{{ product.description }}</span>
  </section>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardTitle {
  display: flex;
  flex-direction: column;
  gap: 40px;
  // padding: 20px 40px;

  // @media (max-width: 1600px) {
  //   padding: 20px;
  // }

  @media (max-width: 767px) {
    gap: 10px;
  }

  &__titleBlock {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__ratingBlock {
    display: flex;
    align-items: center;
    width: fit-content;
    height: fit-content;
    gap: 20px;

    @media (max-width: 767px) {
      justify-content: space-between;
      width: 100%;
    }
  }

  &__name {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 36px;
    line-height: 48px;
    color: var(--white-primary);
    letter-spacing: 2px;

    @media (max-width: 1024px) {
      font-size: 26px;
      line-height: 36px;
      letter-spacing: 1px;
    }
  }

  &__description {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;
    opacity: 0.9;

    // @media (max-width: 1600px) {
    //   font-family: "Montserrat-Regular", sans-serif;
    //   font-size: 16px;
    //   line-height: 24px;
    //   letter-spacing: 1px;
    // }

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0;
    }
  }
}
</style>
