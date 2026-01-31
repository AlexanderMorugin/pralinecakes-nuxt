<template>
  <section class="productCardTitle">
    <div class="productCardTitle__titleBlock">
      <h1 class="productCardTitle__title">
        {{ product.title }}
      </h1>

      <div class="productCardTitle__ratingBlock">
        <ProductListCardRating :rating="product.rating" />
        <!-- <ButtonWithIcon name="favorite" :isFavorite="product.isFavorite" /> -->
      </div>
    </div>

    <span class="productCardTitle__description">{{
      product.description_short
    }}</span>
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

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 2px;

    color: transparent;
    background-image: linear-gradient(
      to right,
      var(--white-primary) 40%,
      var(--orange-primary) 47%,
      var(--white-primary) 70%,
      var(--white-primary) 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 8s ease-in-out infinite forwards;

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

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0;
    }
  }
}

@keyframes textShine {
  0% {
    background-position: right top;
  }
  60% {
    background-position: right top;
  }
  100% {
    background-position: left bottom;
  }
}
</style>
