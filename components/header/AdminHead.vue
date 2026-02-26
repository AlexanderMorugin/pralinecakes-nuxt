<template>
  <header class="adminHeader">
    <div class="adminHeader__logo">
      <LogoAdminLogo v-if="!isScreenLarge" />
    </div>

    <div class="adminHeader__content page-padding-x">
      <ButtonWithIcon
        v-if="isScreenLarge"
        place="admin"
        name="menu"
        @handleClick="isSidebarModalOpen = true"
      />

      <HeaderAdminTitle />

      <ButtonWithIcon
        v-if="
          route.path === `/admin/orders/${route.params.id}` ||
          route.path === `/admin/comments/${route.params.id}` ||
          route.path === `/admin/cakes/${route.params.slug}` ||
          route.path === '/admin/cakes/add'
        "
        name="back"
        @handleClick="router.go(-1)"
      />
    </div>
  </header>

  <!-- Сайдбар для мобилки -->
  <Teleport to="#teleports">
    <Transition name="left">
      <ModalForHeader
        v-if="isSidebarModalOpen"
        place="left"
        title="Админка"
        name="sidebar"
        @closeModal="isSidebarModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const { isScreenLarge } = useResizeLarge();

const isSidebarModalOpen = ref(false);
</script>

<style lang="scss" scoped>
.adminHeader {
  display: grid;
  grid-template-columns: 320px 1fr;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid var(--border-secondary);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: 60px;
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>
