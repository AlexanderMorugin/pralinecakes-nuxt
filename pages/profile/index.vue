<template>
  <WrapperPage class="page-padding-x">
    <TitlePage title="Профиль" />
    <ClientOnly>
      <div class="profile">
        <LazyUserCard v-if="userStore.user" :user="userStore.user" />
        <!-- <LazyUserOrders v-if="userStore.user" /> -->
        <!-- <LazyUserComments v-if="userStore.user" /> -->
      </div>
    </ClientOnly>
  </WrapperPage>
</template>

<script setup>
import { PROFILE_TITLE, PROFILE_DESCRIPTION } from "@/utils/constants/meta";

definePageMeta({
  middleware: ["cart", "auth"],
  layout: "main",
});

const userStore = useUserStore();

// console.log(userStore.user);

useHead({
  title: PROFILE_TITLE,
  meta: [{ name: "description", content: PROFILE_DESCRIPTION }],
});
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
