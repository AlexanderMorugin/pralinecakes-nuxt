<template>
  <NuxtLink
    :to="`/admin/orders/${order.id}`"
    :class="[
      'orderListCard',
      {
        orderListCard_new: !order.status_accept,
      },
      {
        orderListCard_accept: order.status_accept,
      },
      {
        orderListCard_delivery: order.status_delivery,
      },
      {
        orderListCard_complete: order.status_complete,
      },
    ]"
  >
    <div class="orderListCard__block">
      <div class="orderListCard__text">
        №
        <span class="orderListCard__textDoubleAccent">{{
          order.order_number
        }}</span>
      </div>
      <span class="orderListCard__text">
        {{ order.order_date }}
      </span>
    </div>

    <div class="orderListCard__block">
      <span
        class="orderListCard__textDoubleAccent"
        :class="
          order.delivery_type === 'Доставка'
            ? 'orderListCard__red'
            : 'orderListCard__green'
        "
        >{{ order.delivery_type }}</span
      >
      <div class="orderListCard__string">
        <IconAccount class="orderListCard__icon" />
        <span class="orderListCard__textAccent">{{ order.user_name }}</span>
      </div>
      <div class="orderListCard__string">
        <IconPhone class="orderListCard__icon" />
        <span class="orderListCard__textAccent">{{ order.user_phone }}</span>
      </div>
    </div>

    <div class="orderListCard__block">
      <div class="orderListCard__text">
        всего:
        <span class="orderListCard__textDoubleAccent">{{
          order.total_cart_count
        }}</span>
        шт
      </div>
      <div class="orderListCard__text">
        сумма:
        <span class="orderListCard__textDoubleAccent">{{
          order.total_order_sum
        }}</span>
        ₽
      </div>
    </div>

    <div class="orderListCard__block">
      <span class="orderListCard__textDoubleAccent">
        {{
          order.status_accept &&
          !order.status_delivery &&
          !order.status_complete
            ? "Принят"
            : order.status_accept &&
                order.status_delivery &&
                !order.status_complete
              ? "Доставляется"
              : order.status_accept &&
                  order.status_delivery &&
                  order.status_complete
                ? "Завершен"
                : "Новый"
        }}</span
      >
    </div>
  </NuxtLink>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.orderListCard {
  display: grid;
  grid-template-columns: 150px 1fr 170px 150px;
  border-radius: var(--border-radius-xs);
  background: var(--deep-blue-thirdly);

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  &:hover {
    background: var(--mask-black-thirdly);
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

  &__block {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 7px;
    border-right: 1px solid var(--white-primary);

    @media (max-width: 767px) {
      border-right: none;
    }

    &:last-child {
      border-right: none;
      align-items: flex-end;

      @media (max-width: 767px) {
        justify-content: flex-end;
      }
    }
  }

  &__text {
    font-size: 12px;
    color: var(--mask-white-secondary);
    vertical-align: bottom;
  }

  &__textAccent {
    font-size: 12px;
    color: var(--white-primary);
  }

  &__textDoubleAccent {
    font-size: 18px;
    font-family: "Montserrat-Medium", sans-serif;
    color: var(--white-primary);
  }

  &__icon {
    width: 18px;
    height: 18px;
    fill: var(--mask-white-secondary);
  }

  &__string {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__red {
    color: var(--red-fourthly);
  }

  &__green {
    color: var(--green-primary);
  }
}
</style>
