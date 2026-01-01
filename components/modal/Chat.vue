<template>
  <ModalElement>
    <ButtonChat :link="MAX_LINK" name="max" />
    <ButtonChat :link="`mailto:${EMAIL}`" name="email" />
    <!-- <ButtonChat name="whatsapp" /> -->
    <ButtonChat :link="TELEGRAM_LINK" name="telegram" />
  </ModalElement>
</template>

<script setup>
import { MAX_LINK, EMAIL, TELEGRAM_LINK } from "~/utils/constants/info";
</script>
