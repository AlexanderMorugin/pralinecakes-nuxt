<template>
  <div class="wrapperPage">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapperPage {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  // z-index: 1;
}
</style>
