<template>
  <div class="buttonCounter">
    <button class="buttonCounter__button buttonCounter__button_left">
      <IconMinus class="buttonCounter__icon" />
    </button>
    <div class="buttonCounter__numberBox">
      <span class="buttonCounter__number">120</span>
    </div>
    <button class="buttonCounter__button buttonCounter__button_right">
      <IconPlus class="buttonCounter__icon" />
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.buttonCounter {
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  height: 100%;
  background: var(--white-primary);
  border-radius: var(--border-radius-xs);
  padding: 10px 5px;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    &_left {
      border-right: 1px solid var(--mask-primary);
    }

    &_right {
      border-left: 1px solid var(--mask-primary);
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--button-blue-primary);
  }

  &__numberBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__number {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 18px;
    color: var(--black-primary);
  }
}
</style>
