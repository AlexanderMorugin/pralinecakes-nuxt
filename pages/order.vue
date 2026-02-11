<template>
  <WrapperPage>
    <FormOrderDelete />

    <OrderSuccess />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_NAME,
  SITE_AUTHOR,
  ORDER_TITLE,
  ORDER_DESCRIPTION,
  ORDER_IMAGE,
} from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart"],
  layout: "main",
});

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${ORDER_TITLE}`,
  description: `${ORDER_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${ORDER_TITLE}`,
  ogDescription: `${ORDER_DESCRIPTION}`,
  ogImage: `${ORDER_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
