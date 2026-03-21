<template>
  <ul class="footerPhone">
    <li v-for="item in phones" :key="item.id">
      <a :href="item.link" class="footerPhone__link">{{ item.number }}</a>
    </li>
  </ul>
</template>

<script setup>
import { phones } from "~/utils/constants/phone";
</script>

<style lang="scss" scoped>
.footerPhone {
  display: flex;
  flex-direction: column;
  gap: 12px;

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
