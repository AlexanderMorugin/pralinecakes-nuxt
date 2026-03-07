<template>
  <div class="userCard">
    <span>id: {{ user.id }}</span>
    <span>user_name: {{ user.user_name }}</span>
    <span>user_email: {{ user.user_email }}</span>
  </div>
</template>

<script setup>
const { user } = defineProps(["user"]);
</script>

<style lang="scss" scoped>
.userCard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--black-primary);
}
</style>
