<template>
  <div class="logoBlock">
    <NuxtLink to="/" class="logo">
      <span :class="['logo__title', { logo__title_footer: place === 'footer' }]"
        >Пралине</span
      >
      <div
        :class="['logo__shopBox', { logo__shopBox_footer: place === 'footer' }]"
      >
        <span :class="['logo__shop', { logo__shop_footer: place === 'footer' }]"
          >Shop</span
        >
      </div>
    </NuxtLink>
    <div v-if="place === 'footer'" class="logo__subtitle">
      интернет магазин тортов и пирожных
    </div>
  </div>
</template>

<script setup>
const { place } = defineProps(["place"]);
</script>

<style lang="scss" scoped>
.logoBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.logo {
  position: relative;
  // display: flex;
  // flex-direction: column;
  // gap: 20px;
  width: fit-content;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 20px;
    color: var(--white-primary);
    text-transform: uppercase;
    letter-spacing: 4px;
    opacity: 0.8;

    @media (max-width: 767px) {
      font-size: 12px;
      letter-spacing: 0;
    }

    &_footer {
      font-size: 40px;
      opacity: 1;
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

    &_footer {
      top: -14px;
      right: -34px;
    }
  }

  &__shop {
    font-family: "Comfortaa-Bold", sans-serif;
    font-size: 14px;
    color: red;

    @media (max-width: 767px) {
      font-size: 12px;
    }

    &_footer {
      font-size: 32px;
    }
  }

  &__subtitle {
    line-height: 24px;
    color: var(--white-primary);
    text-align: center;
    letter-spacing: 4px;
  }
}
</style>
