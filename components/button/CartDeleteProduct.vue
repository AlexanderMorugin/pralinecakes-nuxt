<template>
  <button @click="$emit('deleteProduct')" class="buttonCartDeleteProduct">
    <span v-if="title" class="buttonCartDeleteProduct__title">{{ title }}</span>

    <IconClose class="buttonCartDeleteProduct__icon" />
  </button>
</template>

<script setup>
const { title } = defineProps(["title"]);
const emit = defineEmits(["deleteProduct"]);
</script>

<style lang="scss" scoped>
.buttonCartDeleteProduct {
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0.6;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &__title {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    line-height: 20px;
    color: var(--white-primary);

    // @media (max-width: 576px) {
    //   font-size: 14px;
    // }
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: var(--white-primary);

    // @media (max-width: 576px) {
    //   width: 20px;
    //   height: 20px;
    // }
  }
}
</style>
