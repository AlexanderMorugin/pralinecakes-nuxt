<template>
  <button class="buttonWithIcon">
    <IconClose v-if="name === 'close'" class="buttonWithIcon__icon" />
    <IconMenu v-if="name === 'menu'" class="buttonWithIcon__icon" />
    <IconLogin v-if="name === 'login'" class="buttonWithIcon__icon" />
    <IconFavorite v-if="name === 'favorite'" class="buttonWithIcon__icon" />
    <IconCart v-if="name === 'cart'" class="buttonWithIcon__icon" />
    <IconPhone v-if="name === 'phone'" class="buttonWithIcon__icon" />
    <IconEmail v-if="name === 'email'" class="buttonWithIcon__icon" />
    <IconSearch v-if="name === 'search'" class="buttonWithIcon__icon" />
    <IconLogout v-if="name === 'logout'" class="buttonWithIcon__icon" />
    <IconDelete v-if="name === 'delete'" class="buttonWithIcon__icon" />
    <IconDelivery v-if="name === 'delivery'" class="buttonWithIcon__icon" />
    <IconPerson v-if="name === 'person'" class="buttonWithIcon__icon" />
    <IconAccount v-if="name === 'profile'" class="buttonWithIcon__icon" />
    <IconChat v-if="name === 'chat'" class="buttonWithIcon__icon" />
  </button>
</template>

<script setup>
const { name } = defineProps(["name"]);
</script>

<style lang="scss" scoped>
.buttonWithIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  transition: 0.2s ease;

  &__icon {
    width: 32px;
    height: 32px;
    fill: var(--white-primary);
    opacity: 0.9;
    transition: 0.2s ease;

    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
    }
  }
}

.buttonWithIcon:hover .buttonWithIcon__icon {
  fill: var(--orange-primary);
  opacity: 1;
  animation: scale 0.25s ease-in-out;
}

@keyframes scale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
