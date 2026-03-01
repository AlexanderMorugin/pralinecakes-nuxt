<template>
  <button @click="$emit('cleanCart')" class="buttonCartClean">
    <span v-if="title" class="buttonCartClean__text">{{ title }}</span>
    <IconTrash class="buttonCartClean__icon" />
  </button>
</template>

<script setup>
const { title } = defineProps(["title"]);
const emit = defineEmits(["cleanCart"]);
</script>

<style lang="scss" scoped>
.buttonCartClean {
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.6;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &__text {
    // font-family: "Montserrat-Regular", sans-serif;
    // font-size: 16px;
    letter-spacing: 1px;
    color: var(--white-primary);

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--white-primary);

    @media (max-width: 576px) {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
