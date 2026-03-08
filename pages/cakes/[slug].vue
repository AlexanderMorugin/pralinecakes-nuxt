<template>
  <WrapperPage>
    <ProductCard :product="cakesStore.cake[0]" />
  </WrapperPage>
</template>

<script setup>
import { SITE, SITE_NAME, SITE_AUTHOR } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart"],
  layout: "main",
});

const route = useRoute();
const cakesStore = useCakesStore();

await cakesStore.getCake(route.params.slug);

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: cakesStore.cake[0].meta_title,
  description: cakesStore.cake[0].meta_description,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: cakesStore.cake[0].meta_title,
  ogDescription: cakesStore.cake[0].meta_description,
  ogImage: cakesStore.cake[0].image_1_small,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
