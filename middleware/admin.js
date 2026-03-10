export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  if (!userStore.user) {
    // Для перезагрузки страницы восстанавливаем сессию пользователя
    const result = await useFetch("/api/users/session");

    if (!result.data.value.user && to.path === "/admin") {
      return navigateTo("/");
    }

    if (result.data.value?.user) {
      userStore.setAuthUser(result.data.value?.user);
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/cakes"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/cakes/add"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === `/admin/cakes/${to.params.slug}`
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/pastry"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/pastry/add"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === `/admin/pastry/${to.params.slug}`
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/comments"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === `/admin/comments/${to.params.id}`
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/orders"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === `/admin/orders/${to.params.id}`
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/users"
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === `/admin/users/${to.params.id}`
    ) {
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role === "client" &&
      to.path === "/admin/info"
    ) {
      return navigateTo("/");
    }
  }
});
