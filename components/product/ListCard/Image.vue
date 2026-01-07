<template>
  <div class="productListCardImage">
    <img :src="image" :alt="name" class="productListCardImage__pic" />
  </div>
</template>

<script setup>
const { image, name } = defineProps(["image", "name"]);
</script>

<style lang="scss" scoped>
.productListCardImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  animation: slide-to-top 0.6s ease-in-out;
  overflow: hidden;

  @media (max-width: 1600px) {
    height: 300px;
  }

  @media (max-width: 767px) {
    height: 260px;
  }

  &__pic {
    width: 100%;
    height: 450px;
    object-fit: cover;

    @media (max-width: 1600px) {
      height: 300px;
    }

    @media (max-width: 767px) {
      height: 260px;
    }
  }
}
</style>
