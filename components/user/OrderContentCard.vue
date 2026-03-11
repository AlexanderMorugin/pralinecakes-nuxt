<template>
  <div class="userOrderContentCard">
    <div class="userOrderContentCard__imageBox">
      <img
        :src="item.image"
        :alt="item.title"
        class="userOrderContentCard__image"
      />
    </div>

    <div class="userOrderContentCard__block">
      <div class="userOrderContentCard__details">
        <div class="userOrderContentCard__title">
          <span
            class="userOrderContentCard__accent userOrderContentCard__titleHeight"
            >{{ item.title }}</span
          >
          <span
            class="userOrderContentCard__noAccent userOrderContentCard__titleHeight"
            >{{ item.weight }} гр</span
          >
        </div>

        <span class="userOrderContentCard__accent userOrderContentCard__count"
          >{{ item.count }} шт</span
        >
      </div>

      <div class="userOrderContentCard__prices">
        <span
          class="userOrderContentCard__noAccent userOrderContentCard__right"
          >{{ item.discount ? `Цена со скидкой` : "Цена без скидки" }}</span
        >
        <span
          class="userOrderContentCard__noAccent userOrderContentCard__right"
          >{{
            item.discount
              ? `${currencyFormater(item.discount_price)}`
              : `${currencyFormater(item.price)}`
          }}</span
        >
      </div>

      <div class="userOrderContentCard__prices">
        <span class="userOrderContentCard__noAccent userOrderContentCard__right"
          >Сумма</span
        >
        <span class="userOrderContentCard__price userOrderContentCard__right">{{
          item.discount
            ? `${currencyFormater(item.discount_price * item.count)}`
            : `${currencyFormater(item.price * item.count)}`
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { item } = defineProps(["item"]);
</script>

<style lang="scss" scoped>
.userOrderContentCard {
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 10px;
  border-top: 1px solid var(--border-primary);
  border-bottom: 1px solid var(--border-primary);
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 60px 1fr;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__details {
    display: grid;
    grid-template-columns: 1fr 30%;
    column-gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 5px;
    }
  }

  &__prices {
    display: grid;
    grid-template-columns: 1fr 30%;
    column-gap: 10px;
    row-gap: 10px;
    padding-top: 5px;
  }

  &__imageBox {
    width: 100px;
    height: 80px;
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
    font-size: 12px;
    line-height: 14px;
    vertical-align: bottom;
  }

  &__right {
    text-align: right;
  }

  &__price {
    font-size: 14px;
    line-height: 14px;
    vertical-align: bottom;
  }

  &__titleHeight {
    line-height: 20px;
  }
}
</style>
