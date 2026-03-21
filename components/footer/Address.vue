<template>
  <div class="footerAddress">
    {{ name === "address" ? ADDRESS : WORK_HOURS }}
  </div>
</template>

<script setup>
import { ADDRESS, WORK_HOURS } from "~/utils/constants/info";

const { name } = defineProps(["name"]);
</script>

<style lang="scss" scoped>
.footerAddress {
  line-height: 24px;
  color: var(--white-primary);
  text-align: center;
}
</style>
