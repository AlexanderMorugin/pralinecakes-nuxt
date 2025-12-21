<template>
  <div class="heroBlock">
    <div class="heroBlock__overlay" />
    <img
      src="/public/images/almond-prune-cake-1-2800-1866-2.webp"
      alt="Image of Hero"
      class="heroBlock__image"
    />
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
  </div>
</template>

<style scoped>
.heroBlock {
  position: relative;
  width: 100%;
  height: calc(85vh - 83px);
  width: calc(100% - 32px);
  overflow: hidden;
  border-radius: 20px;
  margin: 0 auto;
}
.heroBlock__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: overlay 2s ease;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.heroBlock__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: scale 1s ease;
}
.heroBlock__subtitleBox {
  position: absolute;
  left: 5%;
  right: 5%;
  top: 10%;
  z-index: 2;
  display: flex;
  justify-content: center;
}
.heroBlock__subtitle {
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
}
.heroBlock__titleBox {
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 2%;
  z-index: 2;
}
.heroBlock__title {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.heroBlock__titleSubnameBox {
  position: relative;
  width: 100%;
  height: 80px;
  overflow: hidden;
}
.heroBlock__titleSubname {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "CormorantGaramond-MediumItalic", sans-serif;
  font-size: 80px;
  color: #ffac30;
  text-transform: lowercase;
  animation: ascent-subname 1s ease-in-out;
}
.heroBlock__titleNameBox {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
}
.heroBlock__titleName {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 180px;
  color: var(--white-primary);
  text-transform: uppercase;
  letter-spacing: 10px;
  animation: ascent-name 1.5s ease-in-out;
}

@media (max-width: 1400px) {
  .heroBlock__titleSubnameBox {
    height: 60px;
  }
  .heroBlock__titleSubname {
    font-size: 60px;
  }
  .heroBlock__titleNameBox {
    height: 120px;
  }
  .heroBlock__titleName {
    font-size: 120px;
  }
}

@media (max-width: 1023px) {
  .heroBlock__subtitle {
    font-size: 20px;
    letter-spacing: 6px;
  }
  .heroBlock__titleBox {
    left: 2%;
    right: 2%;
  }
}

@media (max-width: 767px) {
  .heroBlock {
    width: calc(100% - 12px);
  }
  .heroBlock__title {
    gap: 5px;
  }
  .heroBlock__titleSubnameBox {
    height: 40px;
  }
  .heroBlock__titleSubname {
    font-size: 40px;
  }
  .heroBlock__titleNameBox {
    height: 60px;
  }
  .heroBlock__titleName {
    font-size: 60px;
  }
}

@media (max-width: 575px) {
  .heroBlock__titleSubnameBox {
    height: 30px;
  }
  .heroBlock__titleSubname {
    font-size: 30px;
  }
  .heroBlock__titleNameBox {
    height: 48px;
  }
  .heroBlock__titleName {
    font-size: 48px;
  }
}

@media (max-width: 389px) {
  .heroBlock__titleNameBox {
    height: 36px;
  }
  .heroBlock__titleName {
    font-size: 36px;
  }
}

@keyframes scale {
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  to {
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
