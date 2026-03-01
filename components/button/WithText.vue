<template>
  <button
    class="buttonWithText"
    :class="color === 'red' ? 'buttonWithText_red' : ''"
    @click="emit('handleClick')"
  >
    <span class="buttonWithText__text">{{ text }}</span>
  </button>
</template>

<script setup>
const { text, color } = defineProps(["text", "color"]);

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.buttonWithText {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: var(--mask-blue-thirdly);
  border-radius: var(--border-radius-xs);
  padding: 5px 15px;
  transition: 0.2s ease;

  &:hover {
    background: var(--green-fourthly);
  }

  &_red {
    background: var(--red-primary);

    &:hover {
      background: var(--red-secondary);
    }
  }

  &__text {
    font-family: "Roboto-Medium", sans-serif;
    font-size: 12px;
    color: var(--white-primary);
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
