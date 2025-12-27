<template>
  <button
    :class="['buttonCart', { buttonCart_active: cartStatus }]"
    @click="$emit('addToCart')"
  >
    <span class="buttonCart__cartText">{{
      cartStatus ? "В корзине" : "В корзину"
    }}</span>
    <IconCart class="buttonCart__cartIcon" />
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
  width: 100%;
  height: 60px;
  background: var(--button-blue-primary);
  border-radius: var(--border-radius-xs);

  @media (max-width: 1600px) {
    height: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  &_active {
    background: var(--orange-secondary);
  }

  &__cartIcon {
    width: 24px;
    height: 24px;
    fill: var(--white-primary);
    // transition: 0.25s ease;
  }

  &__cartText {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
  }
}

// .productListCard__cartButton:hover .productListCard__cartText {
//   opacity: 1;
//   transform: translateX(0);
// }

// .productListCard__cartButton:hover .productListCard__cartIcon {
//   fill: var(--orange-primary);
// }
</style>
