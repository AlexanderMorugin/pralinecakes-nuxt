<template>
  <WrapperPage>
    <ProductCard :product="clientPastryStore.clientPastry[0]" />
  </WrapperPage>
</template>

<script setup>
import { SITE, SITE_NAME, SITE_AUTHOR } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart", "auth"],
  layout: "main",
});

const route = useRoute();
const clientPastryStore = useClientPastryStore();
await clientPastryStore.getClientPastry(route.params.slug);

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: clientPastryStore.clientPastry[0].meta_title,
  description: clientPastryStore.clientPastry[0].meta_description,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: clientPastryStore.clientPastry[0].meta_title,
  ogDescription: clientPastryStore.clientPastry[0].meta_description,
  ogImage: clientPastryStore.clientPastry[0].image_1_small,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
