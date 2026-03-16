<template>
  <UserListEmpty
    v-if="!adminUserStore.adminUserComments.length"
    title="Отзывы не найдены..."
    :place="place"
  />
  <UserCommentList
    v-else
    :comments="adminUserStore.adminUserComments"
    :place="place"
  />
</template>

<script setup>
const { place, user } = defineProps(["place", "user"]);

const adminUserStore = useAdminUserStore();
await adminUserStore.loadAdminUserComments();
</script>
