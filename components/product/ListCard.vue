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

        <ButtonCart :cartStatus="cartStatus" @addToCart="$emit('addToCart')" />
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
  border-radius: var(--border-radius-s);
  overflow: hidden;

  // border: 1px solid red;

  @media (max-width: 1600px) {
    height: 500px;
  }

  @media (max-width: 767px) {
    height: 420px;
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

  &__imageBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    animation: slide-to-top 0.6s ease-in-out;
    overflow: hidden;

    @media (max-width: 1600px) {
      height: 300px;
    }

    @media (max-width: 767px) {
      height: 260px;
    }
  }

  &__image {
    width: 100%;
    height: 450px;
    object-fit: cover;

    @media (max-width: 1600px) {
      height: 300px;
    }

    @media (max-width: 767px) {
      height: 260px;
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

    @media (max-width: 1600px) {
      padding: 20px;
    }

    @media (max-width: 1024px) {
      gap: 10px;
      padding: 10px 10px 20px 10px;
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
      font-size: 22px;
      line-height: 32px;
      letter-spacing: 1px;
    }

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0;
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

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0;
    }
  }

  &__priceBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
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

    @media (max-width: 767px) {
      font-size: 18px;
      letter-spacing: 0;
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

    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
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
