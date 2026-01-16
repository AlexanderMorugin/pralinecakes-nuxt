<template>
  <div class="orderSum">
    <div class="orderSum__block text-price">
      <span>Сумма</span>
      <div class="line-dashed" />
      <span>{{ currencyFormater(cartStore.totalCartSum) }}</span>
    </div>
    <span class="orderSum__bonus">
      + {{ currencyFormater(cartStore.cartBonus) }} на ваш бонусный счет
    </span>

    <div class="line-solid" />

    <div>
      <span class="text-price">Выберите способ доставки</span>
      <div class="orderSum__delivery">
        <div class="orderSum__block text-price">
          <div class="orderSum__radioBox">
            <input
              type="radio"
              id="1"
              value="800"
              v-model="selectDelivery"
              class="orderSum__radio"
              checked
              @click="cartStore.setDeliveryCost(1)"
            />
            <label for="Курьер">Курьер</label>
          </div>
          <div class="line-dashed" />
          <span>{{ currencyFormater(cartStore.deliverySum) }}</span>
        </div>
        <div class="orderSum__comment">
          Бесплатная доставка от
          {{ currencyFormater(MIN_ORDER_SUM) }}
        </div>

        <div class="orderSum__block orderSum__block_second text-price">
          <div class="orderSum__radioBox">
            <input
              type="radio"
              id="2"
              value="0"
              v-model="selectDelivery"
              class="orderSum__radio"
              @click="cartStore.setDeliveryCost(0)"
            />
            <label for="Самовывоз">Самовывоз</label>
          </div>
          <div class="line-dashed" />
          <span>-{{ currencyFormater(cartStore.cartSamovyvozBonus) }}</span>
        </div>
      </div>
    </div>
    <div class="orderSum__bonus">
      + {{ SAMOVYVOZ_BONUS }}% дополнительная скидка
    </div>

    <div class="orderSum__block orderSum__total text-total-price">
      <span>Итого</span>
      <div class="line-dashed" />
      <span>{{ currencyFormater(cartStore.totalOrderSum) }}</span>
    </div>
  </div>
</template>

<script setup>
import {
  MIN_ORDER_SUM,
  DELIVERY_SUM,
  SAMOVYVOZ_BONUS,
} from "~/utils/constants/info";

const selectDelivery = ref(DELIVERY_SUM);

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.orderSum {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  &__block {
    display: flex;
    justify-content: space-between;

    &_second {
      padding-top: 20px;
    }
  }

  &__bonus {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--green-primary);
    text-align: right;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }

  &__total {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 22px;
    color: var(--white-primary);
    letter-spacing: 1px;
    padding-top: 40px;
  }

  &__comment {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 28px;
    color: var(--mask-white-primary);
    margin-left: 26px;
    padding-top: 5px;
  }

  &__delivery {
    padding: 20px 0 0 20px;
  }

  &__radioBox {
    display: flex;
    gap: 10px;
  }

  &__radio {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
}
</style>
