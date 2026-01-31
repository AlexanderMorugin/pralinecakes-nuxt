<template>
  <div class="productListEmpty">
    <span class="productListEmpty__title">Продукция не найдена...</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.productListEmpty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 2px;
    color: var(--white-primary);
    padding-top: 100px;
  }
}
</style>
