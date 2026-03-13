<template>
  <UserListEmpty
    v-if="!userStore.userComments.length"
    title="Отзывы не найдены..."
    :place="place"
  />
  <UserCommentList v-else :comments="userStore.userComments" :place="place" />
</template>

<script setup>
const { place } = defineProps(["place"]);

const userStore = useUserStore();
await userStore.loadUserComments();

// console.log(userStore.userComments);
</script>

<!-- <style lang="scss" scoped></style> -->
