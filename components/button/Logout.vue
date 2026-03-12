<template>
  <button class="buttonLogout" @click="handleLogout">
    <span class="buttonLogout__text">{{ text }}</span>
    <IconLogout class="buttonLogout__icon" />
  </button>
</template>

<script setup>
const { text } = defineProps(["text"]);

const emit = defineEmits(["closeModal"]);

const userStore = useUserStore();
const cartStore = useCartStore();
const orderStore = useOrderStore();
// const router = useRouter();

const handleLogout = async () => {
  await $fetch("/api/users/logout", {
    method: "POST",
  });

  // emit("closeModal");
  // userStore.logoutAuthUser();
  // location.reload();

  // if (userStore.user && userStore.user.user_role !== "client") {
  emit("closeModal");
  userStore.logoutAuthUser();
  cartStore.cleanCart();
  orderStore.cleanOrder();
  location.reload();
  // router.push("/");
  // await navigateTo("/");
  // }
};
</script>

<style lang="scss" scoped>
.buttonLogout {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  background: var(--gray-secondary);
  border-radius: var(--border-radius-xs);
  padding: 5px;
  transition: 0.2s ease;

  &:hover {
    background: var(--gray-primary);
  }

  @media (max-width: 767px) {
    gap: 5px;
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: var(--black-primary);
  }

  &__text {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--black-primary);
    letter-spacing: 2px;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
