<template>
  <a
    :href="link"
    target="_blank"
    :class="[
      'buttonChat',
      { buttonChat_email: name === 'email' },
      { buttonChat_whatsapp: name === 'whatsapp' },
      { buttonChat_telegram: name === 'telegram' },
      { buttonChat_max: name === 'max' },
    ]"
  >
    <img
      v-if="name === 'max'"
      src="/bg/max-logo.png"
      class="buttonChat__icon"
    />
    <img
      v-if="name === 'telegram'"
      src="/bg/telegram-logo.png"
      class="buttonChat__icon buttonChat__icon_telegram"
    />
    <img
      v-if="name === 'email'"
      src="/bg/email-logo.png"
      class="buttonChat__icon"
    />
    <img
      v-if="name === 'whatsapp'"
      src="/bg/whatsapp-logo.png"
      class="buttonChat__icon"
    />
  </a>
</template>

<script setup>
const { name, link } = defineProps(["name", "link"]);
</script>

<style lang="scss" scoped>
.buttonChat {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    animation: scale 1s ease;
  }

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
    background-size: cover;
  }

  &__icon {
    width: 26px;
    height: 26px;

    &_telegram {
      width: 22px;
      height: 22px;
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
