<template>
  <WrapperPage>
    <TitlePage title="Данные о продавце" />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  REQUISITES_TITLE,
  REQUISITES_DESCRIPTION,
} from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart", "auth"],
  layout: "main",
});

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useHead({
  title: REQUISITES_TITLE,
  meta: [{ name: "description", content: REQUISITES_DESCRIPTION }],
});
</script>
