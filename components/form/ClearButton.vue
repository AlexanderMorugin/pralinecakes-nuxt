<template>
  <IconClose class="formClearButton" />
</template>

<script setup>
const { place } = defineProps(["place"]);
</script>

<style lang="scss" scoped>
.formClearButton {
  position: absolute;
  top: 42px;
  right: 20px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: var(--mask-black-secondary);
  transition: 0.25s ease;

  &:hover {
    fill: var(--black-primary);
  }

  @media (max-width: 1024px) {
    top: 40px;
  }
}
</style>
