<template>
  <header class="header">
    <div class="header__left">
      <ButtonWithIcon name="menu" />
      <ButtonWithIcon name="search" />
    </div>

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
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  // top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: var(--gradient--page-secondary);
  // opacity: 0.8;
  z-index: 3;

  &__left {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 50px;
    width: fit-content;

    @media (max-width: 768px) {
      gap: 30px;
    }

    @media (max-width: 390px) {
      gap: 0;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    width: fit-content;
  }
}
</style>
