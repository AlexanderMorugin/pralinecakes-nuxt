<template>
  <WrapperPage class="page-padding-x">
    <ul v-if="type === 'cakes'" class="productList">
      <li v-for="product in cakesStore.cakes" :key="product.id">
        <ProductListCard :product="product" />
      </li>
    </ul>
  </WrapperPage>
</template>

<script setup>
const { type } = defineProps(["type"]);
const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.productList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;

  @media (max-width: 1600px) {
    column-gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    column-gap: 10px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}
</style>
