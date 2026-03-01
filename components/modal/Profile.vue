<template>
  <div class="modalProfile">
    <NuxtLink to="/admin" class="modalProfile__title">Админка</NuxtLink>

    <div class="modalProfile__title" v-if="isLogin">
      Войдите в аккаунт или
      <span class="modalProfile__toggle" @click="toggleProfile"
        >зарегистрируйтесь.</span
      >
    </div>
    <div class="modalProfile__title" v-else>
      Зарегистрируйтесь или
      <span class="modalProfile__toggle" @click="toggleProfile"
        >войдите в аккаунт.</span
      >
    </div>

    <FormLogin v-if="isLogin" />
    <FormRegister v-else />
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

const isLogin = ref(true);

const toggleProfile = () => {
  if (isLogin) {
    isLogin.value = !isLogin.value;
  }
};
</script>

<style lang="scss" scoped>
.modalProfile {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 30px;

  &__title {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 24px;
    line-height: 32px;
    color: var(--white-primary);

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__toggle {
    border-bottom: 1px dashed var(--orange-primary);
    color: var(--orange-primary);

    cursor: pointer;
  }
}
</style>
