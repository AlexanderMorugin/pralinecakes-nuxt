<template>
  <div class="orderBonus">
    Чтобы получить бонус {{ currencyFormater(bonus) }} за заказ, необходимо
    зарегистрироваться.
  </div>
</template>

<script setup>
const { bonus } = defineProps(["bonus"]);
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
  margin-top: 20px;

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
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--black-primary);
    padding: 10px;

    &_active {
      background: var(--border-primary);
      color: var(--white-primary);
    }
  }
}
</style>
