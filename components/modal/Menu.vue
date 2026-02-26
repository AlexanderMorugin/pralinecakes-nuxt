<template>
  <ul class="modalMenu">
    <li v-for="item in modalMenu" :key="item.id">
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

const modalMenu = computed(() =>
  useRoute().name === "index" ? menu.slice(1, menu.length) : menu,
);
</script>

<style lang="scss" scoped>
.modalMenu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
