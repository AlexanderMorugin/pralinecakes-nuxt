<template>
  <UserListAdmin v-if="userStore.users.length" :users="userStore.users" />
  <ProductListEmpty v-else title="Клиенты не найдены..." place="admin" />
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const userStore = useUserStore();
await userStore.loadUsers();

// console.log(userStore.users);
</script>
