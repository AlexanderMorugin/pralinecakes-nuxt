<template>
  <UserListAdmin
    v-if="adminUserStore.adminUsers"
    :users="adminUserStore.adminUsers"
  />
  <ProductListEmpty v-else title="Клиенты не найдены..." place="admin" />
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const adminUserStore = useAdminUserStore();
await adminUserStore.loadAdminUsers();
</script>
