export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  if (!userStore.user) {
    // Для перезагрузки страницы восстанавливаем сессию пользователя
    const result = await useFetch("/api/users/session");

    // console.log(result);

    if (result.data.value) {
      // return navigateTo("/");

      userStore.setAuthUser(result.data.value);
    }

    // Если пользователь в сессии не создался, идем на логин
    // if (!result.data.value.user) {
    //   return navigateTo("/login");
    // }

    // // Записываем в стор пользователя
    // userStore.setCurrentUser(result.data.value.user);
    // // Находим в БД его книги и записываем в стор
    // await bookStore.loadBooks(result.data.value.user.id);
  }
});
