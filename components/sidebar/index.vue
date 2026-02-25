<template>
  <aside class="sidebar">
    <div
      :class="['sidebar__content', { 'page-padding-x': place === 'desktop' }]"
    >
      <!-- <SidebarMenu @closeModal="$emit('closeModal')" /> -->
    </div>
    <div class="sidebar__counter">counter</div>
  </aside>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
const { place } = defineProps(["place"]);
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  border-right: 1px solid var(--border-secondary);
  padding-top: 20px;

  @media (max-width: 1024px) {
    border-right: none;
  }

  &__content {
    position: sticky;
    top: 40px;
  }

  &__counter {
    height: 100px;
    background: var(--green-primary);
  }
}
</style>
