<template>
  <WrapperPage class="authPage">
    <span class="authPage__title">Сессия завершена.</span>
    <span class="authPage__subtitle"
      >Нажмите на кнопку и авторизуйтесь заново.</span
    >
    <button class="authPage__button" @click="restart">RESTART</button>
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
  // middleware: ["cart", "auth"],
  layout: "main",
});

const route = useRoute();
const userStore = useUserStore();

const restart = async () => {
  userStore.logoutAuthUser();

  await navigateTo("/");
  location.reload();
};

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

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border-primary);
    border-radius: var(--border-radius-xs);
    background: var(--mask-blue-thirdly);
    color: var(--white-primary);
    padding: 10px 20px;
    transition: 0.2s ease;

    &:hover {
      background: var(--mask-blue-fourthly);
    }
  }
}
</style>
