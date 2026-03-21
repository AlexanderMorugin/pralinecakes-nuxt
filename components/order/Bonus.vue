<template>
  <div
    :class="['orderBonus', { orderBonus_active: cartStore.isUserBonusForPay }]"
  >
    <div v-if="!cartStore.isUserBonusForPay">
      <span class="orderBonus__accent">{{
        currencyFormater(userStore.user.user_bonus)
      }}</span>
      на вашем бонусном счету.
    </div>
    <span v-if="!cartStore.isUserBonusForPay"
      >Бонусами можно оплатить не более {{ PAY_USER_BONUS }}% заказа.</span
    >

    <div>
      <span class="orderBonus__accent">{{
        currencyFormater(cartStore.userBonusForPay)
      }}</span>

      {{
        cartStore.isUserBonusForPay
          ? "бонусов будут списаны."
          : "бонусов можно списать..."
      }}
    </div>

    <button
      :class="[
        'orderBonus__button',
        { orderBonus__button_active: cartStore.isUserBonusForPay },
      ]"
      @click="useBonusForPay"
    >
      {{
        cartStore.isUserBonusForPay ? "отменить списание" : "списать бонусы?"
      }}
    </button>
  </div>
</template>

<script setup>
import { PAY_USER_BONUS } from "~/utils/constants/info";

const userStore = useUserStore();
const cartStore = useCartStore();
// await cartStore.setUserBonusForPay();

// console.log(cartStore.userBonusForPay);

const useBonusForPay = () => {
  cartStore.useUserBonusForPay();
};
</script>

<style lang="scss" scoped>
.orderBonus {
  display: flex;
  flex-direction: column;
  gap: 12px;
  // border: 2px solid var(--black-primary);
  border-radius: var(--border-radius-xs);
  background: var(--border-primary);
  // font-family: "Montserrat-Regular", sans-serif;
  line-height: 22px;
  padding: 10px;
  margin-bottom: 20px;

  &_active {
    background: transparent;
  }

  &__accent {
    font-family: "Montserrat-SemiBold", sans-serif;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--green-primary);
    border-radius: var(--border-radius-xs);
    font-family: "Roboto-Regular", sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    // text-transform: uppercase;
    color: var(--black-primary);
    padding: 10px;

    &_active {
      background: var(--border-primary);
      color: var(--white-primary);
    }
  }
}
</style>
