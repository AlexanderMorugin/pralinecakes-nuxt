<template>
  <WrapperPage>
    <TitlePage title="Корзина" />
    <CartEmpty v-if="!cartStore.cart.length" />

    <Cart v-else />
  </WrapperPage>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cartStore = useCartStore();
</script>
