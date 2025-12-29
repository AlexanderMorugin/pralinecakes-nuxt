<template>
  <div class="cartEmpty">
    <span class="cartEmpty__text">Ваша корзина пуста</span>
  </div>
</template>

<style lang="scss" scoped>
.cartEmpty {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 24px;
    color: var(--white-primary);

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
}
</style>
