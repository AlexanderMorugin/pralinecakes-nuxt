<template>
  <button @click="$emit('toggleOption')" class="buttonProductCardOptionsMobile">
    <h2
      :class="[
        'buttonProductCardOptionsMobile__title',
        { buttonProductCardOptionsMobile__title_active: buttonRef },
      ]"
    >
      {{ title }}
    </h2>
    <IconArrowChevron
      :class="[
        'buttonProductCardOptionsMobile__icon',
        { buttonProductCardOptionsMobile__icon_active: buttonRef },
      ]"
    />
  </button>
</template>

<script setup>
const emit = defineEmits(["toggleOption"]);
const { title, buttonRef } = defineProps(["title", "buttonRef"]);
</script>

<style lang="scss" scoped>
.buttonProductCardOptionsMobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;

  &__title {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
    letter-spacing: 2px;
    opacity: 0.8;

    &_active {
      color: var(--orange-primary);
      opacity: 1;
    }
  }

  &__icon {
    width: 26px;
    height: 26px;
    fill: var(--white-primary);
    opacity: 0.8;
    transform: rotate(90deg);
    transition: 0.5s ease;

    &_active {
      transform: rotate(270deg);
    }
  }
}
</style>
