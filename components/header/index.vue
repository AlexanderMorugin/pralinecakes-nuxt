<template>
  <header class="header">
    <!-- <img src="/bg/ellipse-top-left-1.png" class="header__ellipseTopLeft" /> -->

    <ButtonWithIcon name="close" />
    <ButtonWithIcon name="close" />
    <ButtonWithIcon name="close" />
    <ButtonWithIcon name="cart" />
  </header>
</template>

<style scoped>
.header {
  /* position: fixed;
  top: 0; */
  display: flex;
  width: 100%;
  height: 60px;
  background: var(--black-primary);
  /* background: var(); */
  z-index: 3;
  /* border: 1px solid red; */
}
.header__ellipseTopLeft {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
