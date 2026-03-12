<template>
  <div class="orderBonus">
    <div>
      <span class="orderBonus__accent">{{
        currencyFormater(userStore.user.user_bonus)
      }}</span>
      на вашем бонусном счету.
    </div>
    <span>Бонусами можно оплатить не более {{ PAY_USER_BONUS }}% заказа.</span>
    <span
      >Для этого нужно позвонить или написать нам и сообщить номер вашего
      заказа.</span
    >
  </div>
</template>

<script setup>
import { PAY_USER_BONUS } from "~/utils/constants/info";

const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.orderBonus {
  display: flex;
  flex-direction: column;
  gap: 12px;
  // border: 2px solid var(--border-primary);
  border-radius: var(--border-radius-l);
  background: var(--border-primary);
  // font-family: "Montserrat-Regular", sans-serif;
  line-height: 22px;
  padding: 10px;

  &__accent {
    font-family: "Montserrat-SemiBold", sans-serif;
  }
}
</style>
