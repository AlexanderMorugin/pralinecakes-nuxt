<template>
  <ul class="modalMenu">
    <li v-for="item in menu" :key="item.id">
      <NuxtLink :to="item.route">
        <ModalElement contentPosition="left" @click="$emit('closeModal')">
          <span class="modalElementTitle">{{ item.title }}</span>
        </ModalElement>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { menu } from "~/utils/constants/menu";

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalMenu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
