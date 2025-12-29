<template>
  <div
    :class="[
      'productListCardBadge',
      { productListCardBadge_red: badgeStatus === 'Хит' },
      { productListCardBadge_green: badgeStatus === 'Новинка' },
    ]"
  >
    <span class="productListCardBadge__text">{{ badgeStatus }}</span>
  </div>
</template>

<script setup>
const { badgeStatus } = defineProps(["badgeStatus"]);
</script>

<style lang="scss" scoped>
.productListCardBadge {
  position: absolute;
  top: 18px;
  left: 0;
  z-index: 2;
  padding: 10px 20px;
  transform: translateX(0);
  animation: badge-bg 1s ease;

  &_red {
    background: var(--orange-primary);
  }

  &_green {
    background: var(--green-primary);
  }

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--black-primary);
    // transform: translateX(0);
    // animation: badge-text 1s ease;

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
}

@keyframes badge-bg {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

// @keyframes badge-text {
//   0% {
//     opacity: 0;
//     transform: translateX(-100%);
//   }
//   50% {
//     opacity: 0;
//     transform: translateX(-100%);
//   }
//   100% {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }
</style>
