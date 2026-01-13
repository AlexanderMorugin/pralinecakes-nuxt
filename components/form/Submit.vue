<template>
  <button
    type="submit"
    :class="['buttonSubmit', { buttonSubmit_active: !isFromEmpty && !isValid }]"
    @click="$emit('handleClick')"
  >
    <LoaderButton v-if="isLoading" />
    <span v-else class="buttonSubmit__title">{{ title }}</span>
  </button>
</template>

<script setup>
const { title, isFromEmpty, isValid, isLoading } = defineProps([
  "title",
  "isFromEmpty",
  "isValid",
  "isLoading",
]);

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.buttonSubmit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: var(--mask-white-primary);
  border-radius: var(--border-radius-xxl);
  transition: 0.2s ease;
  cursor: default;

  @media (max-width: 1600px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  &_active {
    background: var(--red-primary);
    cursor: pointer;

    &:hover {
      background: var(--red-secondary);
    }
  }

  &__title {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
  }
}
</style>
