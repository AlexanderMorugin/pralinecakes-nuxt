<template>
  <div class="cartSamovyvoz">
    <div>
      <TitleBlock title="Наши данные" class="cartSamovyvoz__title" />

      <span
        >Адрес производства для самовывоза + телефон + месенджер + часы
        работы</span
      >
    </div>
    <FormOrderSamovyvoz />
  </div>
</template>

<style lang="scss" scoped>
.cartSamovyvoz {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  &__title {
    padding-bottom: 40px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-self: flex-end;
    gap: 30px;
    width: 100%;
    max-width: 480px;
    padding-left: 20px;
  }
}
</style>
