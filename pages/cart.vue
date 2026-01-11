<template>
  <!-- <WrapperPadding> -->
  <WrapperPage>
    <TitlePage title="Корзина" />
    <CartEmpty v-if="!cartStore.cart.length" />

    <Cart v-else />
  </WrapperPage>
  <!-- </WrapperPadding> -->
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cartStore = useCartStore();
</script>
