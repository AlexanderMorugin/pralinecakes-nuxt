<template>
  <button
    type="submit"
    :class="['buttonSubmit', { buttonSubmit_active: !isFromEmpty && !isValid }]"
  >
    <span class="buttonSubmit__title">{{ title }}</span>
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
  border-radius: var(--border-radius-xs);
  transition: 0.2s ease;

  @media (max-width: 1600px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  &_active {
    background: var(--red-primary);

    &:hover {
      background: var(--red-secondary);
    }
  }

  // @media (max-width: 767px) {
  //   width: 100%;
  // }

  // &_active {
  //   background: var(--green-primary);
  //   transition: 0.2s ease;

  //   &:hover {
  //     background: var(--green-secondary);
  //   }
  // }

  &__title {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
    transform: translateY(0);
    animation: cart-text 0.5s ease;

    // &_active {
    //   color: var(--black-primary);
    // }
  }
}

@keyframes cart-text {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
