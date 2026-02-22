<template>
  <div class="cartCard">
    <NuxtLink
      :to="`/${product.type}/${product.slug}`"
      class="cartCard__imageBox"
    >
      <img :src="product.image" :alt="product.name" class="cartCard__image" />
    </NuxtLink>
    <div class="cartCard__nameBox">
      <span class="cartCard__name">{{ product.title }}</span>
      <span class="cartCard__weigth">{{ product.weight }} гр</span>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.cartCard {
  grid-area: card;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 20px;

  // border: 1px solid red;
  @media (max-width: 1280px) {
    gap: 10px;
  }

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: auto 1fr;
    gap: 10px;
  }

  &__imageBox {
    width: 150px;
    height: 100px;
    border-radius: var(--border-radius-s);
    overflow: hidden;

    @media (max-width: 767px) {
      width: 60px;
      height: 60px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__nameBox {
    display: flex;
    flex-direction: column;
    // padding-top: 5px;
    // padding-top: 35px;

    @media (max-width: 767px) {
      padding-right: 90px;
    }
  }

  &__name {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0;
    }
  }

  &__weigth {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: var(--mask-white-primary);

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 22px;
    }
  }
}
</style>
