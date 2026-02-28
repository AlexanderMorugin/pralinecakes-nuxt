<template>
  <div class="buttonAddProduct">
    <ButtonLinkWithIcon :path="`/admin/${type}/add`" title="Добавить" />
  </div>
</template>

<script setup>
const { type } = defineProps(["type"]);
</script>

<style lang="scss" scoped>
.buttonAddProduct {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
}
</style>
