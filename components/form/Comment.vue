<template>
  <div class="formComment">Форма отправки отзыва</div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.formComment {
  width: 100%;
  // max-width: 300px;
  height: 300px;
  border: 1px solid red;
}
</style>
