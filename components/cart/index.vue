<template>
  <section class="cart">
    <CartList />
    <div class="cartOrder">Оформление заказа</div>
  </section>
</template>

<script setup>
const { comment } = defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.cart {
  display: grid;
  grid-template-columns: 1fr 40%;
  column-gap: 40px;

  .cartOrder {
    height: 300px;
    // border: 1px solid red;
  }
}
</style>
