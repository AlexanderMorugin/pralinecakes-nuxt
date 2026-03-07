<template>
  <WrapperPage>
    <TitlePage title="Профиль" />
    <div>{{ userStore.user }}</div>
  </WrapperPage>
</template>

<script setup>
import { PROFILE_TITLE, PROFILE_DESCRIPTION } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart", "auth"],
  layout: "main",
});

const userStore = useUserStore();

useHead({
  title: PROFILE_TITLE,
  meta: [{ name: "description", content: PROFILE_DESCRIPTION }],
});
</script>

<style></style>
