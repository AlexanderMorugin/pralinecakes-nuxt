<template>
  <button
    :class="[
      'buttonConnect',
      { buttonConnect_email: name === 'email' },
      { buttonConnect_whatsapp: name === 'whatsapp' },
      { buttonConnect_telegram: name === 'telegram' },
      { buttonConnect_max: name === 'max' },
    ]"
  >
    <img v-if="name === 'max'" src="/bg/max-logo.png" class="icon" />
    <img v-if="name === 'telegram'" src="/bg/telegram-logo.png" class="icon" />
    <img v-if="name === 'email'" src="/bg/email-logo.png" class="icon" />
    <img v-if="name === 'whatsapp'" src="/bg/whatsapp-logo.png" class="icon" />
  </button>
</template>

<script setup>
const { name } = defineProps(["name"]);
</script>

<style lang="scss" scoped>
.buttonConnect {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 8px;
  overflow: hidden;

  &_email {
    background: #005ff9;
  }

  &_whatsapp {
    background: linear-gradient(48deg, #25d366 25%, #96d6ad 100%);
  }

  &_telegram {
    background: linear-gradient(48deg, #1e96c8 0%, #37aee2 100%);
  }

  &_max {
    background: url("/bg/max-bg.png");
    // background-repeat: no-repeat;
    background-size: cover;
  }
}

.icon {
  width: 26px;
  height: 26px;
}
</style>
