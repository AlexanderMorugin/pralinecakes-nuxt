<template>
  <div class="connectChat">
    <ButtonChat name="max" />
    <ButtonChat name="email" />
    <ButtonChat name="whatsapp" />
    <ButtonChat name="telegram" />
  </div>
</template>

<style lang="scss" scoped>
.connectChat {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: var(--mask-secondary);
  border-radius: var(--border-radius-l);
  padding: 20px;

  // border: 1px solid red;
}
</style>
