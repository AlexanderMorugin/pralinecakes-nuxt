<template>
  <button @click="$emit('cleanCart')" class="buttonCartClean">
    <WrapperText>Очистить корзину</WrapperText>
    <IconTrash class="buttonCartClean__icon" />
  </button>
</template>

<script setup>
const emit = defineEmits(["cleanCart"]);
</script>

<style lang="scss" scoped>
.buttonCartClean {
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0.6;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--white-primary);
  }
}
</style>
