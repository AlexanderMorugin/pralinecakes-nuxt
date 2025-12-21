<template>
  <div class="mainLayout">
    <Header />

    <img src="/bg/ellipse-top-left-1.png" class="mainLayout__ellipseTopLeft" />
    <img
      src="/bg/ellipse-middle-right-1.png"
      class="mainLayout__ellipseMiddleRight"
    />

    <main class="content">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.mainLayout {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
.mainLayout__ellipseTopLeft {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
.mainLayout__ellipseMiddleRight {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
