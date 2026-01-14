<template>
  <NuxtLink
    v-if="place === 'modalCart'"
    to="/cart"
    class="buttonOrder"
    @click="goToCartPage"
  >
    <span class="buttonOrder__title">{{ title }}</span>
  </NuxtLink>

  <button v-else class="buttonOrder" @click="$emit('continueOrder')">
    <span class="buttonOrder__title">{{ title }}</span>
  </button>
</template>

<script setup>
const { title, place } = defineProps(["title", "place"]);
const emit = defineEmits(["continueOrder", "closeModal"]);

const goToCartPage = () => {
  emit("continueOrder");
  emit("closeModal");
};
</script>

<style lang="scss" scoped>
.buttonOrder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: var(--red-primary);
  border-radius: var(--border-radius-xs);
  transition: 0.2s ease;

  &:hover {
    background: var(--red-secondary);
  }

  @media (max-width: 1600px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  &__title {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--white-primary);
    letter-spacing: 2px;
  }
}
</style>
