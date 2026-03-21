<template>
  <div class="footerChat">
    <ButtonChat :link="MAX_LINK" name="max" />
    <ButtonChat :link="`mailto:${EMAIL}`" name="email" />
  </div>
</template>

<script setup>
import { MAX_LINK, EMAIL } from "~/utils/constants/info";
</script>

<style lang="scss" scoped>
.footerChat {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
