<template>
  <div class="productListCard">
    <NuxtLink to="/" class="productListCard__overlay"></NuxtLink>
    <div class="productListCard__imageBox">
      <img
        src="/images/cakes/truffle-cake-1-800-533.webp"
        alt="Card"
        class="productListCard__image"
      />
    </div>
    <div class="productListCard__details">
      <NuxtLink to="/" class="productListCard__titleBox">
        <h2 class="productListCard__title">Торт «Воздушно-ореховый»</h2>
        <span class="productListCard__subtitle"
          >Самый шоколадный и один из самых нежных десертов нашей
          кондитерской.</span
        >
      </NuxtLink>
      <div class="productListCard__priceBox">
        <span class="productListCard__price">1860 &#8381; (граммы)</span>

        <button class="productListCard__cartButton" @click="addToCart">
          <span class="productListCard__cartText">Купить</span>
          <IconCart class="productListCard__cartIcon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const addToCart = () => {
  console.log("addToCart");
};
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

  @media (max-width: 1280px) {
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

    @media (max-width: 1280px) {
      height: 300px;
    }
  }
  &__image {
    width: 100%;
    height: 450px;
    object-fit: cover;
    transition: 0.5s ease;

    @media (max-width: 1280px) {
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

    @media (max-width: 1280px) {
      gap: 10px;
      padding: 10px;
    }
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 28px;
    line-height: 42px;
    color: var(--white-primary);
    letter-spacing: 6px;

    @media (max-width: 1280px) {
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 2px;
    }

    @media (max-width: 768px) {
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

    @media (max-width: 1280px) {
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

    @media (max-width: 1280px) {
      padding: 5px 10px;
    }
  }

  &__price {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 24px;
    color: var(--white-primary);
    letter-spacing: 2px;

    @media (max-width: 1280px) {
      font-size: 20px;
    }
  }

  &__cartButton {
    display: flex;
    align-items: center;
    gap: 5px;
    // width: 132px;
    padding: 10px;

    // border: 1px solid red;

    @media (max-width: 1280px) {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }

  &__cartIcon {
    width: 32px;
    height: 32px;
    fill: var(--white-primary);
    transition: 0.25s ease;

    @media (max-width: 1280px) {
      width: 24px;
      height: 24px;
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
