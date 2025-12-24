<template>
  <div
    :class="[
      'modalElement',
      { modalElement_center: contentPosition === 'center' },
      { modalElement_left: contentPosition === 'left' },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const { contentPosition } = defineProps(["contentPosition"]);
</script>
