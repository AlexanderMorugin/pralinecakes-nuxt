<template>
  <div class="productListCard">
    <ButtonWithIcon
      name="favorite"
      :isFavorite="item.isFavorite"
      class="productListCard__buttonFavorite"
    />

    <ProductListCardBadge
      v-if="item.badgeStatus"
      :badgeStatus="item.badgeStatus"
    />

    <ProductListCardDiscount v-if="item.discount" :discount="item.discount" />

    <NuxtLink to="/" class="productListCard__overlay"></NuxtLink>

    <ProductListCardImage :image="item.image" :name="item.name" />

    <div class="productListCard__details">
      <ProductListCardTitleBox
        :name="item.name"
        :description="item.description"
      />

      <div class="productListCard__cartBox">
        <div class="productListCard__statusBox">
          <ProductListCardRating :rating="item.rating" />
          <ProductListCardComment :comments="item.comments.length" />
        </div>

        <div class="productListCard__priceBox">
          <span class="productListCard__weigth">{{ item.weigth }} гр</span>
          <div class="productListCard__prices">
            <span v-if="item.discount" class="productListCard__priceOld"
              >{{ item.price }} &#8381;</span
            >
            <span class="productListCard__price"
              >{{
                item.discount
                  ? item.price - (item.price * item.discount) / 100
                  : item.price
              }}
              &#8381;</span
            >
          </div>
        </div>
        <div
          :class="[
            'productListCard__buttonCartBlock',
            { productListCard__buttonCartBlock_active: item.quantity > 0 },
          ]"
        >
          <ButtonCart
            :quantity="item.quantity"
            @increment="$emit('increment')"
          />

          <ButtonCounter
            v-if="item.quantity > 0"
            :quantity="item.quantity"
            @increment="$emit('increment')"
            @decrement="$emit('decrement')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { item } = defineProps(["item"]);

const emit = defineEmits(["increment", "decrement"]);
</script>

<style lang="scss" scoped>
.productListCard {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 700px;
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-s);
  overflow: hidden;

  // border: 1px solid red;

  @media (max-width: 1600px) {
    height: 500px;
  }

  @media (max-width: 767px) {
    height: 420px;
  }

  &__buttonFavorite {
    position: absolute;
    top: 7px;
    right: 7px;
    z-index: 2;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-product-card-primary);
    backdrop-filter: blur(1000px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 60%);
    z-index: 1;

    @media (max-width: 1600px) {
      mask: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 60%);
    }
  }

  &__details {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  &__statusBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__cartBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 40px 20px 40px;

    @media (max-width: 1600px) {
      padding: 0 20px 20px 20px;
    }

    @media (max-width: 1024px) {
      padding: 0 10px 10px 10px;
    }

    @media (max-width: 767px) {
      padding-top: 0;
      padding-bottom: 10px;
    }
  }

  &__priceBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__prices {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__priceOld {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
    opacity: 0.7;
    text-decoration-line: line-through;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }

  &__price {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 24px;
    color: var(--white-primary);
    letter-spacing: 2px;

    @media (max-width: 1600px) {
      font-size: 20px;
    }

    @media (max-width: 1024px) {
      letter-spacing: 1px;
    }
  }

  &__weigth {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: var(--white-primary);
    opacity: 0.7;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }

  &__buttonCartBlock {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 10px;
    height: 50px;
    margin-top: 10px;

    &_active {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
