<template>
  <button
    type="button"
    :class="['formButtonRoll', { formButtonRoll_open: isFormOpen }]"
    @click="emit('handleClick')"
  >
    <IconArrowIos class="formButtonRoll__icon" />
  </button>
</template>

<script setup>
const { isFormOpen } = defineProps(["isFormOpen"]);
const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formButtonRoll {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: rotate(90deg);
  transition: 0.5s ease;
  z-index: 1;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    right: 10px;
    bottom: 13px;
  }

  &_open {
    transform: rotate(270deg);
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--deep-blue-primary);

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
