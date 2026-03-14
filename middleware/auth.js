export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  if (!userStore.user) {
    // Для перезагрузки страницы восстанавливаем сессию пользователя
    const result = await useFetch("/api/users/session");

    // console.log("defineNuxtRouteMiddleware-session", result.data.value);

    if (!result.data.value.user && to.path === "/profile") {
      userStore.logoutAuthUser();
      return navigateTo("/");
    }

    if (
      result.data.value.user &&
      result.data.value.user.user_role !== "client" &&
      to.path === "/profile"
    ) {
      return navigateTo("/");
    }

    if (result.data.value?.user) {
      userStore.setAuthUser(result.data.value?.user);
    }
    // }

    // if (userStore.user) {
    //   const result = await useFetch("/api/users/session");

    //   console.log("defineNuxtRouteMiddleware-session", result.data.value);
  }
});
