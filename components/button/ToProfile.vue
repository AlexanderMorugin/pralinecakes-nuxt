<template>
  <NuxtLink
    :to="
      user.user_role === 'admin'
        ? '/admin'
        : user.user_role === 'manager'
          ? '/admin'
          : '/profile'
    "
    class="buttonToProfile"
    @click="$emit('closeModal')"
  >
    <IconLogin class="buttonToProfile__icon" />
    <span class="buttonToProfile__text">{{ text }}</span>
  </NuxtLink>
</template>

<script setup>
const { text, user } = defineProps(["text", "user"]);

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.buttonToProfile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  background: var(--red-primary);
  border-radius: var(--border-radius-xs);
  padding: 5px;
  transition: 0.2s ease;

  &:hover {
    background: var(--red-secondary);
  }

  @media (max-width: 767px) {
    gap: 5px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--white-primary);
  }

  &__text {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
