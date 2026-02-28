<template>
  <WrapperPage>
    <TitlePage title="Пирожные" />
    <ProductList
      v-if="pastryStore.pastries.length"
      type="pastry"
      :products="pastryStore.pastries"
    />
    <ProductListEmpty v-else title="Продукция не найдена..." />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_NAME,
  SITE_AUTHOR,
  PASTRY_TITLE,
  PASTRY_DESCRIPTION,
  PASTRY_IMAGE,
} from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart"],
  layout: "main",
});

const route = useRoute();

const pastryStore = usePastryStore();
await pastryStore.loadPastries();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PASTRY_TITLE}`,
  description: `${PASTRY_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PASTRY_TITLE}`,
  ogDescription: `${PASTRY_DESCRIPTION}`,
  ogImage: `${PASTRY_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
