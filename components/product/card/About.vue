<template>
  <div class="productCardAbout">
    <WrapperText>{{ product.description_one }}</WrapperText>
    <WrapperText>{{ product.description_two }}</WrapperText>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardAbout {
  display: flex;
  flex-direction: column;
  gap: 40px;
  animation: slide-to-top 0.5s ease-in-out;

  @media (max-width: 767px) {
    padding: 10px 10px 20px 10px;
  }
}
</style>
