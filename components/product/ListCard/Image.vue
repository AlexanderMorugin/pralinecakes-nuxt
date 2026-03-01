<template>
  <div class="productListCardImage">
    <img
      v-if="image"
      :src="image"
      :alt="alt"
      class="productListCardImage__pic"
    />
    <div v-else class="productListCardImage__noPic">
      <span class="productListCardImage__noPicText">Изображения нет</span>
    </div>
  </div>
</template>

<script setup>
const { image, alt } = defineProps(["image", "alt"]);
</script>

<style lang="scss" scoped>
.productListCardImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  background: var(--gradient-product-blue-primary);
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

  &__noPic {
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 30%;
  }

  &__noPicText {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 20px;
    color: var(--mask-white-primary);
    text-align: center;
  }
}
</style>
