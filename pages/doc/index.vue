<template>
  <WrapperPage>
    <TitlePage title="Документы" />
  </WrapperPage>
</template>

<script setup>
import { SITE, DOC_TITLE, DOC_DESCRIPTION } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart", "auth"],
  layout: "main",
});

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useHead({
  title: DOC_TITLE,
  meta: [{ name: "description", content: DOC_DESCRIPTION }],
});
</script>
