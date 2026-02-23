<template>
  <WrapperPage>
    <ClientOnly>
      <LazyCartEmpty v-if="!cartStore.cart.length" title="Ваш заказ в пути." />
      <LazyOrderSuccess v-else />
    </ClientOnly>
  </WrapperPage>
</template>

<script setup>
import { ORDER_TITLE, ORDER_DESCRIPTION } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart"],
  layout: "main",
});

const cartStore = useCartStore();
await cartStore.setCart();

useHead({
  title: ORDER_TITLE,
  meta: [{ name: "description", content: ORDER_DESCRIPTION }],
});
</script>
