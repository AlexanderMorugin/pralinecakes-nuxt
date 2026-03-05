<template>
  <div class="userCard">{{ user }}</div>
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
