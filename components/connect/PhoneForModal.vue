<template>
  <div class="phoneForModal">
    <ModalElement>
      <span class="phoneForModal__number">+7 977 138-82-64</span>
    </ModalElement>
    <ModalElement>
      <span class="phoneForModal__number">+7 495 729-50-51</span>
    </ModalElement>
  </div>
</template>

<style lang="scss" scoped>
.phoneForModal {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__number {
    font-family: "Roboto-Medium", sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--white-primary);
  }
}
</style>
