<template>
  <section class="titlePage page-padding-x">
    <h1 class="titlePage__title">{{ title }}</h1>
  </section>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.titlePage {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 100px;

  @media (max-width: 1920px) {
    padding-top: 20px;
    padding-bottom: 60px;
    // padding: 20px 20px 60px 20px;
  }

  @media (max-width: 767px) {
    padding-bottom: 20px;
    // padding: 20px 10px;
  }

  &__title {
    width: 100%;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 80px;
    color: var(--white-primary);
    letter-spacing: 6px;
    text-align: center;
    animation: fall-down 1s ease-in-out;
    opacity: 0.7;

    // border: 1px solid red;

    @media (max-width: 1920px) {
      font-size: 60px;
    }

    @media (max-width: 1600px) {
      font-size: 40px;
    }

    @media (max-width: 767px) {
      font-size: 28px;
      line-height: 44px;
    }
  }
}

@keyframes fall-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }
  60% {
    opacity: 0.7;
    transform: translateY(0);
  }
  70% {
    opacity: 0.7;
    transform: translateY(-20%);
  }
  80% {
    opacity: 0.7;
    transform: translateY(0);
  }
  90% {
    opacity: 0.7;
    transform: translateY(-10%);
  }
  100% {
    opacity: 0.7;
    transform: translateY(0);
  }
}
</style>
