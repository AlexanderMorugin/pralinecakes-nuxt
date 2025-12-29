<template>
  <WrapperPadding>
    <TitlePage title="Корзина" />
    <CartEmpty v-if="!cartStore.cart.length" />
  </WrapperPadding>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cartStore = useCartStore();
</script>
