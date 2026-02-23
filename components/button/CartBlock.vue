<template>
  <div class="ButtonCartBlock">
    <ClientOnly>
      <div
        :class="[
          'ButtonCartBlock__container',
          {
            ButtonCartBlock__container_active: productById.length > 0,
          },
        ]"
      >
        <LazyButtonCartBtn
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
    </ClientOnly>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

const cartStore = useCartStore();

const productById = computed(() =>
  cartStore.cart.filter((item) => item.id === product.id),
);
</script>

<style lang="scss" scoped>
.ButtonCartBlock {
  height: 50px;
  margin-top: 10px;

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 10px;
    height: 100%;

    &_active {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
