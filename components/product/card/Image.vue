<template>
  <!-- <section class="productCardImage"> -->
  <!-- <img
      :src="product.image_normal_one"
      :alt="product.name"
      class="productCardImage__pic"
    /> -->
  <section class="productCardImage">
    <!-- Кнопка-стрелка навигации "НАЗАД" -->
    <button
      @click="scrollPrev"
      :disabled="!canScrollPrev"
      :class="[
        'productCardImage__button productCardImage__button_left',
        { productCardImage__button_disabled: !canScrollPrev },
      ]"
    >
      <IconArrowBack
        :class="[
          'productCardImage__arrow',
          { productCardImage__arrow_disabled: !canScrollPrev },
        ]"
      />
    </button>

    <!-- Кнопка-стрелка навигации "ВПЕРЕД" -->
    <button
      @click="scrollNext"
      :disabled="!canScrollNext"
      :class="[
        'productCardImage__button productCardImage__button_right',
        { productCardImage__button_disabled: !canScrollNext },
      ]"
    >
      <IconArrowForward
        :class="[
          'productCardImage__arrow',
          { productCardImage__arrow_disabled: !canScrollNext },
        ]"
      />
    </button>

    <div class="embla__viewport" ref="emblaRef">
      <ul class="embla__container">
        <li
          v-for="(item, index) in product.image_800"
          :key="index"
          class="embla__slide"
        >
          <img :src="item" alt="item.text" class="slideImage" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import emblaCarouselVue from "embla-carousel-vue";

const { product } = defineProps(["product"]);

const [emblaRef, emblaApi] = emblaCarouselVue();

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

.productCardImage {
  position: relative;
  width: 100%;
  max-width: 100%;
  --slide-spacing: 1rem;
  --slide-spacing: 0;
  --slide-size: 100%;
  overflow: hidden;

  // border: 1px solid red;

  &__button {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--border-primary);
    backdrop-filter: blur(5px);
    z-index: 1;

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
    }

    &_left {
      left: 10px;

      @media (max-width: 767px) {
        left: 5px;
      }
    }

    &_right {
      right: 10px;

      @media (max-width: 767px) {
        right: 5px;
      }
    }

    &_disabled {
      backdrop-filter: blur(0) grayscale(0);
      border: 1px solid var(--border-primary);
      cursor: default;
    }
  }

  &__arrow {
    width: 30px;
    height: 30px;
    fill: var(--mask-white-secondary);

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }

    &_disabled {
      fill: var(--border-primary);
    }
  }
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
// .productCardImage .embla__button_left {
//   left: 0;
//   // padding-left: 20px;
//   // padding-right: 10px;
// }
// .embla__button_right {
//   right: 0;
//   // padding-right: 20px;
//   // padding-left: 10px;
// }
// .embla__button_disabled {
//   cursor: default;
// }
// .productCardImage__buttonIcon {
//   width: 30px;
//   height: 30px;
//   fill: white;
// }

// .embla__buttonArrow_disabled {
//   opacity: 0.6;
// }
</style>
