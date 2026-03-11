<template>
  <div :class="['userCard', { userCard_admin: place === 'admin' }]">
    <span v-if="place === 'admin'">id: {{ user.id }}</span>
    <span class="userCard__title">Здравствуйте {{ user.user_name }}!</span>
    <span>Ваша почта: {{ user.user_email }}</span>
    <div>
      Бонусный счёт:
      <span class="userCard__title">{{
        user.user_bonus
          ? currencyFormater(user.user_bonus)
          : currencyFormater(0)
      }}</span>
    </div>
  </div>
</template>

<script setup>
const { user, place } = defineProps(["user", "place"]);
</script>

<style lang="scss" scoped>
.userCard {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &_admin {
    color: var(--black-primary);
  }

  &__title {
    font-size: 22px;
  }
}
</style>
