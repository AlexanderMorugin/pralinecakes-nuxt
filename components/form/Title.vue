<template>
  <h3 class="formCommentTitle">{{ title }}</h3>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.formCommentTitle {
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 28px;
  color: var(--orange-primary);
  letter-spacing: 1px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
}
</style>
