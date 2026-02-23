<template>
  <div class="cartEmpty">
    <span class="cartEmpty__text">{{ title }}</span>
  </div>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.cartEmpty {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 24px;
    color: var(--white-primary);

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
}
</style>
