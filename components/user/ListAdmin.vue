<template>
  <ul class="userListHead page-padding-x">
    <li class="userListHead__item">Имя</li>
    <li class="userListHead__item">Почта</li>
    <li class="userListHead__bonus">Бонус</li>
  </ul>
  <ul class="userList page-padding-x">
    <li v-for="user in users" :key="user.id">
      <UserListCard :user="user" />
    </li>
  </ul>
</template>

<script setup>
const { users } = defineProps(["users"]);
</script>

<style lang="scss" scoped>
.userListHead {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--deep-blue-thirdly);

  &__item {
    padding-left: 10px;
    padding-bottom: 10px;
  }
  &__bonus {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    padding-bottom: 10px;
  }
}
.userList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
