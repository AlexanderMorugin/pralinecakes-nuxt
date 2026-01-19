<template>
  <div class="productCardPrice">
    <div v-if="product.discount" class="productCardPrice__discount">
      <span class="productCardPrice__discountText"
        >Скидка -{{ product.discount }}%</span
      >
    </div>

    <div class="productCardPrice__container">
      <span class="productCardPrice__priceName">Цена:</span>
      <div class="productCardPrice__prices">
        <span v-if="product.discount" class="productCardPrice__priceOld"
          >{{ currencyFormater(product.price) }}
        </span>
        <span class="productCardPrice__price"
          >{{
            currencyFormater(
              product.discount
                ? product.price - (product.price * product.discount) / 100
                : product.price
            )
          }}
        </span>
      </div>
    </div>

    <div class="productCardPrice__bonus">
      +{{
        currencyFormater(
          product.discount
            ? (product.price - (product.price * product.discount) / 100) *
                USER_BONUS
            : product.price * USER_BONUS
        )
      }}
      на ваш бонусный счет
    </div>
  </div>
</template>

<script setup>
import { USER_BONUS } from "~/utils/constants/info";
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardPrice {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__discount {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: var(--gradient-product-card-discount);
    padding: 10px;
  }

  &__discountText {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 18px;
    color: var(--white-primary);
    letter-spacing: 1px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px 10px 10px 10px;
  }

  &__prices {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__priceName {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    color: var(--white-primary);
    letter-spacing: 1px;
  }

  &__priceOld {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
    opacity: 0.7;
    text-decoration-line: line-through;
  }

  &__price {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 24px;
    color: var(--white-primary);
    letter-spacing: 2px;
  }

  &__bonus {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--green-primary);
    text-align: right;
    padding-left: 10px;
    padding-right: 10px;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }
}
</style>
