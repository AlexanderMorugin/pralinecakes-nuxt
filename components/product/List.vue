<template>
  <WrapperSection>
    <ul class="productList">
      <li v-for="item in cakes" :key="item.id">
        <ProductListCard
          :image="item.image"
          :name="item.name"
          :description="item.description"
          :price="item.price"
          :weigth="item.weigth"
          :cartStatus="item.cartStatus"
          @addToCart="addToCart(item.id)"
        />
      </li>
    </ul>
  </WrapperSection>
</template>

<script setup>
const cakes = ref([
  {
    id: 1,
    image: "/images/cakes/blueberry-cake-1-500-333.webp",
    name: 'Торт «Воздушно-ореховый-ореховый-ореховый-ореховый»"',
    description:
      "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
    price: 1860,
    weigth: 1640,
    cartStatus: false,
  },
  {
    id: 2,
    image: "/images/cakes/banana-cake-1-500-333.webp",
    name: 'Торт «Воздушно-ореховый-ореховый-ореховый-ореховый»"',
    description:
      "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
    price: 1860,
    weigth: 1640,
    cartStatus: false,
  },
  {
    id: 3,
    image: "/images/cakes/almond-prune-cake-1-500-333.webp",
    name: 'Торт «Воздушно-ореховый-ореховый-ореховый-ореховый»"',
    description:
      "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
    price: 1860,
    weigth: 1640,
    cartStatus: false,
  },
  {
    id: 4,
    image: "/images/cakes/truffle-cake-1-500-333.webp",
    name: 'Торт «Воздушно-ореховый-ореховый-ореховый-ореховый»"',
    description:
      "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
    price: 1860,
    weigth: 1640,
    cartStatus: false,
  },
]);

const addToCart = (id) => {
  console.log("addToCart", id);

  cakes.value = cakes.value.map((item) =>
    item.id === id ? { ...item, cartStatus: true } : item
  );
};
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}
</style>
