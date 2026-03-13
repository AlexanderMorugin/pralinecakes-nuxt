<template>
  <div :class="['userListEmpty', { userListEmpty_admin: place === 'admin' }]">
    {{ title }}
  </div>
</template>

<script setup>
const { title, place } = defineProps(["title", "place"]);
</script>

<style lang="scss" scoped>
.userListEmpty {
  line-height: 26px;
  letter-spacing: 2px;
  color: var(--white-primary);

  &_admin {
    color: var(--black-primary);
  }
}
</style>
