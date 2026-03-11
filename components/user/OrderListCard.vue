<template>
  <div>
    <button @click="isOrderModalOpen = true" class="userOrderListCard">
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
        <UserOrderStatus :order="order" />
      </div>
    </button>

    <Teleport to="#teleports">
      <Transition name="right">
        <ModalOrder
          v-if="isOrderModalOpen"
          :order="order"
          @closeModal="isOrderModalOpen = false"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);

const isOrderModalOpen = ref(false);
// console.log(order);
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

  &__bonus {
    color: var(--green-primary);
  }
}
</style>
