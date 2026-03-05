<template>
  <NuxtLink :to="`/admin/users/${user.id}`" class="userListCard">
    <span>{{ user.user_name }}</span>
    <span>{{ user.user_email }}</span>
    <span class="userListCard__bonus">{{
      user.user_bonus ? user.user_bonus : 0
    }}</span>
  </NuxtLink>
</template>

<script setup>
const { user } = defineProps(["user"]);
</script>

<style lang="scss" scoped>
.userListCard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: var(--deep-blue-thirdly);
  color: var(--white-primary);
  border-radius: var(--border-radius-xs);
  padding: 10px;
  transition: 0.2s ease;

  &:hover {
    background: var(--deep-blue-fourthly);
  }

  &__bonus {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
