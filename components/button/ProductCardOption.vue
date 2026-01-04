<template>
  <button @click="$emit('toggleOption')" class="buttonProductCardOptions">
    <div
      :class="[
        'buttonProductCardOptions__line',
        { buttonProductCardOptions__line_active: buttonRef },
      ]"
    />
    <h2
      :class="[
        'buttonProductCardOptions__title',
        { buttonProductCardOptions__title_active: buttonRef },
      ]"
    >
      {{ title }}
    </h2>
  </button>
</template>

<script setup>
const emit = defineEmits(["toggleOption"]);
const { title, buttonRef } = defineProps(["title", "buttonRef"]);
</script>

<style lang="scss" scoped>
.buttonProductCardOptions {
  position: relative;
  height: 32px;

  &__line {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: var(--red-primary);
    transition: 0.15s cubic-bezier(0.55, 0, 0.1, 1);
    transform: translateX(-100%);
    opacity: 0;

    &_active {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &__title {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;
    opacity: 0.8;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0;
    }

    &_active {
      opacity: 1;
    }
  }
}
</style>
