<template>
  <div class="orderSum">
    <div class="orderSum__block text-price">
      <span>Сумма</span>
      <div class="line-dashed" />
      <span>{{ currencyFormater(cartStore.totalCartSum) }}</span>
    </div>
    <div class="orderSum__bonus">
      <span class="text-bonus"
        >+ {{ currencyFormater(cartStore.cartBonus) }} на ваш бонусный
        счет</span
      >
    </div>

    <div class="orderSum__box">
      <div class="orderSum__block text-price">
        <span>Доставка</span>
        <div class="line-dashed" />
        <span>{{ currencyFormater(cartStore.deliverySum) }}</span>
      </div>
      <span class="orderSum__comment"
        >Минимальный заказ для бесплатной доставки
        {{ currencyFormater(MIN_ORDER_SUM) }}</span
      >
    </div>

    <div class="orderSum__block orderSum__total text-total-price">
      <span>Итого</span>
      <div class="line-dashed" />
      <span>{{ currencyFormater(cartStore.totalOrderSum) }}</span>
    </div>
  </div>
</template>

<script setup>
import { MIN_ORDER_SUM } from "~/utils/constants/info";

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.orderSum {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  &__block {
    display: flex;
    justify-content: space-between;
  }

  &__box {
    display: flex;
    flex-direction: column;
  }

  &__bonus {
    display: flex;
    justify-content: flex-end;
  }

  &__total {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 22px;
    // line-height: 32px;
    color: var(--white-primary);
    letter-spacing: 1px;
    padding-top: 40px;
  }

  &__comment {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: var(--mask-white-primary);
  }
}
</style>
