<template>
  <div class="cartTotalProductPrice">
    <span class="cartTotalProductPrice__number">
      {{
        currencyFormater(
          // product.total_product_price
          product.discount_price
            ? product.discount_price * product.count
            : product.price * product.count
        )
      }}
    </span>
    <!-- {{ product.total_product_price }} -->
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.cartTotalProductPrice {
  grid-area: total;
  display: flex;
  justify-content: flex-end;
  // padding: 5px 5px 0 0;
  padding-top: 35px;

  // border: 1px solid red;

  @media (max-width: 767px) {
    padding: 0;
  }

  &__number {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    // line-height: 28px;
    line-height: 40px;
    color: var(--white-primary);
    letter-spacing: 1px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0;
    }
  }
}
</style>
