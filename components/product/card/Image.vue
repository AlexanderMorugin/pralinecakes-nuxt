<template>
  <section class="productCardImage">
    <img :src="image" :alt="name" class="productCardImage__pic" />
  </section>
</template>

<script setup>
const { image, name } = defineProps(["image", "name"]);
</script>

<style lang="scss" scoped>
.productCardImage {
  width: 100%;
  // height: 450px;
  // animation: slide-to-top 0.6s ease-in-out;
  overflow: hidden;

  // @media (max-width: 1600px) {
  //   height: 300px;
  // }

  // @media (max-width: 767px) {
  //   height: 260px;
  // }

  &__pic {
    width: 100%;
    // height: 450px;
    object-fit: cover;

    // @media (max-width: 1600px) {
    //   height: 300px;
    // }

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
