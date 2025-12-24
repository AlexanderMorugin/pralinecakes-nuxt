<template>
  <section class="titlePage">
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
  padding: 20px;
  // border: 1px solid red;

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 80px;
    color: var(--white-primary);
    // text-transform: uppercase;
    letter-spacing: 6px;
    animation: fall-down 1s ease-in-out;
    opacity: 0.7;

    @media (max-width: 1440px) {
      font-size: 60px;
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 36px;
    }

    @media (max-width: 390px) {
      font-size: 28px;
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
