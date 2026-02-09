<template>
  <WrapperPage>
    <TitlePage title="Корзина" />
    <CartEmpty v-if="!cartStore.cart.length" />

    <Cart v-else />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_NAME,
  SITE_AUTHOR,
  CART_TITLE,
  CART_DESCRIPTION,
  CART_IMAGE,
} from "@/utils/constants/meta";

definePageMeta({
  layout: "main",
});

const route = useRoute();
const cartStore = useCartStore();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${CART_TITLE}`,
  description: `${CART_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${CART_TITLE}`,
  ogDescription: `${CART_DESCRIPTION}`,
  ogImage: `${CART_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
