<template>
  <div class="productListCard">
    <NuxtLink to="/" class="productListCard__overlay"></NuxtLink>
    <div class="productListCard__imageBox">
      <img :src="image" :alt="name" class="productListCard__image" />
    </div>
    <div class="productListCard__details">
      <NuxtLink to="/" class="productListCard__titleBox">
        <h2 class="productListCard__title">
          {{ name }}
        </h2>
        <span class="productListCard__subtitle">{{ description }}</span>
      </NuxtLink>
      <div class="productListCard__priceBox">
        <div class="productListCard__left">
          <span class="productListCard__price">{{ price }} &#8381;</span>
          <span class="productListCard__weigth">( {{ weigth }} гр )</span>
        </div>

        <button class="productListCard__cartButton" @click="$emit('addToCart')">
          <span
            :class="
              cartStatus
                ? 'productListCard__cartTextActive'
                : 'productListCard__cartText'
            "
            >{{ cartStatus ? "В корзине" : "Купить" }}</span
          >
          <IconCart
            :class="[
              'productListCard__cartIcon',
              { productListCard__cartIcon_active: cartStatus },
            ]"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { image, name, description, price, weigth, cartStatus } = defineProps([
  "image",
  "name",
  "description",
  "price",
  "weigth",
  "cartStatus",
]);

const emit = defineEmits(["addToCart"]);
</script>

<style lang="scss" scoped>
.productListCard {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 700px;
  border: 1px solid var(--border-primary);

  // border: 1px solid red;

  @media (max-width: 1600px) {
    height: 500px;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-product-card-primary);
    backdrop-filter: blur(25px);
    mask: linear-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 60%);
    z-index: 1;
    // border: 1px solid red;
  }

  &__imageBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    animation: slide-to-top 0.6s ease-in-out;
    overflow: hidden;

    // border: 1px solid red;

    @media (max-width: 1600px) {
      height: 300px;
    }
  }
  &__image {
    width: 100%;
    height: 450px;
    object-fit: cover;
    transition: 0.5s ease;

    @media (max-width: 1600px) {
      height: 300px;
    }
  }

  &__details {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  &__titleBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 40px;
    // border: 1px solid red;

    @media (max-width: 1600px) {
      padding: 20px 20px 10px 20px;
    }

    @media (max-width: 1024px) {
      gap: 10px;
      padding: 10px;
    }
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 28px;
    line-height: 42px;
    color: var(--white-primary);
    letter-spacing: 2px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 1600px) {
      font-size: 24px;
      line-height: 36px;
      // letter-spacing: 2px;
    }

    @media (max-width: 1024px) {
      font-size: 22px;
      line-height: 32px;
      letter-spacing: 1px;
    }
  }

  &__subtitle {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 2px;
    opacity: 0.8;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 1600px) {
      font-family: "Montserrat-Regular", sans-serif;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
    }
  }

  &__priceBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    // border: 1px solid red;

    @media (max-width: 1600px) {
      // padding-top: 10px;
      padding: 10px 20px 20px 20px;
    }

    @media (max-width: 1024px) {
      padding: 10px 10px 20px 10px;
    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 20px;
    width: fit-content;

    @media (max-width: 1600px) {
      gap: 10px;
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
    // letter-spacing: 2px;
    opacity: 0.7;

    @media (max-width: 1600px) {
      font-size: 14px;
    }

    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }

  &__cartButton {
    display: flex;
    align-items: center;
    gap: 5px;
    // width: 132px;
    // padding: 10px;

    // border: 1px solid red;

    @media (max-width: 1600px) {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }

  &__cartIcon {
    width: 32px;
    height: 32px;
    fill: var(--white-primary);
    transition: 0.25s ease;

    @media (max-width: 1600px) {
      width: 24px;
      height: 24px;
    }

    &_active {
      fill: var(--orange-primary);
    }
  }

  &__cartText {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 3px;
    opacity: 0;
    transform: translateX(36px);
    transition: 0.1s ease;

    @media (max-width: 1600px) {
      font-size: 12px;
      letter-spacing: 1px;
    }
  }

  &__cartTextActive {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--orange-primary);
    letter-spacing: 3px;

    @media (max-width: 1600px) {
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}

.productListCard:hover .productListCard__image {
  transform: scale(1.1);
}

.productListCard__cartButton:hover .productListCard__cartText {
  opacity: 1;
  transform: translateX(0);
}

.productListCard__cartButton:hover .productListCard__cartIcon {
  fill: var(--orange-primary);
}

@keyframes slide-to-top {
  0% {
    opacity: 0;
    transform: scale(1) translateY(50%);
  }
  50% {
    opacity: 0;
    transform: scale(1) translateY(50%);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
