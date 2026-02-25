<template>
  <span class="headerAdminTitle">{{
    route.path === "/admin"
      ? "Главная"
      : route.path === "/admin/orders"
        ? "Заказы"
        : route.path === `/admin/orders/${route.params.id}`
          ? "Детали заказа"
          : route.path === "/admin/cakes"
            ? "Торты"
            : route.path === `/admin/cakes/${route.params.slug}`
              ? "Детали торта"
              : route.path === "/admin/cakes/add"
                ? "Новый торт"
                : route.path === "/admin/pastry"
                  ? "Пирожные"
                  : route.path === "/admin/comments"
                    ? "Отзывы"
                    : route.path === `/admin/comments/${route.params.id}`
                      ? "Детали отзыва"
                      : route.path === "/admin/info"
                        ? "Информация"
                        : ""
  }}</span>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
.headerAdminTitle {
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 18px;
  letter-spacing: 4px;
  color: var(--deep-blue-thirdly);

  @media (max-width: 767px) {
    font-size: 14px;
  }
}
</style>
