<template>
  <div class="admin-product-add page-padding-x">
    <ProductGreetingAdmin />
    <FormAdminProductTitleCreate type="cakes" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
</script>
