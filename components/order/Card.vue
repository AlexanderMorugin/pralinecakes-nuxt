<template>
  <div
    :class="[
      'orderCard',
      {
        orderCard_new: !order[0].status_accept,
      },
      {
        orderCard_accept: order[0].status_accept,
      },
      {
        orderCard_delivery: order[0].status_delivery,
      },
      {
        orderCard_complete: order[0].status_complete,
      },
    ]"
  >
    {{ order[0].user_id }}

    <div class="orderCard__title">
      Заказ №
      <span class="orderCard__titleAccent">{{ order[0].order_number }}</span> от
      {{ order[0].order_date }}
    </div>
    <div class="orderCard__title">
      Статус:
      <span class="orderCard__titleAccent">
        {{
          order[0].status_accept &&
          !order[0].status_delivery &&
          !order[0].status_complete
            ? "Принят"
            : order[0].status_accept &&
                order[0].status_delivery &&
                !order[0].status_complete
              ? "Доставляется"
              : order[0].status_accept &&
                  order[0].status_delivery &&
                  order[0].status_complete
                ? "Завершен"
                : "Новый"
        }}
      </span>
    </div>
    <OrderUser :order="order" />
    <div class="line-solid" />
    <OrderList :order="order" />
    <div class="line-solid" />
    <UserOrderTotal :order="order[0]" />
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
    background: var(--mask-black-thirdly);
  }

  &__title {
    line-height: 32px;
    letter-spacing: 1px;
    color: var(--white-primary);
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
