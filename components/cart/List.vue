<template>
  <section class="cartList">
    <div class="cartList__topBlock">
      <span class="cartList__topBlockText"
        >{{ cartStore.totalCartCount }}
        {{ cartStore.totalCartCount > 4 ? "продуктов" : "продукта" }}</span
      >
      <ButtonCartClean @cleanCart="cartStore.cleanCart()" />
    </div>
    <ul v-if="!isScreenMedium" class="cartList__grid cartList__top">
      <li class="cartList__topName"><span>Продукт</span></li>
      <li class="cartList__topName"><span>Цена</span></li>
      <li class="cartList__topName"><span>Количество</span></li>
      <li class="cartList__topName"><span>Стоимость</span></li>
    </ul>
    <ul class="cartList__products">
      <li
        v-for="product in cartStore.cart"
        :key="product.id"
        class="cartList__grid cartList__product"
      >
        <CartCard :product="product" />
        <CartPrice :product="product" />
        <div class="cartList__counter">
          <ButtonCounter
            place="cartList"
            :count="product.count"
            @increment="cartStore.incrementCartItem(product.id)"
            @decrement="cartStore.decrementCartItem(product.id)"
          />
        </div>
        <CartTotalProductPrice :product="product" />
      </li>
    </ul>
  </section>
</template>

<script setup>
const cartStore = useCartStore();
const { isScreenMedium } = useResizeMedium();
</script>

<style lang="scss" scoped>
.cartList {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__topBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border: 1px solid transparent;
    padding-bottom: 20px;

    @media (max-width: 767px) {
      padding-bottom: 0;
    }
  }

  &__topBlockText {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
  }

  &__grid {
    display: grid;
    grid-template-areas: "card price counter total";
    grid-template-columns: 1fr 12% 15% 15%;
    column-gap: 10px;

    @media (max-width: 1280px) {
      grid-template-columns: 1fr 12% 17% 15%;
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 12% 15% 15%;
    }

    @media (max-width: 767px) {
      grid-template-columns: 70% 1fr;
      grid-template-areas: "card price" "counter total";
      row-gap: 10px;
    }
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

    @media (max-width: 767px) {
      gap: 20px;
    }
  }

  &__product {
    border-radius: var(--border-radius-s);
    border: 1px solid var(--border-primary);
    padding: 10px;

    @media (max-width: 767px) {
      padding: 5px;
    }
  }

  &__counter {
    display: flex;
    justify-content: flex-end;
    // border: 1px solid red;

    // @media (max-width: 767px) {

    // }
  }
}
</style>
