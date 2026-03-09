<template>
  <WrapperPage class="authPage">
    <span class="authPage__title">Недостаточно прав...</span>
    <span class="authPage__subtitle">Выполните авторизацию</span>
    <NuxtLink to="/" class="authPage__link">Или пройдите на главную</NuxtLink>
  </WrapperPage>
</template>

<script setup>
import {
  SITE,
  SITE_AUTHOR,
  AUTH_TITLE,
  AUTH_DESCRIPTION,
} from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart", "auth"],
  layout: "main",
});

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${AUTH_TITLE}`,
  description: `${AUTH_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "noindex, nofollow",
});
</script>

<style lang="scss" scoped>
.authPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 40px;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 24px;
    line-height: 32px;
    color: var(--white-primary);
    letter-spacing: 1px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
  }

  &__link {
    color: var(--white-primary);
    text-decoration: underline;
  }
}
</style>
