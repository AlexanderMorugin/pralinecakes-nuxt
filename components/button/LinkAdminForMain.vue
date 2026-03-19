<template>
  <NuxtLink :to="path" class="linkWithIcon">
    <IconCartImg v-if="type === 'orders'" class="linkWithIcon__icon" />
    <IconAccount v-if="type === 'users'" class="linkWithIcon__icon" />
    <IconComment v-if="type === 'comments'" class="linkWithIcon__icon" />
    <IconPastry v-if="type === 'pastry'" class="linkWithIcon__icon" />
    <IconCake v-if="type === 'cakes'" class="linkWithIcon__icon" />
    <IconEdit v-if="type === 'info'" class="linkWithIcon__icon" />
    <span class="linkWithIcon__title">{{ title }}</span>
  </NuxtLink>
</template>

<script setup>
const { type, path, title } = defineProps(["type", "path", "title"]);
</script>

<style lang="scss" scoped>
.linkWithIcon {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100px;
  background: var(--deep-blue-fourthly);
  border-radius: var(--border-radius-l);
  padding: 10px 20px 10px 14px;
  transition: 0.2s ease;

  @media (max-width: 767px) {
    height: 60px;
  }

  &:hover {
    background: var(--deep-blue-thirdly);
  }

  &__icon {
    width: 48px;
    height: 48px;
    fill: var(--white-primary);

    @media (max-width: 767px) {
      width: 32px;
      height: 32px;
    }
  }

  &__title {
    // font-family: "Roboto-Regular", sans-serif;
    font-size: 24px;
    color: var(--white-primary);
    letter-spacing: 4px;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}
</style>
