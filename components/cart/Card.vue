<template>
  <NuxtLink :to="`/${product.type}/${product.slug}`" class="cartCard">
    <div class="cartCard__imageBox">
      <img
        :src="product.image_list_card"
        :alt="product.name"
        class="cartCard__image"
      />
    </div>
    <div class="cartCard__nameBox">
      <span class="cartCard__name">{{ product.name }}</span>
      <span class="cartCard__weigth">{{ product.weigth }}гр</span>
    </div>
  </NuxtLink>
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
    // grid-template-columns: 120px 1fr;
    gap: 10px;
  }

  &__imageBox {
    width: 150px;
    height: 100px;
    border-radius: var(--border-radius-s);
    overflow: hidden;

    // @media (max-width: 767px) {
    //   width: 120px;
    //   height: 80px;
    // }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__nameBox {
    display: flex;
    flex-direction: column;
    padding-top: 5px;

    @media (max-width: 767px) {
      padding-top: 0;
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

    // border: 1px solid red;
  }

  &__weigth {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: var(--mask-white-primary);
    // letter-spacing: 1px;
  }
}
</style>
