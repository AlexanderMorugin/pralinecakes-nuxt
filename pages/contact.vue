<template>
  <WrapperPage>
    <TitlePage title="Контакты" />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_NAME,
  SITE_AUTHOR,
  CONTACT_TITLE,
  CONTACT_DESCRIPTION,
  CONTACT_IMAGE,
} from "@/utils/constants/meta";

definePageMeta({
  layout: "main",
});

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${route.path}` }],
});

useSeoMeta({
  title: `${CONTACT_TITLE}`,
  description: `${CONTACT_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${CONTACT_TITLE}`,
  ogDescription: `${CONTACT_DESCRIPTION}`,
  ogImage: `${CONTACT_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
