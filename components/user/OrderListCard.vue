<template>
  <button class="userOrderListCard">
    <div class="userOrderListCard__content">
      <span class="userOrderListCard__text userOrderListCard__text_left">
        {{ order.order_date }}
      </span>

      <span class="userOrderListCard__text">№ {{ order.order_number }}</span>
      <span class="userOrderListCard__text userOrderListCard__text_right"
        >Сумма: {{ currencyFormater(order.total_order_sum) }}</span
      >
    </div>
    <div class="userOrderListCard__content">
      <span
        class="userOrderListCard__status"
        :class="
          order.status_accept && !order.status_delivery
            ? 'userOrderListCard__status_accept'
            : order.status_accept &&
                order.status_delivery &&
                !order.status_complete
              ? 'userOrderListCard__status_delivery'
              : order.status_accept &&
                  order.status_delivery &&
                  order.status_complete
                ? 'userOrderListCard__status_complete'
                : ''
        "
      >
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
                ? "Выполнен"
                : "В обработке"
        }}
      </span>
      <span
        class="userOrderListCard__text userOrderListCard__text_right userOrderListCard__bonus"
        >Бонус: {{ currencyFormater(order.user_bonus) }}</span
      >
    </div>
  </button>
</template>

<script setup>
const { order } = defineProps(["order"]);

console.log(order);
</script>

<style lang="scss" scoped>
.userOrderListCard {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  background: var(--deep-blue-fourthly);
  border-radius: var(--border-radius-xs);
  padding: 7px;
  transition: 0.2s ease;

  &:hover {
    background: var(--deep-blue-thirdly);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__text {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    color: var(--white-primary);

    &_left {
      text-align: left;
    }

    &_right {
      text-align: right;
    }
  }

  &__status {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    color: var(--mask-white-primary);
    text-align: left;
    letter-spacing: 1px;

    &_accept {
      color: var(--red-secondary);
    }

    &_delivery {
      color: var(--green-primary);
    }

    &_complete {
      color: var(--mask-white-primary);
    }
  }

  &__bonus {
    color: var(--green-primary);
  }
}
</style>
