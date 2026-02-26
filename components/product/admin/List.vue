<template>
  <ul class="productAdminList">
    <li v-for="product in products" :key="product.id">
      <ProductListCard :product="product" />
    </li>
  </ul>
</template>

<script setup>
const { products } = defineProps(["products"]);
</script>

<style lang="scss" scoped>
.productAdminList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>
