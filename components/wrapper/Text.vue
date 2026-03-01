<template>
  <div :class="['wrapperText', { wrapperText_admin: place === 'admin' }]">
    <slot />
  </div>
</template>

<script setup>
const { place } = defineProps(["place"]);
</script>

<style lang="scss" scoped>
.wrapperText {
  // font-family: "Montserrat-Regular", sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: var(--white-primary);
  letter-spacing: 1px;
  // word-break: break-all;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }

  &_admin {
    // font-family: "Montserrat-Regular", sans-serif;
    letter-spacing: 0;
    color: var(--black-primary);
  }
}
</style>
