<template>
  <NuxtLink :to="path" class="linkWithIcon">
    <IconPlus class="linkWithIcon__icon" />
    <span class="linkWithIcon__title">{{ title }}</span>
  </NuxtLink>
</template>

<script setup>
const { path, title } = defineProps(["path", "title"]);
</script>

<style lang="scss" scoped>
.linkWithIcon {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  background: var(--red-primary);
  border-radius: var(--border-radius-l);
  padding: 10px 20px 10px 14px;
  transition: 0.2s ease;

  &:hover {
    background: var(--red-secondary);
  }

  &__icon {
    fill: var(--white-primary);
  }

  &__title {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
  }
}
</style>
