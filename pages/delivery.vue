<template>
  <WrapperPage>
    <TitlePage title="Доставка" />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_NAME,
  SITE_AUTHOR,
  DELIVERY_TITLE,
  DELIVERY_DESCRIPTION,
  DELIVERY_IMAGE,
} from "@/utils/constants/meta";

definePageMeta({
  layout: "main",
});

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${DELIVERY_TITLE}`,
  description: `${DELIVERY_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${DELIVERY_TITLE}`,
  ogDescription: `${DELIVERY_DESCRIPTION}`,
  ogImage: `${DELIVERY_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
