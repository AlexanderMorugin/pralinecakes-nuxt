<template>
  <CartEmpty v-if="!cartStore.cart.length" />
  <div v-else class="modalCart">
    <CartList />
    <OrderBlock place="modalCart" @closeModal="$emit('closeModal')" />
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.modalCart {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 30px;
}
</style>
