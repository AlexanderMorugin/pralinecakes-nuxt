<template>
  <WrapperPage>
    <ProductCard :product="pastryStore.pastry[0]" />
  </WrapperPage>
</template>

<script setup>
import { SITE, SITE_NAME, SITE_AUTHOR } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart"],
  layout: "main",
});

const route = useRoute();
const pastryStore = usePastryStore();

await pastryStore.getPastry(route.params.slug);

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: pastryStore.pastry[0].meta_title,
  description: pastryStore.pastry[0].meta_description,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: pastryStore.pastry[0].meta_title,
  ogDescription: pastryStore.pastry[0].meta_description,
  ogImage: pastryStore.pastry[0].image_1_small,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
