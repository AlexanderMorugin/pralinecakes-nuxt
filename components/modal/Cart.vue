<template>
  <CartEmpty v-if="!cartStore.cart.length" />
  <div v-else>{{ cartStore.cart }}</div>
</template>

<script setup>
const cartStore = useCartStore();
</script>
