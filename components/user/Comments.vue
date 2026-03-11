<template>
  <ProductListEmpty title="Отзывы не найдены..." :place="place" />
</template>

<script setup>
const { place } = defineProps(["place"]);

// const userStore = useUserStore();
</script>

<!-- <style lang="scss" scoped></style> -->
