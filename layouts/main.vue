<template>
  <div class="mainLayout">
    <div class="mainLayout__overlay" />
    <Header />

    <!-- <main class="mainLayout__content"> -->
    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.mainLayout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient--page-primary);
    filter: blur(100px);
  }

  // &__content {
  //   padding-top: 80px;

  //   @media (max-width: 768px) {
  //     padding-top: 60px;
  //   }
  // }
}
</style>
