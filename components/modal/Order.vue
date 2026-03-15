<template>
  <div class="modalOrder">
    <div class="modalOrder__container">
      <div class="modalOrder__top">
        <div class="modalOrder__topTitleBox">
          <span class="modalOrder__topTitle"
            >Заказ {{ order.order_number }}</span
          >
          <span>{{ order.order_date }}</span>
          <span>{{ order.delivery_type }}</span>

          <UserOrderStatus :order="order" />
        </div>
        <ButtonWithIcon name="close" @click="$emit('closeModal')" />
      </div>

      <UserOrderContent :order="order" />
      <UserOrderTotal :order="order" />
    </div>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.modalOrder {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px) grayscale(50%);
  background: var(--mask-black-thirdly);
  padding: 20px;
  overflow-y: auto;
  z-index: 10;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 768px;
    border: 1px solid var(--border-primary);
    border-radius: var(--border-radius-l);
    padding: 20px;

    @media (max-width: 767px) {
      padding: 10px;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  &__topTitleBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__topTitle {
    font-size: 18px;
  }
}
</style>
