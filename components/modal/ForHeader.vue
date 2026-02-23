<template>
  <div
    :class="[
      'modalHeader page-padding-x',
      { modalHeader_left: place === 'left' },
      { modalHeader_right: place === 'right' },
    ]"
    click.stop
  >
    <div class="modalHeader__container">
      <div class="modalHeader__top">
        <span class="modalHeader__topTitle"> {{ title }}</span>
        <ButtonWithIcon name="close" @click="$emit('closeModal')" />
      </div>

      <ModalMenu v-if="name === 'menu'" @closeModal="$emit('closeModal')" />
      <ModalPhone v-if="name === 'phone'" />
      <ModalChat v-if="name === 'chat'" />
      <LazyModalCartDialog
        v-if="name === 'cart'"
        @closeModal="$emit('closeModal')"
      />
    </div>
  </div>
</template>

<script setup>
const { isModalOpen, place, title, name } = defineProps([
  "isModalOpen",
  "place",
  "title",
  "name",
]);
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalHeader {
  position: fixed;
  width: 100%;
  max-width: 768px;
  height: 100%;
  top: 0;
  backdrop-filter: blur(15px) grayscale(50%);
  background: var(--mask-black-thirdly);
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
  z-index: 10;

  @media (max-width: 767px) {
    width: 100%;
  }

  &_left {
    left: 0;
  }

  &_right {
    right: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: 100%;
    color: white;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__topTitle {
    font-family: "Roboto-Medium", sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 12px;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}
</style>
