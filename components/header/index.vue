<template>
  <header class="header">
    <ButtonWithIcon name="menu" />
    <!-- <img src="/bg/ellipse-top-left-1.png" class="header__ellipseTopLeft" /> -->

    <ButtonWithIcon name="search" />

    <!-- <ButtonWithIcon name="login" /> -->

    <div class="header__right">
      <div class="header__block">
        <ButtonWithIcon name="email" />
        <ButtonWithIcon name="phone" />
        <ButtonWithIcon name="chat" />
      </div>

      <div class="header__block">
        <ButtonWithIcon name="account" />
        <ButtonWithIcon name="favorite" />
        <ButtonWithIcon name="cart" />
      </div>
    </div>
    <!-- <ButtonWithIcon name="logout" /> -->
    <!-- <ButtonWithIcon name="delete" /> -->
    <!-- <ButtonWithIcon name="delivery" /> -->
    <!-- <ButtonWithIcon name="person" /> -->
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  &__right {
    display: flex;
    align-items: center;
    gap: 50px;
    width: fit-content;
  }

  &__block {
    display: flex;
    align-items: center;
    width: fit-content;
  }
}
.header__ellipseTopLeft {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
