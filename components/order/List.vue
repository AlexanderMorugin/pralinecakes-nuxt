<template>
  <ul class="orderList">
    <li
      v-for="item in orderStore.order[0].cart_list"
      :key="item.id"
      class="orderList__item"
    >
      <div class="orderList__imageBox">
        <img :src="item.image" :alt="item.title" class="orderList__image" />
      </div>

      <div class="orderList__block">
        <div class="orderList__details">
          <div class="orderList__title">
            <span class="orderList__accent orderList__titleHeight">{{
              item.title
            }}</span>
            <span class="orderList__noAccent orderList__titleHeight"
              >{{ item.weight }}гр</span
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

    @media (max-width: 767px) {
      grid-template-columns: 60px 1fr;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__details {
    display: grid;
    grid-template-columns: 1fr 25%;
    column-gap: 10px;

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
    padding-top: 5px;

    // @media (max-width: 767px) {
    //   padding-top: 5px;
    // }
  }

  &__imageBox {
    width: 100px;
    height: 100px;
    background: var(--gradient-product-blue-primary);
    border-radius: var(--border-radius-s);
    overflow: hidden;

    @media (max-width: 767px) {
      width: 60px;
      height: 60px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    @media (max-width: 767px) {
      flex-direction: column;
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
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    line-height: 14px;
    vertical-align: bottom;
    opacity: 0.6;
  }

  &__right {
    text-align: right;
  }

  &__price {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 14px;
    vertical-align: bottom;
  }

  &__titleHeight {
    line-height: 20px;
  }
}
</style>
