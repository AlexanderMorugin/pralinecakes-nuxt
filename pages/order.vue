<template>
  <WrapperPage>
    <ClientOnly>
      <LazyOrderSuccess />
    </ClientOnly>
  </WrapperPage>
</template>

<script setup>
import { ORDER_TITLE, ORDER_DESCRIPTION } from "@/utils/constants/meta";

definePageMeta({
  middleware: "cart",
  layout: "main",
});

useHead({
  title: ORDER_TITLE,
  meta: [{ name: "description", content: ORDER_DESCRIPTION }],
});
</script>
