<template>
  <WrapperPage>
    <TitlePage title="Корзина" />

    <ClientOnly>
      <LazyCartEmpty
        v-if="!cartStore.cart.length"
        title="Ваша корзина пуста."
      />
      <LazyCartMain v-else />
    </ClientOnly>
  </WrapperPage>
</template>

<script setup>
import { CART_TITLE, CART_DESCRIPTION } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart"],
  layout: "main",
});

const cartStore = useCartStore();
await cartStore.setCart();

useHead({
  title: CART_TITLE,
  meta: [{ name: "description", content: CART_DESCRIPTION }],
});
</script>
