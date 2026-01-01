<template>
  <div class="wrapperPadding">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapperPadding {
  position: relative;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  // border: 1px solid red;

  @media (max-width: 1600px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  // @media (max-width: 767px) {
  //   padding-left: 5px;
  //   padding-right: 5px;
  // }
}
</style>
