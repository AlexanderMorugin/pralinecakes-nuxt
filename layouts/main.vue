<template>
  <div class="mainLayout">
    <img
      src="/public/bg/ellipse-top-left.png"
      class="mainLayout__circleTopLeft"
    />
    <NuxtPage />
  </div>
</template>

<style scoped>
.mainLayout {
  /* position: relative; */
  width: 100%;
  min-height: 100vh;
}
.mainLayout__circleTopLeft {
  position: fixed;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 100%;
  /* z-index: 1; */
}
</style>
