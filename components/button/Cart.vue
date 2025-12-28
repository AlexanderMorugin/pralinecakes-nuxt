<template>
  <button v-if="quantity < 1" class="buttonCart" @click="$emit('increment')">
    <span class="buttonCart__cartText">В корзину</span>
  </button>

  <NuxtLink to="/cart" v-else class="buttonCart buttonCart_active">
    <span class="buttonCart__cartText">В корзине</span>
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
    background: var(--gradient-button-blue-primary);

    &:hover {
      background: var(--deep-blue-thirdly);
    }
  }

  &__cartText {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
  }
}
</style>
