<template>
  <span class="footerSubtitle">{{ subtitle }}</span>
</template>

<script setup>
const { subtitle } = defineProps(["subtitle"]);
</script>

<style lang="scss" scoped>
.footerSubtitle {
  // width: 100%;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  opacity: 0.6;
}
</style>
