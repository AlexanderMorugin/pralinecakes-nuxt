<template>
  <div
    :class="[
      'ButtonCartBlock',
      {
        ButtonCartBlock_active: productById.length > 0,
      },
    ]"
  >
    <ButtonCart
      :count="productById.length"
      @addCartItem="cartStore.addCartItem(cartProduct(product))"
    />

    <ButtonCounter
      v-if="productById.length > 0"
      :count="productById[0].count"
      @increment="cartStore.incrementCartItem(product.id)"
      @decrement="cartStore.decrementCartItem(product.id)"
    />
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

const cartStore = useCartStore();

const productById = computed(() =>
  cartStore.cart.filter((item) => item.id === product.id)
);
</script>

<style lang="scss" scoped>
.ButtonCartBlock {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  height: 50px;
  margin-top: 10px;

  &_active {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
