<template>
  <div class="mainLayout">
    <div class="mainLayout__overlay" />
    <Header />

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
    background: var(--gradient-page-primary);
    filter: blur(100px);
  }
}
</style>
