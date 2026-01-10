<template>
  <button class="buttonOrder" @click="$emit('addOrder')">
    <span class="buttonOrder__title">{{ title }}</span>
  </button>
</template>

<script setup>
const { title } = defineProps(["title"]);
const emit = defineEmits(["addOrder"]);
</script>

<style lang="scss" scoped>
.buttonOrder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: var(--red-primary);
  border-radius: var(--border-radius-xs);
  transition: 0.2s ease;

  &:hover {
    background: var(--red-secondary);
  }

  @media (max-width: 1600px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  &__title {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
    // transform: translateY(0);
    // animation: cart-text 0.5s ease;
  }
}

// @keyframes cart-text {
//   0% {
//     opacity: 0;
//     transform: translateY(100%);
//   }
//   50% {
//     opacity: 0;
//     transform: translateY(100%);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
</style>
