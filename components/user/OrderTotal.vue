<template>Этот компонент удалить</template>

<!-- <template>
  <div class="userOrderTotal">
    <span class="userOrderTotal__key">Всего на сумму:</span>

    <span class="userOrderTotal__key userOrderTotal__right">{{
      currencyFormater(order.total_cart_sum)
    }}</span>

    <span
      class="userOrderTotal__key"
      :class="
        order.delivery_type === 'Доставка'
          ? 'orderTotal__red'
          : 'orderTotal__green'
      "
      >{{
        order.delivery_type === "Доставка"
          ? "Доставка:"
          : "Скидка за самовывоз:"
      }}</span
    >

    <span
      class="userOrderTotal__key userOrderTotal__right"
      :class="
        order.delivery_type === 'Доставка'
          ? 'orderTotal__red'
          : 'orderTotal__green'
      "
    >
      {{
        order.delivery_type === "Доставка"
          ? currencyFormater(order.delivery_sum)
          : currencyFormater(order.cart_samovyvoz_bonus)
      }}</span
    >

    <span class="userOrderTotal__accent">Итого:</span>

    <span class="userOrderTotal__accent userOrderTotal__right">{{
      currencyFormater(order.total_order_sum)
    }}</span>

    <span class="userOrderTotal__key">Начисленный бонус:</span>
    <span class="userOrderTotal__key userOrderTotal__right">{{
      currencyFormater(order.user_bonus)
    }}</span>

    <div class="userOrderTotal__commentBox">
      <span class="userOrderTotal__key">Комментарий:</span>
      <span class="userOrderTotal__comment">{{ order.user_comment }}</span>
    </div>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.userOrderTotal {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 15px;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
  }

  &__key {
    line-height: 20px;
    vertical-align: bottom;

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
</style> -->
