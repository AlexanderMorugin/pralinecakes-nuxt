<template>
  <div class="productListEmpty">{{ title }}</div>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.productListEmpty {
  font-family: "Roboto-Medium", sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 2px;
  color: var(--deep-blue-fourthly);
  text-align: center;
  padding: 60px 20px;
}
</style>
