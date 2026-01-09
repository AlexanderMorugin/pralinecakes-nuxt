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
  display: flex;
  justify-content: flex-end;
  padding: 5px 5px 0 0;

  &__number {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;
  }
}
</style>
