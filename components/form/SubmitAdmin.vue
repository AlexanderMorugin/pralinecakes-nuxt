<template>
  <button
    type="submit"
    :class="[
      'formSubmit',
      { formSubmit_active: isActive },
      { formSubmit_product: place === 'product' },
    ]"
    @click="$emit('handleClick')"
  >
    <LoaderButton v-if="isLoading" />
    <div v-else>
      <IconUpload v-if="place === 'product'" class="formSubmit__icon" />
      <span v-else class="formSubmit__title">{{ title }}</span>
    </div>
  </button>
</template>

<script setup>
const { title, isActive, isLoading, place } = defineProps([
  "title",
  "isActive",
  "isLoading",
  "place",
]);

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formSubmit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: var(--mask-white-primary);
  border-radius: var(--border-radius-xs);
  transition: 0.2s ease;
  cursor: default;

  &_product {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--mask-blue-thirdly);

    &:hover {
      background: var(--mask-blue-thirdly);
    }

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
      right: 10px;
    }
  }

  &_active {
    background: var(--red-primary);
    cursor: pointer;

    &:hover {
      background: var(--red-secondary);
    }
  }

  &__title {
    font-family: "Inter-Medium", sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    color: var(--white-primary);
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--white-primary);

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
