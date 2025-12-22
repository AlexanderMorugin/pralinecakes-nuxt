<template>
  <div class="wrapperPage">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapperPage {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
</style>
