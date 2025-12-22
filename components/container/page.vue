<template>
  <div class="containerPage">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.containerPage {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
