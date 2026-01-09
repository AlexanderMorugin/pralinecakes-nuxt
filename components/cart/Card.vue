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
  display: flex;
  gap: 20px;

  &__imageBox {
    width: 150px;
    height: 100px;
    border-radius: var(--border-radius-s);
    overflow: hidden;
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
  }

  &__name {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;
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
