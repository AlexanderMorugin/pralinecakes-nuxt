<template>
  <CartEmpty v-if="!cartStore.cart.length" title="Корзина пуста." />
  <div v-else class="modalCart">
    <CartList />
    <ButtonOrder
      place="modalCart"
      title="Перейти к оформлению"
      @closeModal="$emit('closeModal')"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

const cartStore = useCartStore();

console.log(cartStore.cart.length);
</script>

<style lang="scss" scoped>
.modalCart {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 30px;
}
</style>
