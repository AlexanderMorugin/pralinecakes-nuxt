<template>
  <WrapperPage>
    <TitlePage title="О компании" />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_NAME,
  SITE_AUTHOR,
  COMPANY_TITLE,
  COMPANY_DESCRIPTION,
  COMPANY_IMAGE,
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
  title: `${COMPANY_TITLE}`,
  description: `${COMPANY_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${COMPANY_TITLE}`,
  ogDescription: `${COMPANY_DESCRIPTION}`,
  ogImage: `${COMPANY_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
