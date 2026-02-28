<template>
  <button
    type="button"
    :class="[
      'formButtonAdmin',
      { formButtonAdmin_right: name === 'edit' },
      { formButtonAdmin_left: name === 'undo' },
    ]"
    @click="emit('handleClick')"
  >
    <IconEdit v-if="name === 'edit'" class="formButtonAdmin__icon" />
    <IconUndo v-if="name === 'undo'" class="formButtonAdmin__icon" />
  </button>
</template>

<script setup>
const { name } = defineProps(["name"]);
const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formButtonAdmin {
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: var(--mask-blue-thirdly);
  border-radius: 50%;
  transition: 0.2s ease;

  &:hover {
    background: var(--red-secondary);
  }

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  &_right {
    right: 20px;

    @media (max-width: 767px) {
      right: 10px;
    }
  }

  &_left {
    right: 70px;

    @media (max-width: 767px) {
      right: 50px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--white-primary);

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
