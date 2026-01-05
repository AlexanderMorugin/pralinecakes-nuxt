<template>
  <NuxtLink to="/" class="logo">
    <span class="logo__title">Пралине</span>
    <div class="logo__shopBox">
      <span class="logo__shop">Shop</span>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  width: fit-content;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 20px;
    color: var(--white-primary);
    text-transform: uppercase;
    letter-spacing: 4px;
    animation: ascent-name 1.5s ease-in-out;
    opacity: 0.8;

    // @media (max-width: 767px) {
    //   font-size: 16px;
    // }

    @media (max-width: 767px) {
      font-size: 12px;
      letter-spacing: 0;
    }

    @media (max-width: 375px) {
      font-size: 10px;
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

    @media (max-width: 375px) {
      top: -5px;
      right: -14px;
    }
  }

  &__shop {
    font-family: "Comfortaa-Bold", sans-serif;
    font-size: 14px;
    color: red;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
