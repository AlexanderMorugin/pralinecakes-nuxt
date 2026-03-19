<template>
  <div class="admin-product-add page-padding-x">
    <ProductGreetingAdmin />
    <FormAdminProductTitleCreate type="pastry" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
</script>

<style lang="scss" scoped>
.admin-product-add {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
