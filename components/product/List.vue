<template>
  <WrapperSection>
    <ul class="productList">
      <li>
        <ProductListCard />
      </li>
      <li>
        <ProductListCard />
      </li>
      <li>
        <ProductListCard />
      </li>
      <li>
        <ProductListCard />
      </li>
    </ul>
  </WrapperSection>
</template>

<style lang="scss" scoped>
.productList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  // border: 1px solid red;

  @media (max-width: 1280px) {
    column-gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5px;
  }

  @media (max-width: 390px) {
    grid-template-columns: 1fr;
  }
}
</style>
