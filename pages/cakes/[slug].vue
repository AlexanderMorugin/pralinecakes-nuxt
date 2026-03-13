<template>
  <WrapperPage>
    <ProductCard :product="clientCakeStore.clientCake[0]" />
  </WrapperPage>
</template>

<script setup>
import { SITE, SITE_NAME, SITE_AUTHOR } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart", "auth"],
  layout: "main",
});

const route = useRoute();
const clientCakeStore = useClientCakeStore();
await clientCakeStore.getClientCake(route.params.slug);

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: clientCakeStore.clientCake[0].meta_title,
  description: clientCakeStore.clientCake[0].meta_description,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: clientCakeStore.clientCake[0].meta_title,
  ogDescription: clientCakeStore.clientCake[0].meta_description,
  ogImage: clientCakeStore.clientCake[0].image_1_small,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
