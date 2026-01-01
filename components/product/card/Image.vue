<template>
  <section class="productCardImage">
    <img
      :src="product.imageCardOne"
      :alt="product.name"
      class="productCardImage__pic"
    />
  </section>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardImage {
  width: 100%;
  // height: 100%;
  // border-radius: var(--border-radius-m);
  border: 1px solid red;
  overflow: hidden;

  // @media (max-width: 1280px) {
  //   height: fit-content;
  // }

  // @media (max-width: 1024px) {
  //   height: 60%;
  // }
  // @media (max-width: 1600px) {
  //   height: 300px;
  // }

  // @media (max-width: 767px) {
  //   height: 260px;
  // }

  &__pic {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 1280px) {
      height: auto;
    }

    // @media (max-width: 767px) {
    //   height: 260px;
    // }
  }
}

// @keyframes slide-to-top {
//   0% {
//     opacity: 0;
//     transform: scale(1) translateY(50%);
//   }
//   50% {
//     opacity: 0;
//     transform: scale(1) translateY(50%);
//   }
//   100% {
//     opacity: 1;
//     transform: scale(1) translateY(0);
//   }
// }
</style>
