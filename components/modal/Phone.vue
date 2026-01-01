<template>
  <ul class="modalPhone">
    <li v-for="item in phones" :key="item.id">
      <ModalElement contentPosition="center">
        <a :href="item.link" class="modalElementTitle">{{ item.number }}</a>
      </ModalElement>
    </li>
  </ul>
</template>

<script setup>
import { phones } from "~/utils/constants/phone";
</script>

<style lang="scss" scoped>
.modalPhone {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
