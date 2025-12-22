<template>
  <button class="buttonWithIcon">
    <IconClose v-if="name === 'close'" class="icon" />
    <IconMenu v-if="name === 'menu'" class="icon" />
    <IconLogin v-if="name === 'login'" class="icon" />
    <IconFavorite v-if="name === 'favorite'" class="icon" />
    <IconCart v-if="name === 'cart'" class="icon" />
    <IconPhone v-if="name === 'phone'" class="icon" />
    <IconEmail v-if="name === 'email'" class="icon" />
    <IconSearch v-if="name === 'search'" class="icon" />
    <IconLogout v-if="name === 'logout'" class="icon" />
    <IconDelete v-if="name === 'delete'" class="icon" />
    <IconDelivery v-if="name === 'delivery'" class="icon" />
    <IconPerson v-if="name === 'person'" class="icon" />
    <IconAccount v-if="name === 'account'" class="icon" />
    <IconChat v-if="name === 'chat'" class="icon" />
  </button>
</template>

<script setup>
const { name } = defineProps(["name"]);
</script>

<style scoped>
.buttonWithIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  transition: 0.2s ease;
}

.icon {
  width: 32px;
  height: 32px;
  fill: var(--white-primary);
  transition: 0.2s ease;
}
.buttonWithIcon:hover .icon {
  fill: var(--orange-primary);
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
