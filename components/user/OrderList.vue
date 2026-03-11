<template>
  <div class="userOrderList">
    <UserSubtitle subtitle="Ваши заказы:" />
    <ul class="userOrderList__items">
      <li v-for="order in orders" :key="order.id">
        <UserOrderListCard :order="order" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { orders } = defineProps(["orders"]);
</script>

<style lang="scss" scoped>
.userOrderList {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
