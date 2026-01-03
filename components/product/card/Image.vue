<template>
  <UApp>
    <div class="embla">
      <UCarousel
        ref="carousel"
        v-slot="{ item }"
        :items="product.image_800"
        class="embla__container"
        @select="onSelect"
      >
        <img :src="item" class="slideImage" />
      </UCarousel>

      <div class="flex gap-1 justify-between pt-4 max-w-xs mx-auto">
        <div
          v-for="(item, index) in product.image_100"
          :key="index"
          class="size-11 opacity-25 hover:opacity-100 transition-opacity"
          :class="{ 'opacity-100': activeIndex === index }"
          @click="select(index)"
        >
          <img :src="item" width="44" height="44" class="rounded-lg" />
        </div>
      </div>
    </div>
  </UApp>
</template>

<script setup>
const { product } = defineProps(["product"]);

const items = [
  "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-2-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-3-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-4-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-5-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-6-800-533.webp",
];

const carousel = useTemplateRef("carousel");
const activeIndex = ref(0);

// function onClickPrev() {
//   activeIndex.value--;
// }
// function onClickNext() {
//   activeIndex.value++;
// }
function onSelect(index) {
  activeIndex.value = index;
}

function select(index) {
  activeIndex.value = index;

  carousel.value?.emblaApi?.scrollTo(index);
}
</script>

<style lang="scss" scoped>
.embla {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 100%;
  --slide-spacing: 1rem;
  --slide-spacing: 0;
  --slide-size: 100%;
  overflow: hidden;
}
// .embla__viewport {
//   overflow: hidden;
// }
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.slideImage {
  width: 100%;
  height: auto;
  object-fit: cover;
  // border-radius: 15px;
}
.embla__button {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
  border: 1px solid red;
}
.embla__button_left {
  left: 0;
  // padding-left: 20px;
  // padding-right: 10px;
}
.embla__button_right {
  right: 0;
  // padding-right: 20px;
  // padding-left: 10px;
}
.embla__button_disabled {
  cursor: default;
}
.embla__buttonArrow {
  width: 40px;
  height: 40px;
  fill: white;
}
.embla__buttonArrowRight {
  width: 40px;
  height: 40px;
  fill: white;
  // transform: rotate(180deg);
}
.embla__buttonArrow_disabled {
  opacity: 0.6;
}
</style>
