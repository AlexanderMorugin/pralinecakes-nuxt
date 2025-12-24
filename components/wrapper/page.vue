<template>
  <div class="wrapperPage">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapperPage {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  z-index: 10;
}
</style>
