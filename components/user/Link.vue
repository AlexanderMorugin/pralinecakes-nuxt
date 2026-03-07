<template>
  <div class="userLink">
    <span>{{ userStore.user }}</span>
    <NuxtLink
      :to="
        userStore.user.user_role === 'admin'
          ? '/admin'
          : userStore.user.user_role === 'manager'
            ? '/admin'
            : '/profile'
      "
      class="userLink"
      @click="$emit('closeModal')"
      >Go >></NuxtLink
    >
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.userLink {
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: var(--white-primary);
}
</style>
