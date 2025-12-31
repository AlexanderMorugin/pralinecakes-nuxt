<template>
  <div class="productListCard">
    <NuxtLink
      :to="`/${type}/${product.slug}`"
      class="productListCard__overlay"
    ></NuxtLink>

    <ButtonWithIcon
      name="favorite"
      :isFavorite="product.isFavorite"
      class="productListCard__buttonFavorite"
    />

    <ProductListCardBadge
      v-if="product.badgeStatus"
      :badgeStatus="product.badgeStatus"
    />

    <ProductListCardDiscount
      v-if="product.discount"
      :discount="product.discount"
    />

    <ProductListCardImage :image="product.image" :name="product.name" />

    <div class="productListCard__details">
      <ProductListCardTitle
        :route="`/${type}/${product.slug}`"
        :name="product.name"
        :description="product.description"
      />

      <div class="productListCard__cartBox">
        <div class="productListCard__statusBox">
          <ProductListCardRating :rating="product.rating" />
          <ProductListCardComment :comments="product.comments.length" />
        </div>

        <ProductListCardPrice
          :weigth="product.weigth"
          :price="product.price"
          :discount="product.discount"
        />

        <ButtonCartBlock :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { product, type } = defineProps(["product", "type"]);
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
}
</style>
