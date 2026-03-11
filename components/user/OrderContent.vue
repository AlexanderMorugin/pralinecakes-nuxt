<template>
  <ul class="userOrderContent">
    <li v-for="item in order.cart_list" :key="item.id">
      <UserOrderContentCard :item="item" />
    </li>
  </ul>
</template>

<script setup>
const { order } = defineProps(["order"]);

console.log(order);
</script>

<style lang="scss" scoped>
.userOrderContent {
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
