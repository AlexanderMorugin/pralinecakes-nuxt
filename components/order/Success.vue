<template>
  <div class="orderSuccess page-padding-x">
    <TitleBlock title="Благодарим за заказ!" />
    <WrapperText
      >Только что мы получили ваш заказ и вскоре сотрудник свяжется с вами по
      указанному телефону.</WrapperText
    >
    <div class="line-solid" />
    <OrderDetails v-if="orderStore.order" />

    <div class="orderSuccess__container">
      <FormSubmit
        title="Закрыть"
        @handleClick="closeOrderSuccess"
        place="client"
      />
    </div>
  </div>
</template>

<script setup>
const orderStore = useOrderStore();

const closeOrderSuccess = () => {
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
  padding-top: 100px;

  @media (max-width: 1920px) {
    padding-top: 60px;
  }

  @media (max-width: 767px) {
    padding-top: 20px;
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
