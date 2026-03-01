<template>
  <NuxtLink
    :to="button.path"
    class="buttonSidebar"
    @click="$emit('closeModal')"
    :class="[
      'buttonSidebar',
      { buttonSidebar_active: button.path === route.path },
    ]"
    >{{ button.title }}
  </NuxtLink>
</template>

<script setup>
const route = useRoute();

const { button } = defineProps(["button"]);
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.buttonSidebar {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-l);
  border: 1px solid var(--border-secondary);
  font-family: "Roboto-Medium", sans-serif;
  // font-size: 16px;
  letter-spacing: 2px;
  color: var(--deep-blue-fourthly);
  padding: 20px;
  transition: 0.2s ease;

  &:hover {
    background: var(--mask-blue-secondary);
  }

  @media (max-width: 1024px) {
    border: 1px solid var(--border-primary);
    color: var(--white-primary);
    letter-spacing: 3px;
  }

  &_active {
    background: var(--deep-blue-thirdly);
    box-shadow: var(--shadow-thirdly);
    color: var(--white-primary);
    cursor: auto;

    &:hover {
      background: var(--deep-blue-thirdly);
    }
  }
}
</style>
