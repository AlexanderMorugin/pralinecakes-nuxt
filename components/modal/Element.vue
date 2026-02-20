<template>
  <div
    :class="[
      'modalElement',
      { modalElement_center: props.contentPosition === 'center' },
      { modalElement_left: props.contentPosition === 'left' },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  contentPosition: String,
});
</script>
