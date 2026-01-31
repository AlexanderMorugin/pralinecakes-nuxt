<template>
  <div class="productListCardPrice">
    <span class="productListCardPrice__weigth">{{
      product.weight ? `${product.weight}  гр` : ""
    }}</span>
    <div class="productListCardPrice__prices">
      <span v-if="product.discount" class="productListCardPrice__priceOld"
        >{{ currencyFormater(product.price) }}
      </span>
      <span class="productListCardPrice__price"
        >{{ currencyFormater(product.discount_price) }}
      </span>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productListCardPrice {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;

  &__prices {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  &__priceOld {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
    opacity: 0.7;
    text-decoration-line: line-through;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }

  &__price {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 24px;
    color: var(--white-primary);
    letter-spacing: 2px;

    @media (max-width: 1600px) {
      font-size: 20px;
    }

    @media (max-width: 1024px) {
      letter-spacing: 1px;
    }
  }

  &__weigth {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
    opacity: 0.7;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }
}
</style>
