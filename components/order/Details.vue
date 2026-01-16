<template>
  <div class="orderDetails">
    <WrapperText class="orderDetails__title line-dashed"
      >Заказ № 203 от 14.02.2026 16:30</WrapperText
    >

    <div class="orderDetails__list">
      <span class="orderDetails__listKey">Имя заказчика:</span>
      <span>{{ orderStore.order.user_name }}</span>
      <span class="orderDetails__listKey">Телефон:</span>
      <span>{{ orderStore.order.user_phone }}</span>

      <span class="orderDetails__listKey">Тип доставки:</span>
      <span>{{ orderStore.order.delivery_type }}</span>
      <span class="orderDetails__listKey">Общее количество:</span>
      <span>{{ orderStore.order.total_cart_count }} шт</span>

      <div class="line-solid" />
      <div class="line-solid" />
      <span class="orderDetails__listKey">Товары:</span>
      <ul class="orderDetails__items">
        <li
          v-for="item in orderStore.order.cart_list"
          :key="item.id"
          class="orderDetails__item"
        >
          <span class="orderDetails__listKey">Название:</span>
          <span>{{ item.name }} ({{ item.weigth }}гр)</span>

          <span class="orderDetails__listKey">Количество:</span>
          <span>{{ item.count }}шт</span>

          <span class="orderDetails__listKey">Цена:</span>
          <span>{{ currencyFormater(item.price) }}</span>

          <span class="orderDetails__listKey">Скидка на товар:</span>
          <span>{{ item.discount }}%</span>

          <span class="orderDetails__listKey">Цена со скидкой:</span>
          <span>{{ currencyFormater(item.discount_price) }}</span>
        </li>
      </ul>

      <div class="line-solid" />
      <div class="line-solid" />
      <span class="orderDetails__listKey">Товаров на сумму:</span>
      <span>{{ currencyFormater(orderStore.order.total_cart_sum) }}</span>
      <span class="orderDetails__listKey">Скидка за самовывоз:</span>
      <span
        >- {{ currencyFormater(orderStore.order.cart_samovyvoz_bonus) }}</span
      >
      <span class="orderDetails__listKey">Итого:</span>
      <span>{{ currencyFormater(orderStore.order.total_order_sum) }}</span>

      <span class="orderDetails__listKey">Комментарий:</span>
      <span>{{ orderStore.order.user_comment }}</span>
    </div>
    <!-- <WrapperText>{{ orderStore.order }}</WrapperText> -->
  </div>
</template>

<script setup>
const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
.orderDetails {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__title {
    width: fit-content;
  }

  &__list {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      // gap: 0;
    }
  }

  &__listKey {
    // font-size: 14px;
    opacity: 0.6;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__item {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 30px;
    row-gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
  }
}
</style>
