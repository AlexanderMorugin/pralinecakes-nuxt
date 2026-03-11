<template>
  <div :class="['userCard', { userCard_admin: place === 'admin' }]">
    <span v-if="place === 'admin'">id: {{ user.id }}</span>
    <UserSubtitle :subtitle="`Здравствуйте ${user.user_name}!`" />
    <span>Почта: {{ user.user_email }}</span>
    <UserSubtitle
      :subtitle="`Бонусный счёт: ${
        user.user_bonus
          ? currencyFormater(user.user_bonus)
          : currencyFormater(0)
      }`"
    />
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
}
</style>
