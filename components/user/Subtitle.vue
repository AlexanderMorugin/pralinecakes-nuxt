<template>
  <span :class="['userSubtitle', { userSubtitle_admin: place === 'admin' }]">{{
    subtitle
  }}</span>
</template>

<script setup>
const { subtitle, place } = defineProps(["subtitle", "place"]);
</script>

<style lang="scss" scoped>
.userSubtitle {
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 2px;
  color: var(--white-primary);

  &_admin {
    color: var(--black-primary);
  }
}
</style>
