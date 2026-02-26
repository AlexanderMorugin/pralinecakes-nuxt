<template>
  <div class="adminLayout">
    <ClientOnly>
      <div class="adminLayout__container" loading="lazy" hydrate-on-visible>
        <HeaderAdminHead />

        <div class="adminLayout__content">
          <!-- Сайдбар для десктопа -->
          <Sidebar v-if="!isScreenLarge" place="desktop" />

          <main class="adminLayout__main page-padding-x">
            <NuxtPage />
          </main>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
const { isScreenLarge } = useResizeLarge();

useHead({
  title: "Пралине Shop",
});
</script>

<style lang="scss" scoped>
.adminLayout {
  background: var(--white-primary);

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--screen-xxl);
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
