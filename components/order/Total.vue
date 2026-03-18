<template>
  <div class="orderTotal">
    <!-- <span class="orderTotal__key">Всего на сумму:</span>
    <span class="orderTotal__key orderTotal__right">{{
      // currencyFormater(order.total_cart_sum)
      currencyFormater(order.total_order_sum)
    }}</span> -->
    <span
      class="orderTotal__key"
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
      class="orderTotal__key orderTotal__right"
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

    <span v-if="userStore.user" class="orderTotal__key orderTotal__green"
      >Списаный бонус:</span
    >
    <span
      v-if="userStore.user"
      class="orderTotal__key orderTotal__right orderTotal__green"
      >{{ currencyFormater(order.user_spend_bonus) }}</span
    >

    <span class="orderTotal__accent">Итого:</span>
    <span class="orderTotal__accent orderTotal__right">{{
      currencyFormater(order.total_order_sum)
    }}</span>

    <span v-if="userStore.user" class="orderTotal__key orderTotal__red"
      >Начисленный бонус:</span
    >
    <span
      v-if="userStore.user"
      class="orderTotal__key orderTotal__right orderTotal__red"
      >{{ currencyFormater(order.user_bonus) }}</span
    >

    <span v-if="order.user_comment" class="orderTotal__key">Комментарий:</span>
    <span v-if="order.user_comment" class="orderTotal__comment">{{
      order.user_comment
    }}</span>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
const userStore = useUserStore();

// console.log(order);
</script>

<style lang="scss" scoped>
.orderTotal {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 15px;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;

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

  &__comment {
    font-size: 18px;
    line-height: 28px;
    word-break: break-all;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__red {
    opacity: 1;
    color: var(--red-fourthly);
  }

  &__green {
    opacity: 1;
    color: var(--green-primary);
  }
}
</style>
