<template>
  <h3 class="titleBlock">{{ title }}</h3>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.titleBlock {
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 28px;
  line-height: 38px;
  color: var(--orange-primary);
  letter-spacing: 1px;

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 34px;
  }
}
</style>
