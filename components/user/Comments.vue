<template>
  <UserListEmpty
    v-if="!userStore.adminUserComments.length"
    title="Отзывы не найдены..."
    :place="place"
  />
  <UserCommentList
    v-else
    :comments="userStore.adminUserComments"
    :place="place"
  />
</template>

<script setup>
const { place, user } = defineProps(["place", "user"]);

const userStore = useUserStore();
await userStore.loadAdminUserComments();
</script>
