<template>
  <section class="productCardDetails">
    <div>Описание</div>
    <div>Отзывы</div>
    <div>Отзывы</div>
  </section>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productCardDetails {
}
</style>
