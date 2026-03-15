<template>
  <div>
    <div class="orderUser">
      <span class="orderUser__key">Заказчик:</span>
      <span class="orderUser__accent">{{ order[0].user_name }}</span>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Телефон:</span>
      <a :href="`tel:${order[0].user_phone}`" class="orderUser__accent">{{
        order[0].user_phone
      }}</a>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Тип доставки:</span>
      <span class="orderUser__accent">{{ order[0].delivery_type }}</span>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Общее количество:</span>
      <span class="orderUser__accent">{{ order[0].total_cart_count }} шт</span>
    </div>

    <div v-if="order[0].delivery_type === 'Доставка'" class="orderUser">
      <span class="orderUser__key">Адрес:</span>
      <span class="orderUser__address"
        >{{ order[0].user_city }}, ул. {{ order[0].user_street }}, д.
        {{ order[0].user_building }}, подъезд {{ order[0].user_entrance }}, кв.
        {{ order[0].user_flat }}, этаж {{ order[0].user_floor }}</span
      >
    </div>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
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
    line-height: 20px;
    vertical-align: bottom;

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
    color: var(--white-primary);

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__address {
    line-height: 26px;
    letter-spacing: 1px;
  }
}
</style>
