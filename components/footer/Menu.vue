<template>
  <nav class="footerMenu">
    <NuxtLink
      v-for="item in menu"
      :to="item.route"
      :key="item.id"
      class="footerMenu__link"
      >{{ item.title }}</NuxtLink
    >
  </nav>
</template>

<script setup>
import { menu } from "~/utils/constants/menu";
</script>

<style lang="scss" scoped>
.footerMenu {
  display: flex;
  flex-direction: column;
  gap: 12px;

  // width: fit-content;
  // opacity: 1;

  &__link {
    width: fit-content;
    font-size: 18px;
    line-height: 26px;
    color: var(--white-primary);
    border-bottom: 1px dashed var(--mask-white-primary);
    transition: 0.1s ease;

    &:hover {
      color: var(--red-secondary);
      border-bottom: 1px dashed var(--red-primary);
    }
  }
}
</style>
