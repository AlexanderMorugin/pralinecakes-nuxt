<template>
  <!-- <section class="productCardImage"> -->
  <!-- <img
      :src="product.image_normal_one"
      :alt="product.name"
      class="productCardImage__pic"
    /> -->
  <div class="embla">
    <!-- Кнопка-стрелка навигации "НАЗАД" -->
    <button
      @click="scrollPrev"
      :disabled="!canScrollPrev"
      :class="[
        'embla__button embla__button_left',
        { embla__button_disabled: !canScrollPrev },
      ]"
    >
      <IconArrowBack
        :class="[
          'embla__buttonArrow',
          { embla__buttonArrow_disabled: !canScrollPrev },
        ]"
      />
    </button>

    <!-- Кнопка-стрелка навигации "ВПЕРЕД" -->
    <button
      @click="scrollNext"
      :disabled="!canScrollNext"
      :class="[
        'embla__button embla__button_right',
        { embla__button_disabled: !canScrollNext },
      ]"
    >
      <IconArrowForward
        :class="[
          'embla__buttonArrowRight',
          { embla__buttonArrow_disabled: !canScrollNext },
        ]"
      />
    </button>

    <div class="embla__viewport" ref="emblaRef">
      <ul class="embla__container">
        <li v-for="(item, index) in items" :key="index" class="embla__slide">
          <img :src="item" alt="item.text" class="slideImage" />
        </li>
      </ul>
    </div>
  </div>

  <div>
    <div v-for="(item, index) in items" :key="index" @click="select(index)">
      <img :src="item" />
    </div>
  </div>
  <!-- </section> -->
</template>

<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

// const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [
//   Autoplay({ delay: 3000, stopOnInteraction: false }),
//   Fade(),
// ]);
const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true });
// const [emblaThumbsRef, emblaThumbsApi] = emblaCarouselVue({
//   containScroll: 'keepSnaps',
//   dragFree: true,
// });
const items = [
  "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-2-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-3-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-4-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-5-800-533.webp",
  "/images/cakes/esterhazy/esterhazy-cake-6-800-533.webp",
];

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);

const onSelect = (emblaApi) => {
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

// Листать влево, по нажатию на стрелку Prev
const scrollNext = () => emblaApi?.value.scrollNext();

// Листать враво, по нажатию на стрелку Next
const scrollPrev = () => emblaApi?.value.scrollPrev();

function updateButtonStates(emblaApi) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value) return;

  updateButtonStates(emblaApi.value);
  emblaApi.value.on("select", updateButtonStates);

  onSelect(emblaApi.value);
});

// const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
// .productCardImage {
//   width: 100%;
//   border: 1px solid red;
//   overflow: hidden;

//   &__pic {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;

//     @media (max-width: 1280px) {
//       height: auto;
//     }
//   }
// }

.embla {
  position: relative;
  width: 100%;
  max-width: 100%;
  --slide-spacing: 1rem;
  --slide-spacing: 0;
  --slide-size: 100%;
  overflow: hidden;
}
.embla__viewport {
  overflow: hidden;
}
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
