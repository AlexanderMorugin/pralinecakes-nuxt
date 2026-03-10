<template>
  <div class="user page-padding-x">
    <UserCard :user="userStore.user" />
    <UserOrders />
    <UserComments />

    <ButtonWithText
      color="red"
      text="удалить"
      @handleClick="isConfirmModalOpen = true"
    />
  </div>

  <!-- Модалка подтверждения -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalConfirm
        v-if="isConfirmModalOpen"
        :isModalOpen="isConfirmModalOpen"
        title="Подтвердить удаление?"
        :isLoading="isLoading"
        @yesClick="deleteUser"
        @noClick="isConfirmModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const toast = useToast();
const route = useRoute();
const userStore = useUserStore();
await userStore.getUser(route.params.id);

const isLoading = ref(false);
const isConfirmModalOpen = ref(false);

const deleteUser = async () => {
  try {
    isLoading.value = true;

    const result = await userStore.deleteUser();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Клиента удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Клиент удален.",
      });
    }
    return navigateTo("/admin/users");
  } catch (error) {
    console.log(error);
  } finally {
    // isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
