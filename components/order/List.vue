<template>
  <ul class="orderList">
    <li
      v-for="item in orderStore.order.cart_list"
      :key="item.id"
      class="orderList__item"
    >
      <img
        :src="item.image_list_card"
        :alt="item.name"
        class="orderList__image"
      />

      <div class="orderList__block">
        <div class="orderList__details">
          <div class="orderList__title">
            <span class="orderList__accent orderList__titleHeight">{{
              item.name
            }}</span>
            <span class="orderList__noAccent orderList__titleHeight"
              >{{ item.weigth }}гр</span
            >
          </div>

          <span class="orderList__accent orderList__count"
            >{{ item.count }} шт</span
          >
        </div>

        <div class="orderList__prices">
          <span class="orderList__noAccent orderList__right">{{
            item.discount ? `Цена со скидкой` : "Цена без скидки"
          }}</span>
          <span class="orderList__noAccent orderList__right">{{
            item.discount
              ? `${currencyFormater(item.discount_price)}`
              : `${currencyFormater(item.price)}`
          }}</span>
        </div>

        <div class="orderList__prices">
          <span class="orderList__noAccent orderList__right">Сумма</span>
          <span class="orderList__price orderList__right">{{
            item.discount
              ? `${currencyFormater(item.discount_price * item.count)}`
              : `${currencyFormater(item.price * item.count)}`
          }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
.orderList {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: fit-content;

  &__item {
    display: grid;
    grid-template-columns: 100px 1fr;
    column-gap: 10px;
    // row-gap: 10px;
    // border: 1px solid red;

    @media (max-width: 767px) {
      grid-template-columns: 60px 1fr;
      // grid-template-columns: 1fr;
      // row-gap: 10px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // gap: 10px;
  }

  &__details {
    display: grid;
    grid-template-columns: 1fr 25%;
    column-gap: 10px;

    // border: 1px solid red;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 5px;
    }
  }

  &__prices {
    display: grid;
    grid-template-columns: 1fr 25%;
    column-gap: 10px;
    row-gap: 10px;
    // border: 1px solid red;

    @media (max-width: 767px) {
      // grid-template-columns: 1fr 30%;
      padding-top: 5px;
      // column-gap: 0;
    }
  }

  &__image {
    width: 100px;
    height: 100%;
    border-radius: var(--border-radius-s);
    object-fit: cover;

    @media (max-width: 767px) {
      width: 60px;
      height: 60px;
    }
  }

  &__count {
    text-align: right;

    @media (max-width: 767px) {
      text-align: left;
    }
  }

  &__title {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    // align-items: flex-end;

    @media (max-width: 767px) {
      flex-direction: column;
      // align-items: flex-start;
      gap: 0;
    }
  }

  &__accent {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 18px;

    letter-spacing: 1px;
    vertical-align: bottom;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__noAccent {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    line-height: 14px;
    vertical-align: bottom;
    opacity: 0.6;
  }

  &__right {
    text-align: right;
  }

  &__price {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 14px;
    // letter-spacing: 1px;
    vertical-align: bottom;
  }

  &__titleHeight {
    line-height: 20px;
  }
}
</style>
