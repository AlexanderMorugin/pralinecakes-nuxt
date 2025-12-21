<template>
  <div class="wrapperPage">
    <slot />
  </div>
</template>

<style scoped>
.wrapperPage {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
</style>
