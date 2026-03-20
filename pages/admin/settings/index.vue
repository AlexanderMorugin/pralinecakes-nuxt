<template>
  <!-- <FormAdminSettings /> -->
  <div class="page-padding-x">
    <FormAdminSettings
      v-if="userStore.user && userStore.user.user_role === 'admin'"
    />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const userStore = useUserStore();
const adminSettingStore = useAdminSettingStore();
await adminSettingStore.loadAdminSettings();
</script>
