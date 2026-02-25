<template>
  <ul class="sidebarAdminMenu">
    <li v-for="button in adminMenu" :key="button.id">
      <ButtonSidebarBtn :button="button" @closeModal="$emit('closeModal')" />
    </li>
  </ul>
</template>

<script setup>
import { adminMenu } from "~/utils/constants/admin-menu";
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.sidebarAdminMenu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
