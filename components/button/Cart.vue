<template>
  <button v-if="quantity < 1" class="buttonCart" @click="$emit('increment')">
    <span class="buttonCart__cartText">В корзину</span>
  </button>

  <NuxtLink to="/cart" v-else class="buttonCart buttonCart_active">
    <span class="buttonCart__cartText buttonCart__cartText_active"
      >В корзине</span
    >
  </NuxtLink>
</template>

<script setup>
const { quantity } = defineProps(["quantity"]);
const emit = defineEmits(["increment"]);
</script>

<style lang="scss" scoped>
.buttonCart {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;
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

  &_active {
    background: var(--green-primary);
    transition: 0.2s ease;

    &:hover {
      background: var(--green-secondary);
    }
  }

  &__cartText {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
    transform: translateY(0);
    animation: cart-text 0.5s ease;

    &_active {
      color: var(--black-primary);
    }
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
