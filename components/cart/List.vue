<template>
  <section class="cartList">
    <div class="cartList__grid cartList__top">
      <span>Продукт</span>
      <span>Цена</span>
      <span>Количество</span>
      <span>Стоимость</span>
    </div>
    <ul class="cartList__products">
      <li
        v-for="product in cartStore.cart"
        :key="product.id"
        class="cartList__grid cartList__product"
      >
        <CartCard :product="product" />
        <CartPrice :product="product" />
        <ButtonCounter
          place="cartList"
          :count="product.count"
          @increment="cartStore.incrementCartItem(product.id)"
          @decrement="cartStore.decrementCartItem(product.id)"
        />

        <div class="grid">{{ currencyFormater(34450) }}</div>
      </li>
    </ul>

    {{ cartStore.cart }}
  </section>
</template>

<script setup>
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.cartList {
  display: flex;
  flex-direction: column;
  gap: 20px;

  // border: 1px solid red;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 15% 15% 15%;
    column-gap: 20px;
  }

  &__top {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 10px;
    color: var(--mask-white-primary);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &__products {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__product {
    border-radius: var(--border-radius-s);
    border: 1px solid var(--border-primary);
    padding: 5px;
  }
}
</style>
