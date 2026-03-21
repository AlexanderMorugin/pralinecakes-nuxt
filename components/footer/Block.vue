<template>
  <div class="footerBlock">
    <div class="footerBlock__item">
      <FooterSubtitle :subtitle="subtitle" />
      <FooterMenu v-if="name === 'menu'" />
      <FooterPnone v-if="name === 'phone'" />
      <FooterChat v-if="name === 'chat'" />
      <FooterAddress v-if="name === 'address'" :name="name" />
      <FooterAddress v-if="name === 'time'" :name="name" />
    </div>
  </div>
</template>

<script setup>
const { subtitle, name } = defineProps(["subtitle", "name"]);
</script>

<style lang="scss" scoped>
.footerBlock {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  // @media (max-width: 767px) {
  //   justify-content: flex-start;
  // }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
}
</style>
