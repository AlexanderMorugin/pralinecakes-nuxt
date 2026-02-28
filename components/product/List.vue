<template>
  <WrapperPage
    :class="
      place === 'admin' ? 'page-padding-x page-padding-y' : 'page-padding-x'
    "
  >
    <ul
      v-if="type === 'cakes' || type === 'pastry'"
      :class="['productList', { productList_admin: place === 'admin' }]"
    >
      <li v-for="product in products" :key="product.id">
        <ProductListCard :product="product" :place="place" />
      </li>
    </ul>
  </WrapperPage>
</template>

<script setup>
const { type, products, place } = defineProps(["type", "products", "place"]);
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

  &_admin {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;

    @media (max-width: 1400px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      column-gap: 10px;
    }
  }
}
</style>
