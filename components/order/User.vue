<template>
  <div>
    <div class="orderUser">
      <span class="orderUser__key">Заказчик:</span>
      <span class="orderUser__accent">{{ order.user_name }}</span>

      <span v-if="place === 'admin'" class="orderUser__key">Пользователь:</span>
      <NuxtLink
        v-if="adminUser && place === 'admin'"
        :to="`/admin/users/${order.user_id}`"
        class="orderUser__link"
        >зарегистрирован</NuxtLink
      >
      <span v-if="!adminUser && place === 'admin'" class="orderUser__key"
        >Без регистрации</span
      >
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Телефон:</span>
      <a :href="`tel:${order.user_phone}`" class="orderUser__accent">{{
        order.user_phone
      }}</a>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Тип доставки:</span>
      <span class="orderUser__accent">{{ order.delivery_type }}</span>
    </div>
    <div class="orderUser">
      <span class="orderUser__key">Общее количество:</span>
      <span class="orderUser__accent">{{ order.total_cart_count }} шт</span>
    </div>

    <div v-if="order.delivery_type === 'Доставка'" class="orderUser">
      <span class="orderUser__key">Адрес:</span>
      <span class="orderUser__address"
        >{{ order.user_city }}, ул. {{ order.user_street }}, д.
        {{ order.user_building }}, подъезд {{ order.user_entrance }}, кв.
        {{ order.user_flat }}, этаж {{ order.user_floor }}</span
      >
    </div>
  </div>
</template>

<script setup>
const { order, adminUser, place } = defineProps([
  "order",
  "adminUser",
  "place",
]);

console.log(adminUser);
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

  &__link {
    color: var(--white-primary);
    text-decoration: underline;
    transition: 0.2s ease;

    &:hover {
      color: var(--orange-primary);
    }
  }
}
</style>
