<template>
  <div class="cartPrice">
    <span class="cartPrice__price"
      >{{
        currencyFormater(
          product.discount
            ? product.price - (product.price * product.discount) / 100
            : product.price
        )
      }}
    </span>
    <span v-if="product.discount" class="cartPrice__priceOld"
      >{{ currencyFormater(product.price) }}
    </span>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.cartPrice {
  display: flex;
  flex-direction: column;
  padding-top: 5px;

  &__priceOld {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: var(--mask-white-primary);
    text-decoration-line: line-through;

    // @media (max-width: 1600px) {
    //   font-size: 14px;
    // }
  }

  &__price {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;

    // @media (max-width: 1600px) {
    //   font-size: 20px;
    // }

    // @media (max-width: 1024px) {
    //   letter-spacing: 1px;
    // }
  }
}
</style>
