<template>
  <WrapperPage>
    <TitlePage title="Торты" />
    <ProductList v-if="cakesStore.cakes.length" type="cakes" />
    <ProductListEmpty v-else />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_NAME,
  SITE_AUTHOR,
  CAKES_TITLE,
  CAKES_DESCRIPTION,
  CAKES_IMAGE,
} from "@/utils/constants/meta";

definePageMeta({
  layout: "main",
});

const route = useRoute();

const cakesStore = useCakesStore();
await cakesStore.loadCakes();

const commentsStore = useCommentsStore();
await commentsStore.loadComments();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${CAKES_TITLE}`,
  description: `${CAKES_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${CAKES_TITLE}`,
  ogDescription: `${CAKES_DESCRIPTION}`,
  ogImage: `${CAKES_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
