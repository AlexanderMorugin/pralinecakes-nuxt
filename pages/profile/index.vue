<template>
  <WrapperPage class="page-padding-x">
    <TitlePage title="Профиль" />
    <UserCard v-if="userStore.user" :user="userStore.user" />
    <UserOrders v-if="userStore.user" />
    <UserComments v-if="userStore.user" />
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
