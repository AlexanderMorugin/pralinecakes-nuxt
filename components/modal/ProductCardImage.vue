<template>
  <div class="modalProductCardImage">
    <div class="modalProductCardImage__container">
      <button @click="$emit('closeModal')" class="modalProductCardImage__close">
        <IconClose class="modalProductCardImage__icon" />
      </button>

      <div class="productCardImage">
        <!-- Кнопка "НАЗАД" -->
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
              'modalProductCardImage__icon',
              { modalProductCardImage__icon_disabled: !canScrollPrev },
            ]"
          />
        </button>

        <!-- Кнопка "ВПЕРЕД" -->
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
              'modalProductCardImage__icon',
              { modalProductCardImage__icon_disabled: !canScrollNext },
            ]"
          />
        </button>

        <div class="productCardImage__viewport" ref="emblaRef">
          <ul class="productCardImage__container">
            <li
              v-for="(item, index) in product.image_2800"
              :key="index"
              class="productCardImage__slide"
            >
              <img
                :src="item"
                :alt="product.name"
                :title="product.name"
                class="productCardImage__image"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from "embla-carousel-vue";

const emit = defineEmits(["closeModal"]);
const { product } = defineProps(["product"]);

const [emblaRef, emblaApi] = emblaCarouselVue();

const isImageModalOpen = ref(false);

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
.modalProductCardImage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px) grayscale(50%);
  overflow: hidden;
  z-index: 10;

  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__close {
    position: absolute;
    top: 3%;
    right: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--border-primary);
    backdrop-filter: blur(5px);
    z-index: 11;

    @media (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }
  }

  &__icon {
    width: 30px;
    height: 30px;
    fill: var(--mask-white-secondary);

    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
    }

    &_disabled {
      fill: var(--border-primary);
    }
  }
}

.productCardImage {
  width: 100%;
  max-width: 100%;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  overflow: hidden;

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
    z-index: 11;
    // border: 1px solid red;

    @media (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }

    &_left {
      left: 3%;

      @media (max-width: 767px) {
        left: 10px;
      }
    }

    &_right {
      right: 3%;

      @media (max-width: 767px) {
        right: 10px;
      }
    }

    &_disabled {
      backdrop-filter: blur(0) grayscale(0);
      border: 1px solid var(--border-primary);
      cursor: default;
    }
  }

  &__viewport {
    overflow: hidden;
  }

  &__container {
    display: flex;
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing) * -1);
  }

  &__slide {
    position: relative;
    flex: 0 0 var(--slide-size);
    min-width: 0;
    height: 100vh;
    padding-left: var(--slide-spacing);
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    @media (max-width: 1024px) {
      height: 100%;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
}
</style>
