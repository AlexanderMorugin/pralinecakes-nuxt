<template>
  <header class="header">
    <span>HEADER</span>
    <ButtonWithIcon name="close" />
    <ButtonWithIcon name="close" />
    <ButtonWithIcon name="close" />
    <ButtonWithIcon name="cart" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 66px;
  /* background: var(); */
  z-index: 1;
  border: 1px solid red;
}
.searchIcon {
  width: 48px;
  height: 48px;
  fill: white;
}
.searchIcon:hover {
  fill: red;
}
</style>
