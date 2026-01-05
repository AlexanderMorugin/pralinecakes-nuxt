<template>
  <div class="wrapperText">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapperText {
  font-family: "Montserrat-Regular", sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: var(--white-primary);
  letter-spacing: 1px;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }
}
</style>
