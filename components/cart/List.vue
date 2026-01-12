<template>
  <section class="cartList">
    <div class="cartList__topBlock">
      <span class="cartList__topBlockText"
        >{{ cartStore.totalCartCount }}
        {{
          cartStore.totalCartCount > 4
            ? "продуктов"
            : cartStore.totalCartCount === 1
            ? "продукт"
            : "продукта"
        }}</span
      >
      <ButtonCartClean
        title="Очистить корзину"
        @cleanCart="cartStore.cleanCart()"
      />
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
        <ButtonCartDeleteProduct
          title="Удалить"
          @deleteProduct="cartStore.deleteCartItem(product.id)"
          class="cartList__deleteProduct"
        />

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

    @media (max-width: 576px) {
      font-size: 14px;
    }
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
      grid-template-columns: 1fr 100px 70px;
      grid-template-areas: "card card card" "price counter total";
      column-gap: 20px;
      // row-gap: 10px;
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
    gap: 20px;

    @media (max-width: 767px) {
      gap: 10px;
    }
  }

  &__product {
    position: relative;
    border-radius: var(--border-radius-s);
    border: 1px solid var(--border-primary);
    padding: 10px;

    @media (max-width: 767px) {
      padding: 5px;
    }
  }

  &__deleteProduct {
    position: absolute;
    top: 10px;
    right: 10px;

    @media (max-width: 767px) {
      top: 5px;
      right: 5px;
    }
  }

  &__counter {
    display: flex;
    justify-content: flex-end;
    padding-top: 35px;
    // border: 1px solid red;

    @media (max-width: 767px) {
      padding-top: 0;
    }
  }
}
</style>
