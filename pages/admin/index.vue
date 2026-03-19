<template>
  <div class="admin-product-add page-padding-x">
    <ButtonLinkAdminForMain type="orders" path="/admin/orders" title="Заказы" />
    <ButtonLinkAdminForMain type="cakes" path="/admin/cakes" title="Торты" />
    <ButtonLinkAdminForMain
      type="pastry"
      path="/admin/pastry"
      title="Пирожные"
    />
    <ButtonLinkAdminForMain
      type="comments"
      path="/admin/comments"
      title="Отзывы"
    />
    <ButtonLinkAdminForMain type="users" path="/admin/users" title="Клиенты" />
    <ButtonLinkAdminForMain
      type="info"
      path="/admin/settings"
      title="Настройки"
    />
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
  gap: 20px;

  @media (max-width: 767px) {
    gap: 10px;
  }
}
</style>
