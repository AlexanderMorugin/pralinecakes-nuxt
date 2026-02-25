<template>
  <NuxtLink to="/admin" class="logoAdmin">
    <span class="logoAdmin__title">Пралине</span>
    <div class="logoAdmin__shopBox">
      <span class="logoAdmin__shop">Admin</span>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logoAdmin {
  position: relative;
  width: fit-content;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 16px;
    color: var(--black-primary);
    text-transform: uppercase;
    letter-spacing: 4px;
    opacity: 0.8;

    @media (max-width: 767px) {
      font-size: 12px;
      letter-spacing: 0;
    }
  }

  &__shopBox {
    position: absolute;
    top: -8px;
    right: -8px;
    z-index: 3;
    transform: rotate(-5deg);

    @media (max-width: 767px) {
      top: -7px;
      right: -17px;
    }
  }

  &__shop {
    font-family: "Comfortaa-Bold", sans-serif;
    font-size: 14px;
    color: #ff0000;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
