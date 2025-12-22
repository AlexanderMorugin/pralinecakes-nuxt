<template>
  <ContainerPage>
    <section class="heroBlock">
      <div class="heroBlock__overlay" />
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/hero/hero-3-768.webp"
        />
        <source
          media="(max-width: 1280px)"
          srcSet="/images/hero/hero-3-1280.webp"
        />
        <source
          media="(max-width: 1920px)"
          srcSet="/images/hero/hero-3-1920.webp"
        />
        <source
          media="(max-width: 2560px)"
          srcSet="/images/hero/hero-3-2560.webp"
        />
        <source
          media="(max-width: 3840px)"
          srcSet="/images/hero/hero-3-3840.webp"
        />
        <img
          src="/images/hero/hero-3-768.webp"
          alt="Кондитерская Пралине"
          title="Кондитерская Пралине"
          class="heroBlock__image"
        />
      </picture>

      <div class="heroBlock__subtitleBox">
        <span class="heroBlock__subtitle">Производство и продажа тортов</span>
      </div>
      <div class="heroBlock__titleBox">
        <h2 class="heroBlock__title">
          <div class="heroBlock__titleSubnameBox">
            <span class="heroBlock__titleSubname">Кондитерская</span>
          </div>
          <div class="heroBlock__titleNameBox">
            <span class="heroBlock__titleName">Пралине</span>
          </div>
        </h2>
      </div>
    </section>
  </ContainerPage>
</template>

<style lang="scss" scoped>
.heroBlock {
  position: relative;
  width: 100%;
  height: 85vh;
  background: transparent;
  overflow: hidden;
  border-radius: 20px;
  margin: 20px auto 0 auto;

  @media (max-width: 1280px) {
    height: 720px;
  }

  @media (max-width: 768px) {
    height: 420px;
    margin-top: 10px;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: overlay 3s ease;
    background: var(--mask-primary);
    z-index: 1;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: scale 3s ease;
  }

  &__subtitleBox {
    position: absolute;
    left: 5%;
    right: 5%;
    top: 10%;
    z-index: 2;
    display: flex;
    justify-content: center;
  }

  &__subtitle {
    font-family: "Roboto-Medium", sans-serif;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 12px;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      #ffffff80 30%,
      #ffffff 37%,
      #ffffff80 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500% auto;
    animation: appear 4s ease-in-out;

    @media (max-width: 1024px) {
      font-size: 20px;
      letter-spacing: 6px;
    }
  }

  &__titleBox {
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: 2%;
    z-index: 2;

    @media (max-width: 1024px) {
      left: 2%;
      right: 2%;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px) {
      gap: 5px;
    }
  }

  &__titleSubnameBox {
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden;

    @media (max-width: 1440px) {
      height: 60px;
    }

    @media (max-width: 768px) {
      height: 40px;
    }

    @media (max-width: 576px) {
      height: 30px;
    }
  }

  &__titleSubname {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "CormorantGaramond-MediumItalic", sans-serif;
    font-size: 80px;
    color: var(--orange-primary);
    text-transform: lowercase;
    animation: ascent-subname 1s ease-in-out;

    @media (max-width: 1440px) {
      font-size: 60px;
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 30px;
    }
  }

  &__titleNameBox {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;

    @media (max-width: 1440px) {
      height: 120px;
    }

    @media (max-width: 768px) {
      height: 60px;
    }

    @media (max-width: 576px) {
      height: 48px;
    }

    @media (max-width: 390px) {
      height: 36px;
    }
  }

  &__titleName {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 180px;
    color: var(--white-primary);
    text-transform: uppercase;
    letter-spacing: 10px;
    animation: ascent-name 1.5s ease-in-out;

    @media (max-width: 1440px) {
      font-size: 120px;
    }

    @media (max-width: 768px) {
      font-size: 60px;
    }

    @media (max-width: 576px) {
      font-size: 48px;
    }

    @media (max-width: 390px) {
      font-size: 36px;
    }
  }
}

@keyframes scale {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ascent-subname {
  0% {
    transform: translateY(100%);
  }
  60% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes ascent-name {
  0% {
    transform: translateY(100%);
  }
  70% {
    transform: translateY(100%);
  }
  90% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes overlay {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: rgba(0, 0, 0, 0.2);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  55% {
    background-position: left top;
  }
  100% {
    background-position: right bottom;
  }
}
</style>
