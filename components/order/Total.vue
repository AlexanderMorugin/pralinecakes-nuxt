<template>
  <div class="orderTotal">
    <span class="orderTotal__key">Всего на сумму:</span>
    <span class="orderTotal__key orderTotal__right">{{
      currencyFormater(orderStore.order.total_cart_sum)
    }}</span>
    <span
      class="orderTotal__key"
      :class="
        orderStore.order.delivery_type === 'Доставка'
          ? 'orderTotal__red'
          : 'orderTotal__green'
      "
      >{{
        orderStore.order.delivery_type === "Доставка"
          ? "Доставка:"
          : "Скидка за самовывоз:"
      }}</span
    >
    <span
      class="orderTotal__key orderTotal__right"
      :class="
        orderStore.order.delivery_type === 'Доставка'
          ? 'orderTotal__red'
          : 'orderTotal__green'
      "
    >
      {{
        orderStore.order.delivery_type === "Доставка"
          ? currencyFormater(orderStore.order.delivery_sum)
          : currencyFormater(orderStore.order.cart_samovyvoz_bonus)
      }}</span
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
const cartStore = useCartStore();
const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
.orderTotal {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 15px;
  width: fit-content;
  padding-top: 20px;

  &__key {
    // font-family: "Montserrat-Regular", sans-serif;
    // font-size: 16px;
    line-height: 20px;
    vertical-align: bottom;
    opacity: 0.6;

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
  }

  &__commentBox {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__red {
    opacity: 1;
    color: var(--red-primary);
  }

  &__green {
    opacity: 1;
    color: var(--green-primary);
  }
}
</style>
