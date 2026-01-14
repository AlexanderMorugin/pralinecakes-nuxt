<template>
  <div class="orderSuccess">
    <TitleBlock title="Благодарим за заказ!" />
    <WrapperText
      >Только что мы получили ваш заказ и вскоре сотрудник свяжется с вами по
      указанному телефону.</WrapperText
    >
    <WrapperText>Детали заказа</WrapperText>

    <div class="orderSuccess__container">
      <FormSubmit title="Закрыть" @handleClick="closeOrderSuccess" />
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const orderStore = useOrderStore();

const closeOrderSuccess = () => {
  cartStore.cleanCart();
  orderStore.cleanOrder();
  return navigateTo("/");
};
</script>

<style lang="scss" scoped>
.orderSuccess {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  animation: slide-to-left 0.5s ease-in-out;

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
