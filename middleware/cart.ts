export default defineNuxtRouteMiddleware(async (to, from) => {
  const cartStore = useCartStore();
  const localStorageCart = computed(() => {
    if (import.meta.client) {
      return localStorage.getItem("cart");
    }
  });
  if (localStorageCart.value) {
    cartStore.setCart(JSON.parse(localStorageCart.value));
  }
});
