<template>
  <WrapperSection>
    <ul class="productList">
      <li v-for="item in cakesStore.cakes" :key="item.id">
        <ProductListCard
          :item="item"
          @increment="cakesStore.increment(item.id)"
          @decrement="cakesStore.decrement(item.id)"
        />
      </li>
    </ul>
  </WrapperSection>
</template>

<script setup>
const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.productList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  // border: 1px solid red;

  @media (max-width: 1600px) {
    column-gap: 10px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    // column-gap: 5px;
  }

  @media (max-width: 767px) {
    // grid-template-columns: repeat(2, 1fr);
    column-gap: 5px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}
</style>
