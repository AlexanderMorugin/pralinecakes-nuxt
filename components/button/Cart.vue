<template>
  <button
    :class="['buttonCart', { buttonCart_active: cartStatus }]"
    @click="$emit('addToCart')"
  >
    <span class="buttonCart__cartText">{{
      cartStatus ? "В корзине" : "В корзину"
    }}</span>
  </button>
</template>

<script setup>
const { cartStatus } = defineProps(["cartStatus"]);
const emit = defineEmits(["addToCart"]);
</script>

<style lang="scss" scoped>
.buttonCart {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;
  background: var(--button-blue-primary);
  border-radius: var(--border-radius-xs);

  @media (max-width: 1600px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  &_active {
    background: var(--orange-secondary);
  }

  &__cartText {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
  }
}
</style>
