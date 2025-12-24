<template>
  <div
    :class="[
      'modalHeader',
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

      <ConnectPhoneForModal v-if="name === 'phone'" />
      <ConnectChatForModal v-if="name === 'chat'" />
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
  padding: 20px;
  z-index: 10;

  @media (max-width: 768px) {
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
    // padding: 32px;

    // border: 1px solid red;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // border: 1px solid red;
  }

  &__topTitle {
    font-family: "Roboto-Medium", sans-serif;
    font-size: 24px;
    // line-height: 36px;
    text-transform: uppercase;
    // text-align: center;
    letter-spacing: 12px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
