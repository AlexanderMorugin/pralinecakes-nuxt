<template>
  <div class="cartTotalProductPrice">
    <span class="cartTotalProductPrice__number">
      {{
        currencyFormater(
          product.discount
            ? (product.price - (product.price * product.discount) / 100) *
                product.count
            : product.price * product.count
        )
      }}
    </span>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.cartTotalProductPrice {
  display: flex;
  justify-content: flex-end;
  padding-top: 5px;

  &__number {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;
  }
}
</style>
