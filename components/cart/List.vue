<template>
  <section class="cartList">
    <div class="cartList__grid cartList__top">
      <div class="cartList__topName"><span>Продукт</span></div>
      <div class="cartList__topName"><span>Цена</span></div>
      <div class="cartList__topName"><span>Количество</span></div>
      <div class="cartList__topName"><span>Стоимость</span></div>
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
        <CartTotalProductPrice :product="product" />
      </li>
    </ul>

    <!-- {{ cartStore.cart }} -->

    <div class="cartList__bottom">
      <span>Общая стоимость:</span>
      <!-- {{ cartStore.totalCartCount }}
      {{ cartStore.totalCartSum }} -->

      <span>{{ currencyFormater(cartStore.totalCartSum) }}</span>
    </div>
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

  &__topName {
    display: flex;
    justify-content: center;
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

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 5px;

    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;
  }
}
</style>
