<template>
  <UserListAdmin
    v-if="userStore.adminUsers.length"
    :users="userStore.adminUsers"
  />
  <ProductListEmpty v-else title="Клиенты не найдены..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const userStore = useUserStore();
await userStore.loadAdminUsers();
</script>
