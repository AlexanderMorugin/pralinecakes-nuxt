<template>
  <div class="cart">
    <CartList />
    <OrderBlock />
  </div>
</template>

<script setup>
// const { comment } = defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.cart {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;

  @media (max-width: 1600px) {
    gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}
</style>
