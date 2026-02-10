<template>
  <div class="productCardAbout">
    <div>
      <WrapperText v-if="product.description_one">{{
        product.description_one
      }}</WrapperText>
      <WrapperText v-else>Описания пока нет.</WrapperText>
    </div>
    <WrapperText v-if="product.description_two">{{
      product.description_two
    }}</WrapperText>
    <WrapperText v-if="product.description_three">{{
      product.description_three
    }}</WrapperText>
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
