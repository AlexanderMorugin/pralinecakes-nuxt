<template>
  <div class="modalElement">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modalElement {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: var(--mask-secondary);
  border-radius: var(--border-radius-l);
  padding: 20px;
}
</style>
