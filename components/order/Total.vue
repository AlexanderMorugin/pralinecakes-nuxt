<template>
  <div class="orderTotal">
    <span class="orderTotal__key">Товаров на сумму:</span>
    <span class="orderTotal__key orderTotal__right">{{
      currencyFormater(orderStore.order.total_cart_sum)
    }}</span>
    <span class="orderTotal__key">Скидка за самовывоз:</span>
    <span class="orderTotal__key orderTotal__right"
      >- {{ currencyFormater(orderStore.order.cart_samovyvoz_bonus) }}</span
    >
    <span class="orderTotal__accent">Итого:</span>
    <span class="orderTotal__accent orderTotal__right">{{
      currencyFormater(orderStore.order.total_order_sum)
    }}</span>

    <div class="orderTotal__commentBox">
      <span class="orderTotal__key">Комментарий:</span>
      <span class="orderTotal__comment">{{
        orderStore.order.user_comment
      }}</span>
    </div>
  </div>
</template>

<script setup>
const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
.orderTotal {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 15px;
  width: fit-content;
  padding-top: 20px;
  // border: 1px solid red;

  // @media (max-width: 767px) {
  //   grid-template-columns: 1fr;
  //   gap: 5px;
  // }

  &__key {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    line-height: 20px;
    vertical-align: bottom;
    opacity: 0.6;

    // border: 1px solid red;
    // border: 1px solid red;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  &__right {
    text-align: right;
  }

  &__accent {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 20px;
  }

  &__commentBox {
    display: grid;
    grid-template-columns: 1fr;
    // gap: 15px;
  }

  &__commentBox {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    // letter-spacing: 1px;
    // vertical-align: bottom;
    // border: 1px solid red;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
}
</style>
