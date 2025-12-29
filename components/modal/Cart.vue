<template>
  <CartEmpty v-if="!cartStore.cart.length" />
</template>

<script setup>
const cartStore = useCartStore();
</script>
