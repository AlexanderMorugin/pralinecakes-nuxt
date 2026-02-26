<template>
  <div class="adminCakesAdd">
    <WrapperText place="admin">
      Чтобы создать новый продукт, необходимо сделать первый шаг. При этом будет
      создан товар с уникальным ID. Затем, если все в порядке, сайт
      автоматически перенаправит вас на страницу с карточкой нового продукта.
      Там нужно будет пройти остальные шаги. В конце можно поставить галочку
      "видимости" товара, чтобы он появился на клиентском сайте.
    </WrapperText>
    <FormAdminProductTitleCreate />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>

<style lang="scss" scoped>
.adminCakesAdd {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
