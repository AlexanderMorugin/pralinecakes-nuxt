<template>
  <div>
    <div class="orderUser">
      <span class="orderUser__key">Заказчик:</span>
      <span class="orderUser__accent">{{ orderStore.order[0].user_name }}</span>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Телефон:</span>
      <span class="orderUser__accent">{{
        orderStore.order[0].user_phone
      }}</span>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Тип доставки:</span>
      <span class="orderUser__accent">{{
        orderStore.order[0].delivery_type
      }}</span>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Общее количество:</span>
      <span class="orderUser__accent"
        >{{ orderStore.order[0].total_cart_count }} шт</span
      >
    </div>

    <div v-if="orderStore.order.delivery_type === 'Доставка'" class="orderUser">
      <span class="orderUser__key">Адрес:</span>
      <span class="orderUser__address"
        >{{ orderStore.order[0].user_city }}, ул.
        {{ orderStore.order[0].user_street }}, д.
        {{ orderStore.order[0].user_building }}, подъезд
        {{ orderStore.order[0].user_entrance }}, кв.
        {{ orderStore.order[0].user_flat }}, этаж
        {{ orderStore.order[0].user_floor }}</span
      >
    </div>
  </div>
</template>

<script setup>
const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
.orderUser {
  display: grid;
  grid-template-columns: 15% 1fr;
  gap: 15px;
  padding-top: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }

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

  &__accent {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 1px;
    vertical-align: bottom;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__address {
    // font-family: "Montserrat-Regular", sans-serif;
    // font-size: 16px;
    line-height: 26px;
    letter-spacing: 1px;
  }
}
</style>
