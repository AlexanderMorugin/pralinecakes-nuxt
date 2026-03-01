<template>
  <div
    :class="[
      'orderCard',
      {
        orderCard_new: !order.status_accept,
      },
      {
        orderCard_accept: order.status_accept,
      },
      {
        orderCard_delivery: order.status_delivery,
      },
      {
        orderCard_complete: order.status_complete,
      },
    ]"
  >
    <!-- {{ order }} -->
    <div class="orderCard__title">
      Заказ №
      <span class="orderCard__titleAccent">{{ order[0].order_number }}</span> от
      <span class="orderCard__titleAccent">{{ order[0].order_date }}</span>
    </div>
    <OrderUser />
    <div class="line-solid" />
    <!-- <OrderList /> -->
    <!-- <OrderProducts /> -->
    <div class="line-solid" />
    <OrderTotal />
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.orderCard {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: var(--border-radius-l);
  background: var(--deep-blue-thirdly);
  padding: 20px;

  @media (max-width: 767px) {
    padding: 20px 10px;
  }

  &_new {
    background: var(--red-thirdly);
  }

  &_accept {
    background: var(--deep-blue-thirdly);
  }

  &_delivery {
    background: var(--green-fifthly);
  }

  &_complete {
    background: var(--deep-blue-fourthly);
  }

  &__title {
    // font-family: "Inter-Regular", sans-serif;
    // font-size: 16px;
    line-height: 32px;
    letter-spacing: 1px;
    color: var(--mask-white-secondary);
  }

  &__titleAccent {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 1px;
    color: var(--white-primary);
  }
}
</style>
