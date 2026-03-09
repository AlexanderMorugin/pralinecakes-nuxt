<template>
  <WrapperPage class="errorPage">
    <span class="errorPage__title">Ошибка 404</span>
    <span class="errorPage__subtitle">страница не найдена</span>
    <NuxtLink to="/" class="errorPage__link">пройдите на главную</NuxtLink>
  </WrapperPage>
</template>

<style lang="scss" scoped>
.errorPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;

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
