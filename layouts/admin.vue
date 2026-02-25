<template>
  <div class="adminLayout">
    <div class="adminLayout__container">
      <HeaderAdminHead />
      <div class="adminLayout__content">
        <!-- Сайдбар для десктопа -->
        <Sidebar v-if="!isScreenLarge" place="desktop" />

        <main class="adminLayout__main page-padding-x">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isScreenLarge } = useResizeLarge();
</script>

<style lang="scss" scoped>
.adminLayout {
  background: var(--white-primary);

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--screen-xxl);
    min-height: 100vh;
    border-left: 1px solid var(--border-secondary);
    border-right: 1px solid var(--border-secondary);
    margin: 0 auto;
  }

  &__content {
    display: grid;
    grid-template-columns: 320px 1fr;
    min-height: calc(100vh - 81px);

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      min-height: calc(100vh - 61px);
    }
  }

  &__main {
    width: 100%;
    background: var(--gradient-admin-primary);
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
