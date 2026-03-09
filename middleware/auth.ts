export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  // const route = useRoute();

  // console.log(route);

  if (!userStore.user) {
    // Для перезагрузки страницы восстанавливаем сессию пользователя
    const result = await useFetch("/api/users/session");

    if (!result.data.value?.user && to.path === "/profile") {
      return navigateTo("/");
    }

    // if (!result.data.value?.user && to.path === "/admin") {
    //   return navigateTo("/");
    // }

    if (result.data.value?.user) {
      userStore.setAuthUser(result.data.value?.user);
    }
  }
});
