<template>
  <div class="cart page-padding-x">
    <CartList />
    <OrderBlock />
  </div>
</template>

<!-- <script setup>
// const { comment } = defineProps(["comment"]);
</script> -->

<style lang="scss" scoped>
.cart {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;

  // border: 1px solid red;

  @media (max-width: 1600px) {
    gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}
</style>
