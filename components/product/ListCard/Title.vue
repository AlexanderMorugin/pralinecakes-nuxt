<template>
  <NuxtLink :to="route" class="productListCardTitle">
    <h2 class="productListCardTitle__name">
      {{ name }}
    </h2>
    <span class="productListCardTitle__description">{{ description }}</span>
  </NuxtLink>
</template>

<script setup>
const { route, name, description } = defineProps([
  "route",
  "name",
  "description",
]);
</script>

<style lang="scss" scoped>
.productListCardTitle {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 40px;

  @media (max-width: 1600px) {
    padding: 20px;
  }

  @media (max-width: 1024px) {
    gap: 5px;
    padding: 10px;
  }

  &__name {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 28px;
    line-height: 42px;
    color: var(--white-primary);
    letter-spacing: 2px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 1600px) {
      font-size: 22px;
      line-height: 32px;
      letter-spacing: 1px;
    }
  }

  &__description {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 2px;
    opacity: 0.8;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 1600px) {
      font-family: "Montserrat-Regular", sans-serif;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
    }

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0;
    }
  }
}
</style>
