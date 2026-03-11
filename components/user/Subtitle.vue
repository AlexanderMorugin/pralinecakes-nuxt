<template>
  <span class="userSubtitle">{{ subtitle }}</span>
</template>

<script setup>
const { subtitle } = defineProps(["subtitle"]);
</script>

<style lang="scss" scoped>
.userSubtitle {
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 2px;
  color: var(--white-primary);
}
</style>
