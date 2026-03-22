<template>
  <WrapperPage>
    <TitlePage title="Политика конфиденциальности" />
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  PRIVACY_TITLE,
  PRIVACY_DESCRIPTION,
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
  title: PRIVACY_TITLE,
  meta: [{ name: "description", content: PRIVACY_DESCRIPTION }],
});
</script>
